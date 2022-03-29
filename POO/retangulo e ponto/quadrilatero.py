from ponto import P

class Quad():

    def __init__(self, b, h, x, y):
        self.b=b
        self.h=h
        self.p_ini=P(x,y)

    def get_pc(self):
        xpc=self.p_ini.get_pos()['x']+self.b/2
        ypc=self.p_ini.get_pos()['y']+self.h/2
        return P(xpc, ypc).get_pos()
