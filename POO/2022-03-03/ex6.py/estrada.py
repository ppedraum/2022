from carro import Carro

fusca=Carro(5)
fusca.add_gas(20)
print(fusca.get_gas())
fusca.andar(30)
print(fusca.get_gas())
print(fusca.get_km())