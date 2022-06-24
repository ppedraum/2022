import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from './src/styles';


import HomeUsuario from './src/HomeUsuario';
import HomeCalcMuro from './src/HomeCalcMuro';
import CalcMuro from './src/CalcMuro';
import CalcSala from './src/CalcSala';
import ResultadoCalculo from './src/ResultadoCalculo';
import Pesquisar from './src/Pesquisar';
import PerfilPedreiro from './src/PerfilPedreiro';
import GaleriaScreen from './src/geral_components/GaleriaScreen';
import PostObra from './src/PostObra';
import Comentarios from './src/geral_components/comentarios/Comentarios';
import {Header} from './src/geral_components/Header';

function App() {

    const Stk = createNativeStackNavigator();

    const defaultHeader=(headerName)=>{return{
        headerTitle:headerName, 
        headerStyle:styles.header,
        headerTitleStyle:styles.txt_24_white,
        headerTintColor:'white',
    }}
    return (


        <NavigationContainer>
            <Stk.Navigator
            initialRouteName='HomeUsuario'
            >
                <Stk.Screen name='HomeUsuario' component={HomeUsuario} 
                options={{header: ()=> {return(<Header/>)}}}
                />
                <Stk.Screen name='HomeCalcMuro' component={HomeCalcMuro}
                options={()=>defaultHeader('Calcular')}
                />
                <Stk.Screen name='CalcMuro' component={CalcMuro}
                 options={()=>defaultHeader('Calcular Muro')}
                />
                <Stk.Screen name='CalcSala' component={CalcSala}
                 options={()=>defaultHeader('Calcular Sala')}
                />
                <Stk.Screen name='ResultadoCalculo' component={ResultadoCalculo}
                 options={()=>defaultHeader('Resultado')}
                />
                <Stk.Screen name='Pesquisar' component={Pesquisar}
                 options={()=>defaultHeader('Pesquisar')}
                />
                <Stk.Screen name='PerfilPedreiro' component={PerfilPedreiro}
                 options={()=>defaultHeader('Pedreiro')}
                />
                <Stk.Screen name="PostObra" component={PostObra} 
                 options={()=>defaultHeader('Post')}
                />
                <Stk.Screen name="GaleriaScreen" component={GaleriaScreen}/>
            </Stk.Navigator>

        </NavigationContainer>
  );
}

export default App;


/* parei em: https://reactnavigation.org/docs/params */
