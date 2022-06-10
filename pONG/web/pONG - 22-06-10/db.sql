create table Requisicao_Voluntariado(

id int(5) not null AUTO_INCREMENT,
qtd_requisicoes int(2) not null,
datetime_publicacao datetime not null,
qtd_requisicoes_preenchidas int(2) not null,
qtd_requisicoes_vagas int(2) not null,
is_terminado boolean not null,
id_cargo_voluntario int(3) not null,
primary key(id),
foreign key(id_cargo_voluntario) references Cargo_Voluntario(id),
constraint chk_requisicoes check(qtd_requisicoes=qtd_requisicoes_preenchidas+qtd_requisicoes_vagas)
);


insert into ONG values(

    '83.649.830/0001-71',
    'satc-admin',
    'satc123',
    'SATC',
    'Rua Pascoal Meller, 73',
    'Criciúma',
    'SC',
    '88805-380',
    '+55 (48) 3431-7568',
    '2001-03-21',
    
);