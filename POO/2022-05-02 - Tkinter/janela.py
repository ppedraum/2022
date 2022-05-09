from tkinter import *

class janela:
    def __init__(self, master: Tk, width, height):
        self.master = master
        self.width = width
        self.height = height
        self.master.geometry(str(width)+'x'+str(height))
        self.master.title('Janelinha')
        self.content()
        self.master.mainloop()
        

    def content(self):
        master = self.master
        frame = Frame(master)
        frame.grid()
        lbl = Label(frame, text='Hello')
        lbl.grid(column=0, row=0)


j = janela(Tk(), 300, 300)
