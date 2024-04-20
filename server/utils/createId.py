import random

def randomChoice() -> str:
  return ''.join(random.choice('abcdefghijklmnopqrstuvwxyz0123456789') for _ in range(15))

def createStringId() -> str:
  return f"{randomChoice()}-{randomChoice()}-{randomChoice()}-{randomChoice()}"

def createIntId() -> int:
  return random.randint(100000000000000000000, 999999999999999999999)