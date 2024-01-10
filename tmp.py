import os
import pymongo
from bson.binary import Binary
import base64
import json
from PIL import Image, ImageSequence
import apng

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://SkyStats:X664N&r!YB@skyblockstats.dlrcuwn.mongodb.net?retryWrites=true&w=majority")
db = client["SkyblockStats"]
collection = db["FurfSkyRebornTextures"]

def create_apng(frames, output_path, frametime):
    try:
        images = [Image.open(frame) for frame in frames]
        images[0].save(
            output_path,
            save_all=True,
            append_images=images[1:],
            duration=frametime * 100,  # delay in milliseconds
            loop=0  # loop indefinitely
        )
    except:
        print("Please add manualy: ", output_path)

def split_image(image_path):
    image = Image.open(image_path)
    width, height = image.size

    if width != height:
        parts = []
        for i in range(height // width):
            top = i * width
            bottom = (i + 1) * width
            part_image = image.crop((0, top, width, bottom))
            parts.append(part_image)
        
        return parts
    else:
        return [image]

def save_png_to_mongodb(directory):
    for root, dirs, files in os.walk(directory):
        png_files = [file for file in files if file.endswith('.png')]

        for file in png_files:
            try:
                filepath = os.path.join(root, file)
                basename = file.replace('.png', '')

                # Check for .mcmeta file and read the frame rate
                mcmeta_path = os.path.join(root, f"{basename}.png.mcmeta")
                frametime = None
                if os.path.exists(mcmeta_path):
                    with open(mcmeta_path, 'r') as f:
                        mcmeta_data = json.load(f)
                        frametime = mcmeta_data.get("animation", {}).get("frametime")

                if frametime and len(split_image(filepath)) > 1:
                    parts = split_image(filepath)
                    frames = [os.path.join(root, f"{basename}_{i}.png") for i, _ in enumerate(parts)]
                    
                    # Save each part as a separate PNG
                    for i, part in enumerate(parts):
                        part_path = os.path.join(root, f"{basename}_{i}.png")
                        part.save(part_path)

                    apng_output_path = os.path.join(root, f"{basename}.apng")
                    create_apng(frames, apng_output_path, frametime // 20)  # Convert to centiseconds
                    
                    with open(apng_output_path, 'rb') as f:
                        apng_data = f.read()
                    
                    apng_base64 = base64.b64encode(apng_data).decode('utf-8')
                    
                    document = {
                        "material": basename,
                        "url": f"data:image/apng;base64,{apng_base64}"
                    }
                    
                else:
                    with open(filepath, 'rb') as f:
                        image_data = f.read()
                    
                    image_base64 = base64.b64encode(image_data).decode('utf-8')
                    
                    document = {
                        "material": basename,
                        "url": f"data:image/png;base64,{image_base64}"
                    }
                
                collection.insert_one(document)
            except:
                print("error with: ", basename)

if __name__ == "__main__":
    directory_path = input("Enter the directory path to start traversing: ")
    save_png_to_mongodb(directory_path)