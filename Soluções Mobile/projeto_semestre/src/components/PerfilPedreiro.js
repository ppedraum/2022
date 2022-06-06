import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const TopNav = createMaterialTopTabNavigator();

function SobreScreen(){
    return(
        <View style={styles.main}>
            <View style={styles.cell_view_vertical}>
                <Text style={styles.title_24_bold}>
                    Sobre
                </Text>
                <Text style={styles.txt_24}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                    dictum varius tristique massa eleifend bibendum.
                </Text>
            </View>
            <View style={styles.cell_view_vertical}>
                <Text style={styles.title_24_bold}>
                    Especialidades
                </Text>
                <Text style={styles.txt_24}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                    dictum varius tristique massa eleifend bibendum.
                </Text>
            </View>
            <View style={styles.cell_view_vertical}>
                <Text style={styles.title_24_bold}>
                    Orçamentos
                </Text>
                <Text style={styles.txt_24}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Egestas ut et dis ut suscipit quis elementum enim. Amet velit, 
                    dictum varius tristique massa eleifend bibendum.
                </Text>
            </View>
            <View style={styles.cell_view_vertical}>
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
    );
}

function GaleriaScreen(){
    return(
        <View style={styles.main}>
            <View style={styles.nav_galeria}>
                <Text style={styles.txt_24_white}>Projetos</Text>
                <Image source={require('../images/bt_sort.svg')} style={{width:27, height:27}} />
            </View>



        </View>
        //Fragmentos <> </> são usados quando não precisa aninhar elementos em um componente desnecessário no return();
        //é obrigatório ter só 1 componente no return();, que aninha o resto
    );
}



export default function PerfilPedreiro(){
    return(
        <NavigationContainer>
            <View style={styles.main}>
                
                <View style={styles.pf_view}>
                    <Image 
                    source={
                    //{uri: 'https://reactnative.dev/img/tiny_logo.png'}
                    require('../images/eu.jpg')
                    }
                    style={styles.pfp_default}/>
                    <View style={styles.nome_usuario}>
                        <Text style={styles.txt_24}>José Rovaldo Silva</Text>
                        <Text style={styles.txt_24}>Pedreiro</Text>
                    </View>
                </View>

            </View>
            <TopNav.Navigator 
                    initialRouteName="Sobre"
                    screenOptions={{
                        tabBarStyle: { 
                            backgroundColor: '#6F6F6F',
                            width: 360,
                        },
                        tabBarActiveTintColor: 'white',
                        tabBarInactiveTintColor: 'white',
                        tabBarIndicatorStyle:{backgroundColor: 'white', height: 5},
                    }}
                    >

                        <TopNav.Screen name='Sobre' component={SobreScreen}/>
                        <TopNav.Screen name='Galeria' component={GaleriaScreen}/>
                    </TopNav.Navigator>
        </NavigationContainer>

        


    );
}

const styles = StyleSheet.create({

    main: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#E9EAEA',
        alignItems: "center",
    },

    txt_24:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
    },

    txt_24_white:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
        color: 'white',
    },

    title_24_bold:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    
    pfp_default:{

        borderRadius: 50,
        width: 139,
        height: 139,
        minWidth: 100,
        minHeight: 100,
    },

    nome_usuario:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 15,
        width: 294,
        height: 64,
        
    },

    pf_view:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: '#E9EAEA',
        width: 294,
        height: 233,
        marginBottom: 15,
        marginTop: 93,
    },

    tab_content_view:{
        display: "flex",
        flexDirection: "column",
    },

    nav_galeria:{
        display: 'flex',
        flexDirection: "row",
        width: 360,
        height: 40,
        backgroundColor: '#6F6F6F',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 14,
    },

/*     galeria_row:{
        display: flex,
    }, */


    cell_view_vertical:{
        marginBottom: 10,
        marginTop: 10,
    },

/*     cell_view_allsides:{
        margin: 4,
    } */

});