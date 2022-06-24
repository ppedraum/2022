import React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal:'20px',
        width:'100%',
        height: '60px',
        backgroundColor:'#6f6f6f'
    },

    main: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center',
    },

    back_button_view:{
        width:'50px',
        height:'50px',
    },

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
        fontSize: 24,
    },

    txt_24_white:{
        fontSize: 24,
        color: 'white',
    },

    title_24_bold:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingBottom: 25,
    },

    title_24_bold_white:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 25,
        paddingBottom: 25,
        color:'white',
    },

    text_wrapper:{
        paddingHorizontal: '5%',
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
        marginBottom: 15,
        marginTop: 20,
    },

    main:{
        display: "flex",
        flexDirection: "column",
    },

    nav_galeria:{
        display: 'flex',
        flexDirection: "row",
        backgroundColor: '#6F6F6F',
       justifyContent: 'space-between',
        alignSelf:'stretch',
        paddingHorizontal: 14,
        paddingVertical: 10,
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

    img_post_default:{
        width:358,
        height:358,
        paddingVertical:100,
    },

    img_container:{
        paddingVertical: 10,
    },

    comm_form_input:{
        fontSize: 24,
        borderWidth:'2px',
        borderColor:'#6f6f6f'
    },

    comm_header:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
        marginTop: '20px',
        paddingVertical : '5px',
        paddingHorizontal: '2px',
        backgroundColor: '#ADADAD',
    },
    comm_body:{
        backgroundColor: '#CBCDCD',
        paddingHorizontal: '2px',
        paddingVertical: '10px',
    }

});