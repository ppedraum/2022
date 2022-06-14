import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopNav = createMaterialTopTabNavigator();




export default function TesteTopTab(){
    return(
        <NavigationContainer>
            <TopNav.Navigator>
                <TopNav.Screen name='Home' component={
                    ()=>{return(
                        <View><Text>Hello World!</Text></View>
                    );}
                } />
                <TopNav.Screen name='Galeria' component={
                    ()=>{return(
                        <View><Text>Hello World 2!</Text></View>
                    );}
                } />
            </TopNav.Navigator>
        </NavigationContainer>


    );
}