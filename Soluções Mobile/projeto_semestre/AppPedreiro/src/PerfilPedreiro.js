import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, useWindowDimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from './styles';

import ProfileView from './geral_components/ProfileView';
import GaleriaScreen from "./geral_components/GaleriaScreen";

function SobreScreen(){
    return(
        <ScrollView>
            <View style={styles.main}>
                <View style={styles.text_wrapper}>
                    <Text style={styles.title_24_bold}>
                        Sobre
                    </Text>
                    <Text style={styles.txt_24}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                        dictum varius tristique massa eleifend bibendum.
                    </Text>

                    <Text style={styles.title_24_bold}>
                        Especialidades
                    </Text>
                    <Text style={styles.txt_24}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                        dictum varius tristique massa eleifend bibendum.
                    </Text>

                    <Text style={styles.title_24_bold}>
                        Orçamentos
                    </Text>
                    <Text style={styles.txt_24}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                        dictum varius tristique massa eleifend bibendum.
                    </Text>

                    <Text style={styles.title_24_bold}>
                        Localização
                    </Text>
                    <Text style={styles.txt_24}>
                        Cidade: Criciúma {'\n'}
                        Logradouro: Rua Tal Qual, 325 {'\n'}
                        Complemento: Lorem Ipsum Dolor {'\n'}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const TopNav = createMaterialTopTabNavigator();

export default function PerfilPedreiro({navigation}){
    return(
            <>
                <ProfileView/>
                <TopNav.Navigator 
                initialRouteName="Sobre"
                screenOptions={{
                    tabBarStyle: { 
                        backgroundColor: '#6F6F6F',
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarIndicatorStyle:{backgroundColor: 'white', height: 5},
                }}>

                        <TopNav.Screen name='Sobre' component={SobreScreen}/>
                        <TopNav.Screen name='Galeria' component={GaleriaScreen}/>

                </TopNav.Navigator>
            </>
    );
}