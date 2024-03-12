from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)

load_dotenv()

@app.route("api/user/login", methods=["POST"])
def userLogin():
  if request.method == "POST":
    try:
      post = request.get_json()

      postData = [
        post.get("EMAIL_USER"),
        post.get("PASSWORD_USER")
      ]
    except Exception as e:
      return jsonify({"message": "Error: " + str(e)}), 400