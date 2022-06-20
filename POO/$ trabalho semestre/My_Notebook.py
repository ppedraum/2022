from tkinter import *
from My_Nb_Logic import *
import datetime as dt


class Janela():
    def __init__(self, root:Tk, agenda: Agenda, width, height):
        self.root = root
        self.width=width
        self.height=height
        self.root.title('My Notebook')
        self.root.geometry(str(width)+'x'+str(height))
    
        self.agd = agenda
            
        self.pagina(self.agd.get_pg('10/11/2022')).pack()
        self.root.mainloop()

    def index(self):
        self.img_index = PhotoImage(file='./src/images/index.png', width=738, height=806)
        fundo = Label(self.root, width=self.width, height=self.height, image=self.img_index)
        return fundo

    def login(self, usuario, senha):
        pass

    def menu(self, titulos:list):
        pass

    def pagina(self, pagina : Pagina):

        fr_conteudo = Frame(self.root)
        """ root.bind('<Key>', self.mudar_pg) """


        fr_data = Frame(fr_conteudo, pady=10, width=self.width-20, height=50)
        lbl_data = Label(fr_data, text=pagina.get_data_string(), font=('Arial', 15, 'normal'))
        lbl_data.place(x=0, y=0)
        fr_data.pack()

        txt_input = Text(fr_conteudo, font=('Arial', 15, 'normal'), width=57, height=30, pady=10)
        txt_input.insert(1.0, pagina.get_conteudo())
        txt_input.pack()
        return fr_conteudo

    def mudar_pg(self, evt):
        if type(self.curr_order) is int:
            if evt == "Right":
                self.curr_order += 1
            elif evt == "Left":
                if self.curr_order == -2:
                    pass
                else:
                    self.curr_order -= 1
        """ elif type(self.curr_order) is dt.date:
            date_ord = dt.strptime('%d/%m/%Y')
            if evt == "Right":
                date_ord += dt.timedelta(days=1)
            elif evt == "Left":
                if self.curr_order == f'01/01/{self.agd.get_ano()}':
                    self.curr_order = -2
                else:
                    date_ord -= dt.timedelta(days=1)
                self.curr_order = date_ord.strftime() """

my_agenda = Agenda('Pedro', '123', 2022)

my_agenda.write('10/11/2022', 'Hello World!')

jan = Janela(Tk(), my_agenda,738, 806)
""" print(jan.order) """