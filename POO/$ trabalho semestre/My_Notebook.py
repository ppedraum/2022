from tkinter import *
from My_Nb_Logic import *


class Janela():
    def __init__(self, root:Tk, agenda: Agenda, width, height):
        self.root = root
        self.width=width
        self.height=height
        self.root.title('My Notebook')
        self.root.geometry(str(width)+'x'+str(height))
    
        self.agd = agenda
        self.agd.criar_agenda()

        self.order = {}
        self.order[0] = self.index()

        j=1
        for i in self.agd.get_all_pgs():
            self.order[j] = Pagina(i)
            j+=1
        """ self.index().pack() """
        self.pagina('11/11/2022').pack()

        self.root.mainloop()

    def index(self):
        self.img_index = PhotoImage(file='./src/images/index.png', width=738, height=806)
        fundo = Label(self.root, width=self.width, height=self.height, image=self.img_index)
        return fundo

    def login(self, usuario, senha):
        pass

    def menu(self, titulos:list):
        pass

    def pagina(self, data):

        get_conteudo = self.agd.get_pg(data).get_conteudo()
        """ set_conteudo = self.agd.write() """

        root = self.root
        fr_conteudo = Frame(root)
        root.bind('<Key>', self.mudar_pg)


        fr_data = Frame(fr_conteudo, pady=10, width=self.width-20, height=50)
        lbl_data = Label(fr_data, text=data, font=('Arial', 15, 'normal'))
        lbl_data.place(x=0, y=0)
        fr_data.pack()

        txt_input = Text(fr_conteudo, font=('Arial', 15, 'normal'), width=57, height=30, pady=10)
        txt_input.insert(1.0, get_conteudo)
        txt_input.pack()
        return fr_conteudo

    def mudar_pg(self, evt):
        if evt == 'Right':
            self.order

my_agenda = Agenda('Pedro', '123', 2022)
jan = Janela(Tk(), my_agenda,738, 806)
""" my_agenda.write('10/11/2022', 'Hello World!') """
print(jan.order)