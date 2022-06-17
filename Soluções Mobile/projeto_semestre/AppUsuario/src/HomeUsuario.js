import React from 'react'
import { View, Text, Button } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function Home({navigation}){
    return(
        <>
            <Text>Home Usuario</Text>
            <Button title='Calcular...' onPress={()=>{navigation.navigate('HomeCalcMuro')}} ></Button>
            <Button title='Pesquisar...' onPress={()=>{navigation.navigate('Pesquisar')}} ></Button>
        </>
    );
}

function Perfil({navigation}){
    return(
        <>
            <Text>Perfil Usuario!</Text>
        </>
    );
}

export default function({navigation}){

    const Btt=createBottomTabNavigator();
    return(

        <Btt.Navigator screenOptions={{headerShown:false}} >
            <Btt.Screen name='Home' component={Home} />
            <Btt.Screen name='Perfil' component={Perfil} />
        </Btt.Navigator>


    );



}