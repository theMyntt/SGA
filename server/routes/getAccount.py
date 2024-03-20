from utils.connectDb import connectUsersTable
from utils.encrypt import hashText

def loginAccount(EMAIL_USER, PASSWORD_USER, SCHOOL_ID_SCHOOL):
  HASH_PASSWORD = hashText(PASSWORD_USER)

  return connectUsersTable(f"SELECT * FROM USER_INFORMATION WHERE EMAIL_USER = '{EMAIL_USER}' AND PASSWORD_USER = '{HASH_PASSWORD}' AND SCHOOL_ID_SCHOOL = '{SCHOOL_ID_SCHOOL}'", True)