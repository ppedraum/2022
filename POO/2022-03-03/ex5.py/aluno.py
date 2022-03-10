class Aluno:
    def __init__(self):
        self.tsd=0
        self.td=0
        pass

    def estudar(self, t_estudo):
        self.tsd+=t_estudo
    
    def dormir(self, t_dormir):
        self.tsd-=t_dormir

    def get_tsd(self):
        return self.tsd