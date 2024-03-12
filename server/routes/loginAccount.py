from utils import connectDb

def loginAccount(EMAIL_USER, PASSWORD_USER):
  connectDef = connectDb.connectUsersTable()
  queryDef = connectDef.queryRequest()

  connectDef()
  return connectDb.connectUsersTable("SELECT * FROM USER_INFORMATION")