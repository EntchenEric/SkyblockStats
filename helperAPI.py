from io import BytesIO
from flask import Flask, jsonify, request
from flask_cors import CORS
import base64
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Route to update data
@app.route('/colorizeItem', methods=['POST'])
def colorizeItem():
    codedTexture = request.json.get("texture")
    color = request.json.get("color")
    
    if not codedTexture:
        return jsonify({"success": False, "message": "Missing Texture", "data": None, "error": "MISSING_TEXTURE",
                        "extra": "Please specify a texture"})
    if not color:
        return jsonify({"success": False, "message": "Missing Color", "data": None, "error": "MISSING_COLOR",
                        "extra": "Please specify a color"})
    if not color.startswith("#"):
        return jsonify({"success": False, "message": "Bad Color", "data": None, "error": "BAD_COLOR",
                        "extra": "Make sure you are sending a hex color string starting with a #."})
    print(color)
    if len(codedTexture) > 10000:
        return jsonify({"success": False, "message": "Texture too large", "data": None, "error": "TEXTURE_TOO_LARGE",
                        "extra": "Your base64 Texture String may only be up to 10.000 Characters long."})

    try:
        decodedTextureBytes = base64.b64decode(codedTexture)
    except Exception as e:
        return jsonify({"success": False, "message": "Decoding Failed. Make sure you are sending a base64 encoded Texture String.", "data": None, "error": "BAD_TEXTURE",
                        "extra": f"{e}"})

    if not decodedTextureBytes:
        return jsonify({"success": False, "message": "Decoding Failed", "data": None, "error": "BAD_TEXTURE",
                        "extra": "Make sure you are sending a base64 encoded Texture String."})

    texture = Image.open(BytesIO(decodedTextureBytes))

    if not texture:
        return jsonify({"success": False, "message": "Decoding Failed", "data": None, "error": "BAD_TEXTURE",
                        "extra": "Make sure your base64 string contains the bytes of your Image."})
    try:
        color = invert_hex_color(color)
        color = tuple(int(color.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))
    except Exception as e:
        return jsonify({"success": False, "message": "Bad Color. Make sure you are sending a hex color string starting with a #. containing 6 hex digits. e.g. NOT #fff", "data": None, "error": "BAD_COLOR",
                        "extra": f"{e}"})
        
    

    if not color or not len(color) == 3:
        return jsonify({"success": False, "message": "Bad Color", "data": None, "error": "BAD_COLOR",
                        "extra": "Make sure you are sending a hex color string starting with a #. containing 6 hex digits. e.g. NOT #fff"})

   
    
    img = texture.convert("RGBA")
    new_image = []
    d = img.getdata()
    
    for item in d:
    
        # change all white (also shades of whites)
        # pixels to yellow
        newColor = []
        for id, c in enumerate(item):
            if id != 3:
                #print(id)
                newColor.append(c - color[id])
            else:
                newColor.append(c)
        new_image.append(tuple(newColor))

    
    # update image data
    img.putdata(new_image)

    # Convert the Image to base64
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    

    return jsonify({"success": True, "message": "Image processed and saved successfully", "data": img_str})

def invert_hex_color(hex_color):
    # Remove the '#' from the beginning of the hex color if it exists
    hex_color = hex_color.lstrip('#')

    # Convert the hex color to RGB
    rgb_color = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))

    # Invert each of the RGB components
    inverted_rgb_color = tuple(255 - color for color in rgb_color)

    # Convert the inverted RGB color back to a hex string
    inverted_hex_color = '#{:02x}{:02x}{:02x}'.format(*inverted_rgb_color)

    return inverted_hex_color


@app.route('/combineImages', methods=['POST'])
def combineImages():
    base64Array = request.json.get("Images")
    print("Now combining images")
    if not base64Array:
        return jsonify({"success": False, "message": "Missing Images", "data": None, "error": "MISSING_IMAGES",
                        "extra": "Please specify a list of base64 encoded Images"})
    if len(base64Array) <= 1:
        return jsonify({"success": False, "message": "Not enough Images", "data": None, "error": "NOT_ENOUGH_IMAGES",
                        "extra": "You need to send at least 2 Images."})
        
    if len(base64Array) > 10:
        return jsonify({"success": False, "message": "Too many Images", "data": None, "error": "TOO_MANY_IMAGES",
                        "extra": "You may only send up to 10 Images."})
    images = []
    for base64Image in base64Array:
        try:
            decodedTextureBytes = base64.b64decode(base64Image)
        except:
            return jsonify({"success": False, "message": "Decoding Failed", "data": None, "error": "BAD_TEXTURE",
                            "extra": "Make sure you are sending a base64 encoded Texture String."})

        if not decodedTextureBytes:
            return jsonify({"success": False, "message": "Decoding Failed", "data": None, "error": "BAD_TEXTURE",
                            "extra": "Make sure you are sending a base64 encoded Texture String."})

        texture = Image.open(BytesIO(decodedTextureBytes))

        if not texture:
            return jsonify({"success": False, "message": "Decoding Failed", "data": None, "error": "BAD_TEXTURE",
                            "extra": "Make sure your base64 string contains the bytes of your Image."})
        images.append(texture)
        
    for img in images[1:]:
        images[0].paste(img, (0, 0), img)
        
    # Convert the Image to base64
    buffered = BytesIO()
    images[0].save(buffered, format="PNG")
    img_str = base64.b64encode(buffered.getvalue()).decode("utf-8")
    print("Successfully combining images")
    return jsonify({"success": True, "message": "Image processed and saved successfully", "data": img_str})
        
    
    
if __name__ == '__main__':
    app.run(debug=True, port=5005)
