import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';

import PerfilPedreiro from './PerfilPedreiro';

function Home({navigation}){
    return(
        <View style={styles.main} >
            <View style={styles.greetings}>
                <Text style={styles.txt_24} >Olá, Josenir</Text>
            </View>
            <View style={styles.bt_container}>
                <TouchableOpacity  style={styles.bt_default} onPress={()=>{navigation.navigate('AddPublicacao')}} title="Criar Publicação">
                    <Text style={styles.txt_24} >Adicionar Publicação</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default function HomePedreiro({navigation}){

    const Btt=createBottomTabNavigator();
    return(

        <Btt.Navigator screenOptions={{headerShown:false}} >
            <Btt.Screen name='Home' component={Home} />
            <Btt.Screen name='PerfilPedreiro' component={PerfilPedreiro} />
        </Btt.Navigator>


    );



}