import random

class Pessoa():
    
    def __init__(self, nome='Nenhum'):
        self.id = random.randint(0,1000)
        self.nome=nome
        
    def get_id(self):
        return self.id