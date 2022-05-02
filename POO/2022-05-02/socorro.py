from tkinter import *

""" print(Button().configure().keys())
print('')
print('')
print(Label().configure().keys()) """


def fazer_coiso():
    lbl['text'] = var.get()

master = Tk()
var = StringVar()

ety = Entry(master, textvariable=var)
lbl = Label(master, text='')
btn = Button(master, command=fazer_coiso, text='oirngroegn')
btn.pack()
ety.pack()
lbl.pack()
master.mainloop()



