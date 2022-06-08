import React from "react";
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';




export default function SobreScreen({navigation}){
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
