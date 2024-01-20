from math import e
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from dotenv import load_dotenv
import requests, os, json
from functools import wraps
import pandas as pd
import numpy as np

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/get-statistics', methods=['POST'])
def get_statistics():
    try:

        content_type = request.headers.get('Content-Type')
        if (content_type != 'application/json'):
            return make_response(jsonify({"error": "Content type not application/json"}), 500)
        
        # Will use later
        request_body = request.json

        data_folder = '../datasets'
        crime_df = pd.read_csv(data_folder+ "/actes-criminels.csv")
        
        return make_response(crime_df.to_dict(), 200)
    except Exception as e :
        return make_response(jsonify({"error": e}), 500)


# Start the server
if __name__ == '__main__':
    app.run(port=4000, debug=True)