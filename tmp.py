import os
import pymongo
from bson.binary import Binary
import base64

# Connect to MongoDB
client = pymongo.MongoClient("mongodb+srv://SkyStats:X664N&r!YB@skyblockstats.dlrcuwn.mongodb.net?retryWrites=true&w=majority")
db = client["SkyblockStats"]
collection = db["vanillaTextures"]

def save_png_to_mongodb(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.png'):
                filepath = os.path.join(root, file)
                
                # Read the PNG file as binary data
                with open(filepath, 'rb') as f:
                    image_data = f.read()

                # Convert the binary data to base64 string
                image_base64 = base64.b64encode(image_data).decode('utf-8')

                # Create a document to insert into MongoDB
                document = {
                    "material": file.replace('.png', ''),
                    "url": f"data:image/png;base64,{image_base64}"
                }

                # Insert the document into MongoDB
                collection.insert_one(document)
                print(f"Inserted {file} into MongoDB.")

if __name__ == "__main__":
    directory_path = input("Enter the directory path to start traversing: ")
    save_png_to_mongodb(directory_path)
