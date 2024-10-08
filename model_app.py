from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
import warnings
import os


# this will use the model we trained and incoperate it into the website by using flask

app = Flask(__name__)

# let's load in the model
model = load_model ('/Users/melissaaprilcastro/FeatherFind/Bird_class_model.h5')

# error handling => create list of allowed extensions to make sure to only allow images as .jpg, .png, .img.
extension = {'png', 'jpg', 'jpeg'}

'''
create function to check for proper extension (image file)
else if it is not the right format, we will display a warning banner on the site
'''
def check_ext(file):
    
    try:
        return ( ('.' in filename) and (filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS))
    except:
        # documentation for wanrtings from Geek for Geeks
        # this will create a display banner with the warning message on the webpage
        warnings.warn('error. wrong extension\nPlease upload an image of .png, .img, .jpg',  
                                 DeprecationWarning)
    

# this is a root (aka we link it to the page?)
@app.route('/predict', methods=['POST'])
def predict():
    # check if the file is part of the request
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    # check if the file is allowed using check_ext
    if ((file) and check_ext(file)(file.filename)):
        # if true then we load and preprocess the image
        img = load_img(file, target_size=(224, 224))  # adjiust size based on model (note to self to check)
        # axis needs batch dimension
        img_array = np.expand_dims(img_array, axis=0)  

        # Musing model to make predictions
        predictions = model.predict(img_array)
        # show the user a confidence score
        confidence_score = np.max(predictions)
        # show the predicted class
        predicted_class = np.argmax(predictions)

        # return the prediction and confidence score
        return jsonify({
            'predicted_class': int(predicted_class),
            'confidence_score': float(confidence_score)
        })

    else:
        return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    app.run(debug=True)


'''
resources:
https://youtu.be/0nr6TPKlrN0?si=4KLqPNBqLWrY67Nq
https://www.w3schools.com/python/python_try_except.asp
https://www.w3schools.com/python/gloss_python_error_handling.asp
'''