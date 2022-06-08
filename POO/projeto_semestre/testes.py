
from tkinter import *
from tkinter import ttk

from pyrsistent import v


class Janela():

    styles={
        'bt_style':{
            'width':10,
            'height':5
        }
    }

    def __init__(self, root:Tk):
        self.root = root
        root.geometry('500x500')
        """ frame = Frame(root, bg='yellow', width=100, height=100)
        frame.place(x=200, y=200) """

        bt = Button(root, width=5, height=1)
        """ for opt in self.styles['bt_style']:
            bt[opt] = self.styles['bt_style'][opt] """
        bt.pack()
        



    def set_settings(self, width, height, title='null'):
        self.root.geometry(str(width)+'x'+str(height))
        if title == 'null':
            pass
        else:
            self.root.title(title)

    def turn_blue(self):
        self.frame['bg'] = 'blue'

    def run(self):
        self.root.mainloop()





janela = Janela(Tk())
""" janela.set_settings(500,500,'Teste') """
janela.run()