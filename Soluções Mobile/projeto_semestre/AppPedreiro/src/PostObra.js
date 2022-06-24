import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

import StarRating from "./geral_components/StarRating";
import ProfileView from "./geral_components/ProfileView"
import Comentarios from "./geral_components/comentarios/Comentarios";
import CommForm from "./geral_components/comentarios/CommForm"

export default function PostObra({navigation}){
    return(

        <ScrollView>
            <View style={styles.main}>
                    
                
                <ProfileView></ProfileView>
                <Text style={styles.title_24_bold}>Título</Text>

                <View style={styles.img_container}>
                    <Image source={require('./images/some_pfp.jpg') } style={styles.img_post_default}/>
                </View>

                <View style={styles.text_wrapper}>
                    <Text style={styles.txt_24}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                
                
                {/*Área de comentários*/}
                <Text style={styles.title_24_bold}>Comentários</Text>
                <CommForm/>
                <Comentarios/>

            </View>



        </ScrollView>
        
        



    );
}