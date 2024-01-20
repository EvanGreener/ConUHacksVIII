from math import e
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from dotenv import load_dotenv
import requests, os, json
from functools import wraps
import pandas as pd
import numpy as np
import os

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/get-statistics', methods=['POST'])
def get_statistics():
    try:
        content_type = request.headers.get('Content-Type')
        print("1")
        if (content_type != 'application/json'):
            return make_response(jsonify({"error": "Content type not application/json"}), 500)
        
        # Will use later
        request_body = request.json
        print("2")

        data_folder = '../datasets'
        crime_df = pd.read_csv( os.path.join(os.path.dirname(__file__), "../datasets/actes-criminels.csv") )
        print("3")

        # Filter out rows with NaN values in longitude or latitude
        crime_df = crime_df.dropna(subset=['LONGITUDE', 'LATITUDE'])

        # Filter date range
        crime_df['DATE'] = pd.to_datetime(crime_df['DATE'])
        start_date = pd.to_datetime('2024-01-15')
        end_date = pd.to_datetime('2024-12-31')

        # Filter rows based on the date range
        crime_df = crime_df[(crime_df['DATE'] >= start_date) & (crime_df['DATE'] <= end_date)]

        crime_array = crime_df[['CATEGORIE', 'LONGITUDE', 'LATITUDE']].values.tolist()

        return make_response(jsonify(crime_array), 200)
    except Exception as e :
        return make_response(jsonify({"error": str(e)}), 500)


# Start the server
if __name__ == '__main__':
    app.run(port=4000, debug=True)