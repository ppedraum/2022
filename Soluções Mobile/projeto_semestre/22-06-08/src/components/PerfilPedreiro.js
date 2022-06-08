import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';


export default function PerfilPedreiro({navigation}){
    return(
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
    );
}

const styles = StyleSheet.create({

    main: {
        /* width: winDim().width, */
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

        borderRadius: 100,
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

    cell_view_vertical:{
        marginBottom: 10,
        marginTop: 10,
    },

    row_view:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    img_galeria:{
        margin: 4,
        width: 177,
        height: 177,
    },

});