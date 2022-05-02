
from tkinter import *
from funcionario import Funcionario


jonas = Funcionario('Jonas', 2000)

janela = Tk()
janela.title('Janela')

def fazer_coiso():
    jonas.aum_salario(pct.get())
    lbl['text'] = jonas.get_salario()
    print(pct.get())
    

master = Tk()
pct = DoubleVar()

ety = Entry(master, textvariable=pct)
lbl = Label(master, text=jonas.get_salario())
btn = Button(master, command=fazer_coiso, text='Clique')
btn.pack()
ety.pack()
lbl.pack()
print(jonas.get_salario())
master.mainloop()
