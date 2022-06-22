import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './src/styles';

import PerfilPedreiro from './src/PerfilPedreiro';
import GaleriaScreen from './src/geral_components/GaleriaScreen';
import PostObra from './src/PostObra';
import Comments from './src/comments/Comments';
import HomePedreiro from './src/HomePedreiro';
import AddPublicacao from './src/AddPublicacao';

function App() {

    const Stk = createNativeStackNavigator();
    return (


        <NavigationContainer>
            <view style={styles.back_button_view}>
                <TouchableOpacity style={styles.back_button} >Teste</TouchableOpacity>
            </view>
            <Stk.Navigator
            screenOptions={{headerShown:false}}
            >
                <Stk.Screen name='HomePedreiro' component={HomePedreiro} />
                <Stk.Screen name='PerfilPedreiro' component={PerfilPedreiro}/>
                <Stk.Screen name="PostObra" component={PostObra} />
                <Stk.Screen name="GaleriaScreen" component={GaleriaScreen}/>
                <Stk.Screen name="Comments" component={Comments}/>
                <Stk.Screen name="AddPublicacao" component={AddPublicacao}/>
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
