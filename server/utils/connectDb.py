from dotenv import load_dotenv
from flask import jsonify

import mysql.connector
import os

def connectTable(queryText: str, returnSomething: bool):
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
            
            if returnSomething:
                return cursor.fetchall()
            
            return jsonify({"message": "OK"})
        except Exception as e:
            return jsonify({"message": "Error2: " + str(e)}), 400
        finally:
            connect.commit()
            cursor.close()
            connect.close()
    except Exception as e:
        return jsonify({"message": "Error1: " + str(e)}), 400
