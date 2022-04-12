from cgitb import text
from tkinter import *
from tkinter import font
from tkinter.font import Font

#Setando argumentos para o frame
root = Tk()
root.title('Teste')
root.geometry('500x500')

frame=Frame(root) 
frame.pack(pady=100)
fonte=Font(
    family='Comic Sans MS',
    size=10,
    weight='bold'
)

lista=Listbox(frame,
    font=fonte,
    width=50,
    height=10,
    bg='SystemButtonFace',
    bd=1,
    fg='#1ecbe1'
    highlightthickness=0
    selectbackground='#fff')

lista.pack()
itens=['Olá', 'Mundo', '!', ':-P']

for item in itens:
    lista.insert(END, item)

root.mainloop()


