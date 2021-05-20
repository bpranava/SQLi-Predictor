from flask import Flask,render_template,url_for,request
import pandas as pd 
import numpy as np
from nltk.corpus import stopwords 

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/predict",methods=['POST'])
def predict():
    df = pd.read_csv("sqli.csv",encoding='utf-16')

    from sklearn.feature_extraction.text import CountVectorizer
    vectorizer = CountVectorizer( min_df=2, max_df=0.7, stop_words=stopwords.words('english'))
    posts = vectorizer.fit_transform(df['Sentence'].values.astype('U')).toarray()

    transformed_posts=pd.DataFrame(posts)
    df=pd.concat([df,transformed_posts],axis=1)
    print(df.columns)
    X=df[df.columns[2:]]
    y=df['Label']

    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    #logistic regression
    from sklearn.linear_model import LogisticRegression
    clf = LogisticRegression(random_state=0).fit(X_train, y_train)

    from sklearn.metrics import accuracy_score, classification_report
    y_pred=clf.predict(X_test)
    print(classification_report(y_test,y_pred))

    if request.method == 'POST':
        # message = request.form['message']
        print(request,request.form.to_dict())
        # data = [message]
        # vect = vectorizer.transform(data).toarray()
        # my_prediction = clf.predict(vect)
		
    return render_template('result.html',prediction = my_prediction)