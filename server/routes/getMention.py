from utils.connectDb import connectTable

def getMention(USER_ID_USER: str):
  return connectTable(f"SELECT * FROM USER_MENTION WHERE USER_ID_USER = '{USER_ID_USER}'", True)