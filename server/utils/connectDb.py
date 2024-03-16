from dotenv import load_dotenv
from flask import jsonify

import mysql.connector
import os

def connectUsersTable(queryText: str):
    load_dotenv()

    try:
        connect = mysql.connector.connect(
            host=str(os.getenv("MYSQL_URI").split(":")[0]),  # Obtém o host
            port=int(os.getenv("MYSQL_URI").split(":")[1]),  # Obtém a porta
            user=str(os.getenv("MYSQL_USR")),
            password="",
            database=str(os.getenv("MYSQL_DBA_NAME"))
        )

        cursor = connect.cursor()

        try:
            cursor.execute(queryText)
            results = cursor.fetchall()
            return results
        except Exception as e:
            return jsonify({"message": "Error: " + str(e)}), 400
        finally:
            cursor.close()
            connect.close()
    except Exception as e:
        return jsonify({"message": "Error: " + str(e)}), 400
