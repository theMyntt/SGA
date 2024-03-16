from utils import connectDb

def loginAccount(EMAIL_USER, PASSWORD_USER):
  return connectDb.connectUsersTable(f"SELECT * FROM USER_INFORMATION WHERE EMAIL_USER = '{EMAIL_USER}' AND PASSWORD_USER = '{PASSWORD_USER}'")