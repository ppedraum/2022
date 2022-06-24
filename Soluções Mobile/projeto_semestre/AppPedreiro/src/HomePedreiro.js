import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native-web';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';

import PerfilPedreiro from './PerfilPedreiro';

function Home({navigation}){
    return(
        <View style={styles.main} >
            <View style={styles.greetings}>
                <Text style={styles.txt_24} >Olá, Josenir</Text>
            </View>
            <View style={styles.bt_container}>
                <TouchableOpacity  style={styles.bt_default} onPress={()=>{navigation.navigate('AddPublicacao')}}>
                    <Text style={styles.txt_24} >Adicionar Publicação</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default function HomePedreiro({navigation}){

    const Btt=createBottomTabNavigator();
    return(

        <Btt.Navigator screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor: '#6F6F6F',
                height: '60px',
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#3F3F3F'
            
            }} >
            <Btt.Screen name='Home' component={Home}
            options={{
                tabBarIcon: home => {return(
                    <Ionicons
                    name="md-home-sharp"
                    size={28}
                    color={home.focused ? "#fff" : "#3F3F3F"}
                    />
                )}
            }}
            />
            <Btt.Screen name='PerfilPedreiro' component={PerfilPedreiro}
            options={{
                tabBarIcon: home => {return(
                    <Ionicons
                    name="md-person-circle-outline"
                    size={34}
                    color={home.focused ? "#fff" : "#3F3F3F"}
                    />
                )}
            }}
            />
        </Btt.Navigator>


    );



}