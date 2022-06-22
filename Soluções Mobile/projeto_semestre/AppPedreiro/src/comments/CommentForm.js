import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styles from './styles.json';
import {getComments as getCommsApi} from './api';



export default function CommentForm({submitLabel, handleSubmit}) {
    const [text, setText] = useState('');
    return (

            <View>
                <TextInput placeholder='Write a comment' multiline='true' numberOfLines={5} style={styles.comment_form_textarea}
                onChangeText={(text)=>setText(text)} />
                <Button style={styles_main.bt_comentario} title={submitLabel} />
            
            </View>

    );
}

const styles_main = StyleSheet.create({


    "bt_comentario":{
        fontSize:"22px",
        width: "100%",
        height: "200px",
        backgroundColor: "",


    }

});