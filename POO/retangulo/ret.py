class Ret:
    def __init__(self, b, h):
        self.__b=b
        self.__h=h

    def get_area(self):
        return self.__b*self.__h
    def get_perimetro(self):
        return 2*(self.__b+self.__h)

    @property
    def b(self):
        return self.__b

    @b.setter
    def b(self, nova_b):
        raise ValueError('Não é possível alterar a base assim!')

    @property
    def h(self):
        return self.__h

    @h.setter
    def h(self, nova_h):
        raise ValueError('Não é possível alterar a altura assim!')
        

    def set_valores(self, b=0, h=0):
        
        if b != 0 or h !=0:
            self.__b=b
            self.__h=h
        else:
            print('Um dos valores não foi preenchido!')