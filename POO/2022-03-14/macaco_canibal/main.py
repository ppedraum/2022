from macaco import Macaco

elias = Macaco('Elias')
jonas = Macaco('Jonas')

elias.comer('Banana')
elias.comer(jonas)
elias.verBucho()

elias.bucho=[1]
elias.verBucho()