from utils import connectDb
from utils.encrypt import hashText

def loginAccount(EMAIL_USER, PASSWORD_USER):
  HASH_PASSWORD = hashText(PASSWORD_USER)

  return connectDb.connectUsersTable(f"SELECT * FROM USER_INFORMATION WHERE EMAIL_USER = '{EMAIL_USER}' AND PASSWORD_USER = '{HASH_PASSWORD}'", True)