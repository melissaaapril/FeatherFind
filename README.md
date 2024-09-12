# FeatherFind
work in progress
Feather Find app will be bird identifying webapp 

we performed model tunning for a CNN model using  to refine accuracy and saved the trained model using the `pickle` library that we will deploy to our website

## Table of Contents
work in progress
<!---
- [Introduction](#introduction)
- [Data](#data)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Results](#results)
- [Contributing](#contributing)
- [License](#license)
--> 

## Introduction
work in progress

In this project, we focused on creating and optimizing a CNN model using X for hyperparameter tuning. The best model was then saved using the `pickle` library for future use. This approach helps in selecting the most effective model parameters and ensures reproducibility by preserving the trained model.

We trained our model to read bird species images data to calssify bord species 

## Data

The dataset used for this project was open source X and was preprocessed and prepared before modeling and is included in the repo. The target variable is a multilabel (this might be wrong lmao), indicating the species of a certain bird

## Dependencies
work in progress
To run this project, you need the following Python libraries:

- pandas
- numpy
- scikit-learn
- pickle
- matplotlib (optional, for plotting)
- seaborn (optional, for plotting)
- os
- sklearn.model_selection import train_test_split, GridSearchCV
- sklearn.linear_model import LogisticRegression
- sklearn.metrics import accuracy_score, confusion_matrix, precision_recall_curve

You can install these dependencies using pip:

EG:
pip install pandas numpy scikit-learn matplotlib seaborn

## below this header, i have not edited anything else lol i stole this from another project i did so we gotta edit

## Usage

1. **Clone the Repository:**


   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name


2. **Load and Preprocess the Data:**

   The dataset should be loaded and split into training and testing sets. Any necessary preprocessing steps should be applied.

3. **Perform Grid Search for Model Selection:**

   The `GridSearchCV` method from `scikit-learn` is used to perform an exhaustive search over specified parameter values for the c value in logistic regression.

  eg:
   param_grid = {
       'C': [0.1, 1, 10, 100],
       'penalty': ['l1', 'l2'],
       'solver': ['liblinear']
   }

   grid_search = GridSearchCV(LogisticRegression(), param_grid, cv=c)
   grid_search.fit(X_train, y_train)

   print("Best parameters found: ", grid_search.best_params_)
   

4. **Train the Final Model:**

   Using the best parameters found, train the logistic regression model.

   ```python
   best_model = grid_search.best_estimator_
   best_model.fit(X_train, y_train)
   ```

5. **Save the Model:**

   The trained model is saved using the `pickle` library.

   ```python
   import pickle

   with open('best_logistic_model.pkl', 'wb') as file:
       pickle.dump(best_model, file)
   ```

6. **Load and Use the Saved Model:**

   To load the saved model for future predictions:

   ```python
   with open('best_logistic_model.pkl', 'rb') as file:
       loaded_model = pickle.load(file)

   predictions = loaded_model.predict(X_test)
   ```

## Results

The results of the grid search and the performance metrics of the final model should be included here. This can be in the form of accuracy, precision, recall, F1 score, etc.

## Contributing

If you wish to contribute to this project, please create a fork of the repository and submit a pull request with your proposed changes.

## License

This project guide is licensed under the UCLA License and is not available to the public - see the LICENSE file for details.
