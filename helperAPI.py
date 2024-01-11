from io import BytesIO
from flask import Flask, jsonify, request
from flask_cors import CORS
import base64
from PIL import Image

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Route to update data
@app.route('/colorizeItem', methods=['POST'])
def update_data():
    codedTexture = request.json.get("texture")
    color = request.json.get("color")
    
    if not color.startswith("#"):
        return jsonify({"success": False, "message": "Bad Color", "data": None, "error": "BAD_COLOR",
                        "extra": "Make sure you are sending a hex color string starting with a #."})

    if len(codedTexture) > 10000:
        return jsonify({"success": False, "message": "Texture too large", "data": None, "error": "TEXTURE_TOO_LARGE",
                        "extra": "Your base64 Texture String may only be up to 10.000 Characters long."})

    try:
        decodedTextureBytes = base64.b64decode(codedTexture)
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

    color = tuple(int(color.lstrip('#')[i:i+2], 16) for i in (0, 2, 4))

    if not color or not len(color) == 3:
        return jsonify({"success": False, "message": "Bad Color", "data": None, "error": "BAD_COLOR",
                        "extra": "Make sure you are sending a hex color string starting with a #. containing 6 hex digits. e.g. NOT #fff"})

    img = texture.convert("RGBA")
    new_image = []
    d = img.getdata()
    for item in d:
    
        # change all white (also shades of whites)
        # pixels to yellow
        if item[0] in list(range(200, 256)):
            new_image.append((255, 224, 100))
        else:
            new_image.append(item)
    
    # update image data
    img.putdata(new_image)

    img.save("test.png")

    return jsonify({"success": True, "message": "Image processed and saved successfully", "data": None})


if __name__ == '__main__':
    app.run(debug=True)
