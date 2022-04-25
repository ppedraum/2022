from audioop import add
from tkinter import *
from tkinter import font
from tkinter.font import Font
from turtle import down

#Setando argumentos para o frame
root = Tk()
root.title('Teste')
root.geometry('500x500')

frame=Frame(root) 
frame.pack(pady=20)
fonte=Font(
    family='Comic Sans MS',
    size=10,
    weight='bold'
)

#Criar listbox
lista=Listbox(frame,
    font=fonte,
    width=50,
    height=10,
    bg='SystemButtonFace',
    bd=1,
    fg='#1ecbe1',
    highlightthickness=0,
    selectbackground='#fff')

#Add listbox à esquerda do frame
lista.pack(side=LEFT, fill=BOTH)

#Fazer a lista e add ao listbox
itens=[]
for i in range(20):
    itens.append(i)

for item in itens:
    lista.insert(END, item)

#criar scrollbar
scroll = Scrollbar(frame)
scroll.pack(side=RIGHT, fill=BOTH)

#configurar lista para receber um comando relativo ao scroll y do scrollbar
lista.config(yscrollcommand=scroll.set)
#setando o comando que vai ser passado para a lista
scroll.config(command=lista.yview)

#Criar textbox (Entry)
txt_item = Entry(root, width=30, font=("Arial", 16))
txt_item.pack(pady=20)

#Criar frame para botões
bt_frame = Frame(root)
bt_frame.pack(pady=20)

#criar botões e funções para eles
def add_item():
    pass
bt_add = Button(bt_frame, text="wgw Item", command=add_item)

def del_item():
    pass
bt_del = Button(bt_frame, text="wetfge Item", command=del_item)

def riscar_item():
    pass
bt_riscar = Button(bt_frame, text="Adwgwegicionar Item", command=riscar_item)

bt_add.grid(row=0, column=0, padx=5)
bt_del.grid(row=0, column=1, padx=5)
bt_riscar.grid(row=0, column=2, padx=5)

root.mainloop()


