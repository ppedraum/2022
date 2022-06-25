from tkinter import *
from tkinter import messagebox
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
        self.db = agd.get_db()

        self.curr_order = 0
        self.order = {}

        self.order[0] = self.pg_inicial()
        self.order[1] = self.index()
        self.fr_paginas = []

        for num, data in self.ordered_dates().items():
            self.fr_paginas.append(Frame_Pagina(self, self.agd.get_pg(data)))
            self.order[num] = self.fr_paginas[-1].get_fr_conteudo()
            

        self.order[0].pack()

        root.protocol("WM_DELETE_WINDOW", self.on_close)
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

    def get_fr_pagina(self, fr):
        if type(fr) != Frame_Pagina:
            print("frame não é Frame_Pagina!!")
        else:
            return fr.get_fr_conteudo()
        

    def mudar_pg(self, evt):

        if evt.keysym == "Right":
            if self.curr_order == 366:
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

    def get_ctt_paginas(self):
        ctt = []
        for pagina in self.fr_paginas:
            ctt.append(pagina.get_input_content())
        for data in self.agd.get_all_pgs().keys():
            text = ctt.pop(0)
            self.agd.write(data, text)
            


    def on_close(self):
        self.get_ctt_paginas()
        ctt = {}
        for data, pagina in self.agd.get_all_pgs().items():
            ctt[data] = pagina.get_conteudo()
        self.db.database_write(ctt)
        if messagebox.askokcancel("Quit", "Do you want to quit?"):
            messagebox.showinfo('Saving...', 'Data Saved!')
            self.root.destroy()
            

class Frame_Pagina:
    def __init__(self, janela : Janela, pagina : Pagina):
        self.jan = janela
        self.pag = pagina
        self.fr_conteudo = Frame(janela.root)
        self.fr_data = Frame(self.fr_conteudo, pady=10, width=janela.width-20, height=50)
        self.lbl_data = Label(self.fr_data, text=self.pag.get_data_string(), font=('Arial', 15, 'normal'))
        self.lbl_data.bind('<Button-1>', janela.go_to_menu)
        self.lbl_data.place(x=0, y=0)
        self.fr_data.pack()
        self.txt_input = Text(self.fr_conteudo, font=('Arial', 15, 'normal'), width=57, height=30, pady=10)
        self.txt_input.insert(1.0, str(self.pag.get_conteudo()))
        self.txt_input.pack()
        

    def get_input_content(self):
        text = self.txt_input.get("1.0", "end-1c")
        return text

    def get_fr_conteudo(self):
        return self.fr_conteudo


            



my_agenda = Agenda('Pedro', '123', 2022)
my_agenda.write('27/06/'+str(my_agenda.get_ano()), 'TKinter é um saco!!!!!! \n\n nota para o Belone: 0')

jan = Janela(Tk(), my_agenda,738, 806)



