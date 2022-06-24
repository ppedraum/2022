import React from 'react';
import {View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
import styles from '../../styles';
import StarRating from '../StarRating';


export default function Comentario({nome, comentario}){

    return (

        <View>
            <View style={styles.comm_header}>
                <Text style={styles.txt_24} >{nome}</Text>
                <StarRating/>
            </View>
            <View style={styles.comm_body}>
                <Text style={styles.txt_24} >{comentario}</Text>
            </View>
        </View>



    );
}