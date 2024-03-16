import hashlib

def hashText(text):
  try: 
    sha256 = hashlib.sha256()
    sha256.update(text.encode("utf-8"))
    haskHex = sha256.hexdigest()
    return haskHex
  except Exception as e:
    return str(e)