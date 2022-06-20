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

        self.fr_menu = Frame(self.root)
        self.curr_order = 0
        self.order = {}
        self.order[0] = self.index()
        self.order[1] = self.menu()
            
        for key, value in self.num_to_date().items():
            self.order[key] = self.pagina(self.agd.get_pg(value))[0]
        
        self.order[0].pack()
        
        self.root.mainloop()

    def index(self):

        fr_conteudo = Frame(self.root)

        self.root.bind('<Key>', self.mudar_pg)
        self.img_index = PhotoImage(file='./src/images/index.png', width=738, height=806)
        fundo = Label(fr_conteudo, width=self.width, height=self.height, image=self.img_index)
        fundo.pack()
        return fr_conteudo

    def login(self, usuario, senha):
        pass

    def menu(self):
        fr_header = Frame(self.fr_menu, pady=10, width=self.width-20, height=50)
        lbl_menu = Label(fr_header, text='Index', font=('Arial', 15, 'normal'))
        lbl_menu.pack( side='left')
        line = Frame(fr_header, bg='black', width=600, height=2)
        line.pack(side='right', padx=10)
        fr_header.pack()

        titulos = self.agd.get_titulos()
        for titulo, pagina in titulos.items():
            label = Label(self.fr_menu, text=f"{pagina.get_data_string()} - {str(titulo)}", font=('Arial', 15, 'normal') )
            label.bind('<Button-1>', lambda evt : self.go_to_pg(evt, pagina))
            label.pack()

        return self.fr_menu

    def go_to_pg(self, evt, pagina):
        order = 0
        """ for key, value in self.order.items():
            if value.pag == pagina:
                print('teste') """
        self.order[self.curr_order].pack_forget()
        self.curr_order = 4
        self.order[self.curr_order].pack()


    def pagina(self, pagina : Pagina):

        fr_conteudo = Frame(self.root)


        fr_data = Frame(fr_conteudo, pady=10, width=self.width-20, height=50)
        lbl_data = Label(fr_data, text=pagina.get_data_string(), font=('Arial', 15, 'normal'))
        lbl_data.place(x=0, y=0)
        fr_data.pack()

        txt_input = Text(fr_conteudo, font=('Arial', 15, 'normal'), width=57, height=30, pady=10)
        txt_input.insert(1.0, pagina.get_conteudo())
        txt_input.pack()
        return [fr_conteudo, txt_input.get(1.0, END), pagina]

    def mudar_pg(self, evt):

        if evt.keysym == "Right":
            if self.curr_order == 365:
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

    def num_to_date(self):
        num_to_date = {}
        num = 1
        ano = self.agd.get_ano()
        for mes in range(12):
            mes +=1
            if mes == 2:

                if (ano%4==0 or ano%400==0) and ano%100!=0:
                    dias=29
                else:
                    dias=28
                for dia in range(dias):
                    num+=1
                    dia +=1
                    data = dt.datetime.strptime(f"{dia}/{mes}/{ano}", "%d/%m/%Y").strftime("%d/%m/%Y")
                    num_to_date[num] = data
            elif mes == 4 or mes == 6 or mes == 9 or mes == 11:
                for dia in range(30):
                    num+=1
                    dia +=1
                    data = dt.datetime.strptime(f"{dia}/{mes}/{ano}", "%d/%m/%Y").strftime("%d/%m/%Y")
                    num_to_date[num] = data
            else:
                for dia in range(31):
                    num+=1
                    dia +=1
                    data = dt.datetime.strptime(f"{dia}/{mes}/{ano}", "%d/%m/%Y").strftime("%d/%m/%Y")
                    num_to_date[num] = data
        return num_to_date

my_agenda = Agenda('Pedro', '123', 2022)

my_agenda.write('10/11/2022', 'Hello World!')

jan = Janela(Tk(), my_agenda,738, 806)

""" print(jan.num_to_date()) """
""" print(jan.order) """
""" print(jan.order[0]) """