import random

def randomChoice() -> str:
  return ''.join(random.choice('abcdefghijklmnopqrstuvwxyz0123456789') for _ in range(15))

def createId() -> str:
  return f"{randomChoice()}-{randomChoice()}-{randomChoice()}-{randomChoice()}"

print(createId())