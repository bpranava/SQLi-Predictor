import pandas as pd 
import numpy as np
import pickle
import json
from keras.models import load_model
from nltk.corpus import stopwords
from flask import Flask,render_template,url_for,request, Response
from flask_cors import CORS, cross_origin
from sklearn.feature_extraction.text import CountVectorizer

import warnings
warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/predict",methods=['POST'])
def predict():
    data = request.json
    username = [data['username']]
    password = [data['password']]
    
    #LOGISTIC REGRESSION MODEL USED
   
    infile = open('models/ensemble_model','rb')
    mymodel = pickle.load(infile)

    df = pd.read_csv("sqli.csv",encoding='utf-16')
    vectorizer = CountVectorizer( min_df=2, max_df=0.7, stop_words=stopwords.words('english'))
    vectorizer.fit_transform(df['Sentence'].values.astype('U')).toarray()


    #USERNAME
    user_vect = vectorizer.transform(username).toarray()
    user_pred = mymodel.predict(user_vect)

    # username_isSQLi says if username has an sql injection or not
    username_isSQLi = True
    if user_pred[0]==0:
        username_isSQLi= False
    else:
        username_isSQLi= True

    #PASSWORD
    password_vect = vectorizer.transform(password).toarray()
    password_pred = mymodel.predict(password_vect)
    # password_isSQLi says if password has an sql injection or not
    password_isSQLi = True
    if password_pred[0]==0:
        password_isSQLi= False
    else:
        password_isSQLi= True

    #DATA OBJECT FOR THE RESPONSE
    data = {'field'  : 'None','sqli' : True }
    if username_isSQLi == True and password_isSQLi==True:
        data['field'] = 'Username and Password'
        data['sqli'] = True
    elif username_isSQLi == True:
        data['field'] = 'Username'
    elif password_isSQLi == True:
        data['field'] = 'Password'
    else:
        data['field'] = 'None'
        data['sqli'] = False

    js = json.dumps(data)
    response = Response(js, status=200, mimetype='application/json')
    return response