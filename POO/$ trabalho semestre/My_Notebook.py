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

        self.pesquisa = StringVar()


        self.agd = agenda

        self.curr_order = 0
        self.order = {}
        self.order_for_menu = {}

        self.order[0] = self.pg_inicial()
        self.order[1] = self.index()


        for num, data in self.ordered_dates().items():
            self.order[num] = self.pagina(self.agd.get_pg(data))
            

        self.order[0].pack()
        
        self.root.mainloop()


    def ordered_dates(self):
        num_to_date = {}
        num = 1

        for i in self.agd.get_all_pgs().keys():
            num+=1
            num_to_date[num] = i

        return num_to_date



    def pg_inicial(self):

        fr_conteudo = Frame(self.root)

        self.root.bind('<Key>', self.mudar_pg)
        self.img_index = PhotoImage(file='./src/images/index.png', width=738, height=806)
        fundo = Label(fr_conteudo, width=self.width, height=self.height, image=self.img_index)
        fundo.pack()
        return fr_conteudo

    def index(self):

        fr_menu = Frame(self.root)
        fr_header = Frame(fr_menu, pady=10, width=self.width-20, height=50)
        lbl_menu = Label(fr_header, text='Index', font=('Arial', 15, 'normal'))
        lbl_menu.pack( side='left')
        line = Frame(fr_header, bg='black', width=600, height=2)
        line.pack(side='right', padx=10)
        fr_header.pack()

        fr_pesquisar = Frame(fr_menu)
        Label(fr_pesquisar, text='Pesquisar: ')
        txt_pesquisar = Entry(fr_pesquisar, font=('Arial', 15, 'normal'), textvariable=self.pesquisa)
        bt_pesquisar = Button(fr_pesquisar, text='Ir', command=self.go_to, width=2)
        txt_pesquisar.pack(side=LEFT, padx=1)
        bt_pesquisar.pack(side=RIGHT)
        fr_pesquisar.pack()

        return fr_menu

    def pagina(self, pagina : Pagina):

        fr_conteudo = Frame(self.root)

        fr_data = Frame(fr_conteudo, pady=10, width=self.width-20, height=50)
        lbl_data = Label(fr_data, text=pagina.get_data_string(), font=('Arial', 15, 'normal'))
        lbl_data.bind('<Button-1>', self.go_to_menu)
        lbl_data.place(x=0, y=0)
        fr_data.pack()

        txt_input = Text(fr_conteudo, font=('Arial', 15, 'normal'), width=57, height=30, pady=10)
        txt_input.insert(1.0, pagina.get_conteudo())
        txt_input.pack()
        return fr_conteudo


    def mudar_pg(self, evt):

        if evt.keysym == "Right":
            if self.curr_order == 367:
                pass
            else:
                self.order[self.curr_order].pack_forget()
                self.curr_order+=1
                self.order[self.curr_order].pack()

        elif evt.keysym == "Left":
            if self.curr_order == 0:
                pass
            else:
                self.order[self.curr_order].pack_forget()
                self.curr_order-=1
                self.order[self.curr_order].pack()
    
    def go_to(self):
        for num, date in self.ordered_dates().items():
            if date == self.pesquisa.get():
                self.order[self.curr_order].pack_forget()
                self.curr_order = num
                self.order[self.curr_order].pack()
    
    def go_to_menu(self, evt):
        self.order[self.curr_order].pack_forget()
        self.curr_order = 1
        self.order[self.curr_order].pack()




my_agenda = Agenda('Pedro', '123', 2022)
my_agenda.write('27/06/'+str(my_agenda.get_ano()), 'TKinter é um saco!!!!!! \n\n nota para o Belone: 0')

jan = Janela(Tk(), my_agenda,738, 806)
