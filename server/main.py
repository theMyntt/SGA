from flask import Flask, request, jsonify
from flask_cors import CORS
from routes.loginAccount import loginAccount

app = Flask(__name__)
CORS(app)

@app.route("/api/users/login", methods=["POST"])
def userLogin():
  if request.method == "POST":
    try:
      post = request.get_json()

      postData = [
        post.get("EMAIL_USER"),
        post.get("PASSWORD_USER")
      ]

      return loginAccount(postData[0], postData[1])
    except Exception as e:
      return jsonify({"message": "Error1: " + str(e)}), 400
    
if __name__ == "__main__":
  app.run(debug=True)