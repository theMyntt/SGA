from flask import Flask, request, jsonify
from flask_cors import CORS

from routes.getAccount import loginAccount
from routes.setAccount import createAccount
from routes.getMention import getMention

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
  
  return jsonify({"message": "Não autorizado"})
    
@app.route("/api/users/signup", methods=["POST"])
def userCreate():
  if request.method == "POST":
    try:
      post = request.get_json()

      postData = [
        post.get("EMAIL_USER"),
        post.get("PASSWORD_USER"),
        post.get("CELLPHONE_USER"),
        post.get("NAME_USER"),
        post.get("SCHOOL_ID_SCHOOL")
      ]

      return createAccount(postData[0], postData[1], postData[2], postData[3], postData[4])
    except Exception as e:
      return jsonify({"message": "Error2: " + str(e)}), 400
    
  return jsonify({"message": "Não autorizado"})

@app.route("/api/users/mention", methods=["GET"])
def userMention():
  try:
    return getMention(request.args.get("USER_ID_USER"))
  except Exception as e:
    return jsonify({"message": "Error3: " + str(e)}), 400
    
if __name__ == "__main__":
  app.run(debug=True)