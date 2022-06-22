import React from "react";
import {StyleSheet, Text, View, Image} from 'react-native';

export default function ProfileView(){
    return(
        <View style={styles.main}>
            <Image 
            source={
            //{uri: 'https://reactnative.dev/img/tiny_logo.png'}
            require('../images/some_pfp.jpg')
            }
            style={styles.pfp_default}/>
            <View style={styles.nome_usuario}>
                <Text style={styles.txt_24}>José Rovaldo Silva</Text>
                <Text style={styles.txt_24}>Pedreiro</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    main: {
        /* width: winDim().width, */
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E9EAEA",
        alignItems: "center",
    },

    pf_view:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: '#E9EAEA',
        width: 294,
        height: 233,
        marginBottom: 15,
        marginTop: 20,
    },
    txt_24:{
        /* fontFamily: 'Times New Roman', */
        fontSize: 24,
    },
    pfp_default:{

        borderRadius: 100,
        width: 139,
        height: 139,
        minWidth: 100,
        minHeight: 100,
    },

});