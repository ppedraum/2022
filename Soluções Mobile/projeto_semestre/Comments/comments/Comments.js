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

        /*
            Basicamente toda vez que muda a lista de comentários, o array de comentários dá update

            Obs.: Essa função usa coisas que eu não conheço, como promise, então é bom dar uma pesquisada nisso pra saber o que é
                  esse then() (acho que ele executa a função getCommsApi e "then (depois)" joga o array de objetos do api.js pra função, 
                  que aí sim, atualiza o array beComments )
        */
        getCommsApi().then((data)=>{
            setBeComments(data);
        })

    }, []);

    return (
        <View style={styles.comments} >
            <Text style={styles.comments_title} >Comments</Text>
            <View style={styles.comment_form_title}><Text>Write Comment</Text></View>

            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <View style={styles.comments_container}>
                {/*
                    O map basicamente executa uma função para cada item de uma array, podendo usar markup para jogar para a tela os resultados
                    Aquele parênteses no lugar da função funciona como um return sem precisar colocar chaves + return()
                */}
                {rootComments.map(comm => (
                <>  
                    {/*
                        A key funciona para identificar o elemento como o comentário com o id do usuário

                        O atributo replies recebe a função replies (que pega só os comentários que possuem parentId = id do pai)
                        com o parâmetro rootCommId = comm.id (id do comentário que está sendo renderizado, no caso, o pai)    
                    */}
                    <Comment key={comm.id} comment={comm} replies={replies(comm.id)} />
                </>

                ))}
            </View>

        </View>
    );
}
