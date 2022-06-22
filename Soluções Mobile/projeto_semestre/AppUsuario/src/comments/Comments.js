import styles from './styles.json';

import React, {useState, useEffect} from 'react';

import { StyleSheet, Text, View } from 'react-native';

//nossa lista de comentários
import {getComments as getCommsApi} from './api';
import Comment from './Comment';
import CommentForm from './CommentForm';

//o elemento comments recebe o id do usuário atual para saber quais comentários ele pode editar (que tem seu id)
export default function Comments({currUserId}) {


    /*
        um array com todos os comentários, setados com useEffect()
        beComments de BackEnd comments, ou seja, uma simulação de um banco de dados mas utilizando funções que
        retornam um array de objetos
    */
    const [beComments, setBeComments] = useState([]);


    //Um array com todos os comentários que não são filhos de outros comentários (comentários raiz)
    const rootComments = beComments.filter( (beComment)=>beComment.parentId === null);


    //Um array com todos os comentários que são filhos de outro comentário (identificado pelo seu id (rootCommId))
    /*
        Esse tipo de reply carrega toda vez que o comentário pai for renderizado, o que pode causar problemas de performance
        quando há muitos comentários de uma vez (ex.: + de 1000)
    */
    const replies = (rootCommId) => {
        return beComments
        .filter((beComment)=> beComment.parentId === rootCommId)
        .sort((a, b)=> 
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    }


    function addComment(text, parentId){
        console.log("addComment: ", text, " ", parentId);
    }

    console.log('becomms', beComments);


    /*
        O useEffect() permite a execução de funções assíncronas que executam paralelamente ao app, ou seja, estão sempre em update
        sem a tela precisar dar update.
    */
    useEffect(()=>{

        getCommsApi().then((data)=>{
            setBeComments(data);
        })

    }, []);

    return (
        <View style={styles_main.tab_content_view} >
            <Text style={styles_main.title_24_bold} >Comentários</Text>

            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <View style={styles.comments_container}>
                {rootComments.map(comm => (
                <>  
                    <Comment key={comm.id} comment={comm} replies={replies(comm.id)} />
                </>

                ))}
            </View>

        </View>
    );
}

const styles_main = StyleSheet.create({

    main: {
        /* width: winDim().width, */
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E9EAEA",
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
        marginTop: 20,
    },

    tab_content_view:{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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