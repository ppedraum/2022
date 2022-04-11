
from abc import ABC, abstractmethod
from re import X

class Matematica(ABC):

    @abstractmethod
    def multiplicar(self):
        pass

    @abstractmethod
    def somar(self):
        pass

class exemplo(Matematica):

    def __init__(self, x, y):
        self.__x=x
        self.__y=y

    @property
    def x(self):
        return self.__x
    @property
    def y(self):
        return self.__y

    @x.setter
    def x(self, valor):
        print('Impossível alterar x!')
    @x.setter
    def y(self, valor):
        print('Impossível alterar y!')

    def somar(self):
        return self.x+self.y

    def multiplicar(self):
        return self.x*self.y

    def set_valores(self, x,y):
        if x != None:
            self.__x=x
        if y != None:
            self.__y=y

ex=exemplo(1,2)
print(ex.somar())
print(ex.multiplicar())
ex.set_valores(3,2)
print(ex.somar())
print(ex.multiplicar())

ex.__x=1
ex.__y=1
print(ex.multiplicar())