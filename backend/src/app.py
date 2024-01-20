from math import e
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from dotenv import load_dotenv
import requests, os, json
from functools import wraps
import pandas as pd
import numpy as np
import os
from datetime import date, datetime

load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/get-statistics', methods=['POST'])
def get_statistics():
    try:
        content_type = request.headers.get('Content-Type')
        if (content_type != 'application/json'):
            return make_response(jsonify({"error": "Content type not application/json"}), 500)
        
        date_col = 'DATE'
        category_col = 'CATEGORIE'
        x_col = 'X'
        y_col = 'Y'
        longtitude_col = 'LONGITUDE'
        latitude_col = 'LATITUDE'
        request_body = request.json

        start_date = pd.to_datetime(request_body['startDate'])
        end_date = pd.to_datetime(request_body['endDate'])

        crime_df = pd.read_csv( os.path.join(os.path.dirname(__file__), "../datasets/actes-criminels.csv") )

        # Keep only crimes from start - end 
        crime_df = crime_df[((crime_df[date_col] > start_date) & (crime_df[date_col] < end_date) )]

        # Filter out rows with NaN values in longitude or latitude
        crime_df = crime_df.dropna(subset=['LONGITUDE', 'LATITUDE'])
        crime_array = crime_df[['CATEGORIE', 'LONGITUDE', 'LATITUDE']].values.tolist()

        return make_response(jsonify(crime_array), 200)
    except Exception as e :
        return make_response(jsonify({"error": str(e)}), 500)


# Start the server
if __name__ == '__main__':
    app.run(port=4000, debug=True)