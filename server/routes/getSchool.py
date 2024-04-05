from utils.connectDb import connectUsersTable

def getSchool(id):
  return connectUsersTable(f"SELECT * FROM SCHOOL WHERE ID_SCHOOL = '{id}'")