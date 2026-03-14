import tensorflow as tf
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input, decode_predictions
from tensorflow.keras.preprocessing import image
import numpy as np
import io
from PIL import Image

# Load the pre-trained MobileNetV2 model
model = MobileNetV2(weights='imagenet')

def prepare_image(image_bytes):
    """
    Preprocess the image for MobileNetV2.
    """
    img = Image.open(io.BytesIO(image_bytes))
    img = img.convert('RGB')
    img = img.resize((224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)
    return img_array

def predict(image_bytes):
    """
    Predict the class of the image.
    """
    prepared_img = prepare_image(image_bytes)
    predictions = model.predict(prepared_img)
    decoded_predictions = decode_predictions(predictions, top=3)[0]
    
    results = []
    for (imagenet_id, label, probability) in decoded_predictions:
        results.append({
            "label": label,
            "probability": float(probability)
        })
    return results
