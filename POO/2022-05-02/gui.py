from tkinter import *


janela = Tk()
janela.title('Janela')

lbl_coiso = Label(janela, text='', pady=30)
lbl_coiso.grid(column=0, row=2)

def coiso():
    lbl_coiso["text"] = 'oi'

janela.size()

Label(janela,  text='lorem ipsum', pady=10).grid(column=0, row=0)

botao = Button(janela,  command=coiso(), text='Clique aqui!')
botao.grid(column=0, row=1)



janela.mainloop()
