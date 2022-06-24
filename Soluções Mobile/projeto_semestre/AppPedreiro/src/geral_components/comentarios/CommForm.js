import React, {useState} from 'react';
import styles from '../../styles';
import { getComentarios, setComentario } from './api';
import {View, TouchableOpacity, TextInput, Text} from 'react-native';



export default function CommForm(){
    return (

        <>
            <TextInput multiline={true} numberOfLines={4}  placeholder='Digite um comentário...'  style={styles.comm_form_input} />
            <View style={styles.bt_container} >
                <TouchableOpacity style={styles.bt_default} >
                        <Text style={styles.txt_24} >Comentar</Text>
                </TouchableOpacity>
            </View>
        </>



    );
}