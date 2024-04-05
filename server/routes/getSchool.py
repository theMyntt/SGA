from utils.connectDb import connectTable

def getSchool(id):
  return connectTable(f"SELECT * FROM SCHOOL_INFORMATION WHERE ID_SCHOOL = '{id}'", True)