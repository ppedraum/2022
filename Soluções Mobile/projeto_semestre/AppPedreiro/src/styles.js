import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    main: {
        display: "flex",
        flexDirection: "column",
    },

    back_button_view:{
        width='50px',
        height='50px',
    }

    greetings:{
        marginVertical:"50px",
        marginLeft: "20px",
    },

    bt_container:{
        paddingHorizontal: "20px",
        height: "50px",
    },

    bt_default:{
        flex: "1",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#C4C4C4",
        borderRadius: "10px",
        shadowOffset: {width: "0px", height: "5px"},
        shadowOpacity : 0.4,
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
        marginTop: 20,
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