from tkinter import *

"""https://www.youtube.com/watch?v=GLnNPjL1U2g"""

"""Essa é nossa Janelinha"""
class Janelinha:
    def __init__(self):

        """Setando os parâmetros iniciais da janela"""
        self.root = Tk()
        self.root.geometry("500x500")

        """
            O método bind() tem 2 parâmetros:

            1. O tipo do evento que vai acionar a função (ex. botão do mouse, apertar tecla)
            2. A função que vai ser acionada

            Esse método já joga automaticamente o evento pra dentro da função, então para funcionar
            a função deverá ter, além do self, um parâmetro qualquer para receber o evento

            ex. def trocar_tela(self, parametro_que_recebe_evento)

        """
        self.root.bind('<Key>', self.mudar_pagina)


        """A ordem atual que estamos na navegação"""
        """OBS: o valor inicial do curr_order é o valor da ordem da página que você quer começar"""
        self.curr_order = 0
        """Um dicionário que enumera a ordem de cada página"""
        self.order = {}

        """Você pode atribuir as páginas desse jeito"""
        self.order[0] = self.minha_pagina("Página 1")
        self.order[1] = self.minha_pagina("Página 2")
        self.order[2] = self.minha_pagina("Página 3")

        """A página que vai ser carregada primeiro deverá dar pack() no início"""
        self.order[0].pack()

        self.root.mainloop()

    """
        A estrutura da sua página. A função da página deverá retornar o frame que contém todos os
        conteúdos e que está ligado ao root.
    """
    def minha_pagina(self, conteudo):

        minha_pagina = Frame(self.root)
        meu_label = Label(minha_pagina, text=conteudo)
        meu_label.pack(pady=230)
        return minha_pagina

    """A tão esperada função de mudar de página"""

    def mudar_pagina(self, evt):
        
        """Pega o atributo que mostra qual tecla foi apertada"""
        if evt.keysym == "Right":

            """
                É bom limitar quando você pode mudar de página ou não, por exemplo, na página final
                ou inicial não poderemos avançar mais, senão dá erro

                lê-se: Se a ordem atual for igual ao comprimento do nosso dicionário menos 1: não faz nada
            """
            if self.curr_order == len(self.order)-1:
                pass
            else:
                """Tira a página atual"""
                self.order[self.curr_order].pack_forget()
                """Adiciona 1 a ordem atual"""
                self.curr_order += 1
                """Dá pack na próxima página, agora a atual."""
                self.order[self.curr_order].pack()

        
        elif evt.keysym == "Left":
        
            if self.curr_order == 0:
                pass
            else:
                self.order[self.curr_order].pack_forget()
                self.curr_order -= 1
                self.order[self.curr_order].pack()

"""Só chama o construtor pra iniciar o programa"""
Janelinha()