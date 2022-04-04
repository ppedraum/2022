from quadrilatero import Quad
from ponto import P

jose=Quad(3,3,1,1)
jose.set_P(7,8)
print(jose.get_P())
print(jose.get_pc())
print(f'{jose.get_diagonal():.2f}')