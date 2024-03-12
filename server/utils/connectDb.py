from dotenv import load_dotenv
from flask import jsonify

import mysql.connector
import os

def connectUsersTable(queryText: str):
    load_dotenv()

    try:
        connect = mysql.connector.connect(
            host=os.getenv("MYSQL_URI"),
            user=os.getenv("MYSQL_USR"),
            password=os.getenv(""),
            database=os.getenv("MYSQL_DBA_NAME")
        )

        cursor = connect.cursor()

        try:
            cursor.execute(queryText)
            results = cursor.fetchall()
            return results
        except Exception as e:
            return jsonify({"message2": "Error: " + str(e)}), 400
        finally:
            cursor.close()
            connect.close()
    except Exception as e:
        return jsonify({"message3": "Error: " + str(e)}), 400