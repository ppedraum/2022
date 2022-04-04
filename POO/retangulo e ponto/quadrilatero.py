from ponto import P
import math

class Quad():

    def __init__(self, b, h, x, y):
        self.b=b
        self.h=h
        self.__p_ini=P(x,y)
       
    @property
    def p_ini(self):
        return self.__p_ini

    @p_ini.setter
    def p_ini(self, novo_pini):
        raise ValueError('Não é possível alterar o ponto P assim! Use set_P()')

    def set_P(self, x, y):
         self.__p_ini=P(x,y)

    def get_P(self):
        return self.__p_ini.get_pos()

    def get_pc(self):
        xpc=self.__p_ini.get_pos()['x']+self.b/2
        ypc=self.__p_ini.get_pos()['y']+self.h/2
        return P(xpc, ypc).get_pos()

    def get_diagonal(self):
        return math.sqrt(self.__p_ini.get_pos()['x']**2 + self.__p_ini.get_pos()['y']**2)
