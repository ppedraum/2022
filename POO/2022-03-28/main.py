""" from carro import Moto

honda=Moto(1, 'tipo1', 'honda', 'python2', 1977, 300)

print(honda.__dict__)

print('hello world') if isinstance(honda, Moto) else print('Não é moto')
honda.cilindrada=10
 """
""" 
import re

#Check if the string starts with "The" and ends with "Spain":

txt = "no no no no yes no no"
x = re.findall("no", txt)

if x:
  print("YES! We have a match!", x.count('no'))
else:
  print("No match")
 """

