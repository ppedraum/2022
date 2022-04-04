
from abc import ABC, abstractclassmethod

class Teste(ABC):

    @abstractclassmethod
    def metodoabs(self, x, y):
        pass

class Main(Teste):

    def metodoabs(self, x, y):
        y=y*x
        return super().metodoabs(x, y)

print(Main.metodoabs(1,2))