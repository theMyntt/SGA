from utils import connectDb

def getMention(USER_ID_USER: str):
  return connectDb.connectUsersTable(f"SELECT * FROM USER_MENTION WHERE USER_ID_USER = '{USER_ID_USER}'")