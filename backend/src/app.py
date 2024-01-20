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

@app.route('/api/get-statistics', methods=['GET'])
def get_statistics():
    return 'Hello, World!'

# Start the server
if __name__ == '__main__':
    app.run(port=4000, debug=True)