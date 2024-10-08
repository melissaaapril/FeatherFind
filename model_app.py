from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
from flask_restful import Resource, Api
import pickle
import warnings
from flask_cors import CORS
import os


# this will use the model we trained and incoperate it into the website by using flask
app = Flask(__name__)
# lets create API object
api = Api(app)
CORS(app)

# load in model
model = load_model('/Users/melissaaprilcastro/FeatherFind/Bird_class_model.h5')


''' functions and classes below'''
# this function will check for proper extension (image file) or display a warning banner on the site
def check_ext(filename):
    # error handling => create list of allowed extensions to make sure to only allow images as .jpg, .png, .img.
    extensions = {'png', 'jpg', 'jpeg'}
    try:
        return ( ('.' in filename) and (filename.rsplit('.', 1)[1].lower() in extensions))
    except:
        # documentation for wanrtings from Geek for Geeks
        # this will create a display banner with the warning message on the webpage
        warnings.warn('error. wrong extension\nPlease upload an image of .png, .img, .jpg',  
                                DeprecationWarning)


# creating class
class prediction(Resource):
    def post(self):
        # let's pass in the image file using our API
        file = request.files.get('file')
        # if there is a file and it does have the right extensions, we proceeed
        if file and check_ext(file.filename):
            # image preprocessing to fit into model
            img = load_img(file, target_size=(224, 224))
            img_array = img_to_array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)

            # using model to make predictions after preprocessing
            predictions = model.predict(img_array)
            # show the user a confidence score
            confidence_score = np.max(predictions)
            # show the predicted class
            predicted_class = np.argmax(predictions)

            # now we return the score and class
            return jsonify({
            'predicted_class': int(predicted_class),
            'confidence_score': float(confidence_score)
        })
        # if somethng goes wrong, invalid file type wanring shows
        else:
            return jsonify({'error': 'Invalid file type'}), 400
    
# we need to link it? to our API/endpoint
api.add_resource(prediction, '/predict', methods=['POST'])

# this one actually runs the app
if __name__ == '__main__':
    app.run(debug=True)


'''
resources:
https://youtu.be/0nr6TPKlrN0?si=4KLqPNBqLWrY67Nq
https://www.w3schools.com/python/python_try_except.asp
https://www.w3schools.com/python/gloss_python_error_handling.asp
https://youtu.be/AZfJ8buL5II?si=5yOSZfv_c19AsEOU
'''