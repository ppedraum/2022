import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from './src/styles';

import PerfilPedreiro from './src/PerfilPedreiro';
import GaleriaScreen from './src/geral_components/GaleriaScreen';
import PostObra from './src/PostObra';
import HomePedreiro from './src/HomePedreiro';
import AddPublicacao from './src/AddPublicacao';
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
            >
                <Stk.Screen name='HomePedreiro' component={HomePedreiro}
                options={{header: ()=> {return(<Header/>)}}}
                />
                <Stk.Screen name='PerfilPedreiro' component={PerfilPedreiro}
                />
                <Stk.Screen name="PostObra" component={PostObra}
                options={()=>defaultHeader('')} 
                />
                <Stk.Screen name="GaleriaScreen" component={GaleriaScreen}/>
                <Stk.Screen name="AddPublicacao" component={AddPublicacao}
                options={()=>defaultHeader('Adicionar Publicação...')}
                />
                <Stk.Screen name="Comentarios" component={Comentarios}/>
            </Stk.Navigator>

        </NavigationContainer>
  );
}

export default App;


/* parei em: https://reactnavigation.org/docs/params */
