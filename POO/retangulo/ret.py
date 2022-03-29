class Ret:
    def __init__(self, b, h):
        self.b=b
        self.h=h

    def get_area(self):
        return self.b*self.h
    def get_perimetro(self):
        return 2*(self.b+self.h)

    def set_valores(self, b, h):
        
        if b != 0 and h !=0:
            self.b=b
            self.h=h
        else:
            print('Um dos valores não foi preenchido!')