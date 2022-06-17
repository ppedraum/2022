import React from "react";
import {StyleSheet, Text, View, ScrollView, Image, Button, TextInput, TouchableOpacity} from 'react-native';
import StarRating from "./geral_components/StarRating";
import ProfileView from "./geral_components/ProfileView"


export default function PostObra({navigation}){
    return(

        <ScrollView>
            <View style={styles.main}>
                    
                
                <ProfileView></ProfileView>
                <Text style={styles.title_24_bold}>Título</Text>

                <View>
                    <Image source={require('./images/some_pfp.jpg') } style={styles.img_post_default}/>
                </View>

                <View style={styles.cell_view_vertical}>
                    <Text style={styles.txt_24}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </View>
                
                
                {/*Área de comentários*/}
                <View>
                    {/*Área do botão do comentário*/}
                    <View style={styles.cell_view_vertical} >
                        <Text style={styles.title_24_bold} >Comentários</Text>
                        <TextInput style={styles.txtin_comentario} placeholder='Digite Um comentário...' />
                    </View>


                    {/*Área do Comentário gerada*/}
                    <View style={{backgroundColor: '#CBCDCD'}}>
                        {/*Nome com Rating*/}
                        <View style={{display:'flex', alignContent:'space-between', flexDirection:'row', paddingTop:20}}>
                            <Text style={styles.txt_24} >Fernando Farias</Text>

                            <StarRating/>

                        </View>
                        {/*Comentário*/}
                        <View style={styles.cell_view_vertical}>
                            <Text style={styles.txt_24}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </Text>
                        </View>
                    </View>
                </View>

            </View>



        </ScrollView>
        
        



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
        alignSelf: 'flex-start',
        paddingLeft: 10,
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
        paddingTop: 20,
    },

    row_view:{
        display: 'flex',
        flexDirection: 'row',
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
    },

    txtin_comentario:{
        fontSize: 24,
        backgroundColor: '#ADADAD',
    }

});