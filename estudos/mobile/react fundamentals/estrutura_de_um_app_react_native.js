//O react
import React from 'react';


//Components do react-native ou Native Components (representações de Views do iOS e do Android, ou mesmo da Web)
import { Text, View } from 'react-native';

import random from Math;
function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

//Componente criado por função, com propriedades dentro
const Gato = (props) => {

    nomes = ['Xaninha', 'Maze', 'Fred', 'Luffy', 'Hermione', 'Fifi', 'Luke', 'Zebrinha', 'Lilica']

    /*
        O return é a parte gráfica do nosso app -> O que é colocado ali é renderizado.
        É a UI, e não possui lógica e sim marcação.
    */
    return (
        
        <Text style={{color:'white'}}>Olá, meu nome é {nomes[randInteger(0,8)]}! Miau :3</Text>
    );
}

//Pode-se colocar qualquer expressão javascript dentro de um componente com chaves '{funcao ou expressao}'
//Um estilo é definido por um objeto (const obj = {chave:valor})


//A função exportada é a função principal, logo é todo o nosso App()
const Cafe = function(){
    return(
        <View style={{backgroundColor:'blue' , padding: 10}}>
            <Text style={{color:'white'}}>Cafezinho dos Gatos</Text>
            <Gato nome='Xaninha'/>
            <Gato nome='Luffy'/>
            <Gato nome='Fred'/>
            <Gato nome='Maze'/>
        </View>
    );
}
//Pode-se colocar um componente criado normalmente usando <Componente prop='' /> contendo suas propriedades

//Função exportada 
export default Cafe;