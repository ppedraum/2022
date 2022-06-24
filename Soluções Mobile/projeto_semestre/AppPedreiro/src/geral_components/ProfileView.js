import React from "react";
import {Text, View, Image} from 'react-native';
import styles from '../styles';

export default function ProfileView(){
    return(
        <View style={styles.pf_view} >
            <Image 
            source={require('../images/some_pfp.jpg')}
            style={styles.pfp_default}/>
            <View style={styles.nome_usuario}>
                <Text style={styles.txt_24}>José Rovaldo Silva</Text>
                <Text style={styles.txt_24}>Pedreiro</Text>
            </View>
        </View>
    );
}