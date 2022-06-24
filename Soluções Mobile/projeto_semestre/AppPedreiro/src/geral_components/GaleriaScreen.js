import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from '../styles';


export default function GaleriaScreen({navigation}){
    return(
        
        <ScrollView>
            
            <View style={styles.main}>
                <View style={styles.nav_galeria}>
                    <Text style={styles.txt_24_white}>Projetos</Text>
                    <Image source={require('../images/bt_sort.svg')} style={{width:27, height:27}} />
                </View>

                <View style={styles.row_view}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row_view}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                </View>
                <View style={styles.row_view}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostObra')}} >
                        <Image source={require('../images/some_pfp.jpg')} style={styles.img_galeria} />
                    </TouchableOpacity>
                </View>
                    




            </View>
        </ScrollView>
        
        //Fragmentos <> </> são usados quando não precisa aninhar elementos em um componente desnecessário no return();
        //é obrigatório ter só 1 componente no return();, que aninha o resto
    );
}