import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, Text, Button } from 'react-native';


import HomeUsuario from './src/HomeUsuario';
import HomeCalcMuro from './src/HomeCalcMuro';
import CalcMuro from './src/CalcMuro';
import CalcSala from './src/CalcSala';
import ResultadoCalculo from './src/ResultadoCalculo';
import Pesquisar from './src/Pesquisar';
import PerfilPedreiro from './src/PerfilPedreiro';
import GaleriaScreen from './src/geral_components/GaleriaScreen';
import PostObra from './src/PostObra';

function App() {

    const Stk = createNativeStackNavigator();
    return (


        <NavigationContainer>
            <Stk.Navigator>
                <Stk.Screen name='HomeUsuario' component={HomeUsuario} />
                <Stk.Screen name='HomeCalcMuro' component={HomeCalcMuro}/>
                <Stk.Screen name='CalcMuro' component={CalcMuro}/>
                <Stk.Screen name='CalcSala' component={CalcSala}/>
                <Stk.Screen name='ResultadoCalculo' component={ResultadoCalculo}/>
                <Stk.Screen name='Pesquisar' component={Pesquisar}/>
                <Stk.Screen name='PerfilPedreiro' component={PerfilPedreiro}/>
                <Stk.Screen name="PostObra" component={PostObra} />
                <Stk.Screen name="GaleriaScreen" component={GaleriaScreen}/>
            </Stk.Navigator>

        </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


/* parei em: https://reactnavigation.org/docs/params */
