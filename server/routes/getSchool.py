from utils.connectDb import connectUsersTable

def getSchool(id):
  return connectUsersTable(f"SELECT * FROM SCHOOL_INFORMATION WHERE ID_SCHOOL = '{id}'", True)