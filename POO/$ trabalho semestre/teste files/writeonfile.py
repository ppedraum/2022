import json
import datetime as dt

random_dict = {
    "22/05/2004":"isso é um teste ",
    "19/07/2004":"isso é um teste 2 ",
    "01/01/2022":"lorem ipsum dolor sit amet\nlorem ipsum dolor sit amet\nlorem ipsum dolor sit amet "
}

""" for data, texto in list(random_dict.items()):
    data_certa = dt.datetime.strptime(data, '%d/%m/%Y')
    data_certa  = data_certa.strftime('%Y-%m-%d')
    random_dict[data_certa] = texto
    del random_dict[data]
     """

real_stuff = json.dumps(random_dict)

file = open('./teste files/file.json', 'w', encoding='utf-8')

with file as f:
    file.write(real_stuff)

file_read = open('./teste files/file.json', 'r', encoding='utf-8')

with file_read as f:
    resultado = file_read.read()

print(resultado)