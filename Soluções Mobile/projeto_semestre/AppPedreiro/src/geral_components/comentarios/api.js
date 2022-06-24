import React from "react";


var comentarios = [
    {
        nome : "Pedro",
        comentario : "Muito bom",
        comm_id : 1,
    },
    {
        nome : "Joana",
        comentario : "Muito ruim",
        comm_id : 2,
    },
    {
        nome : "Alex",
        comentario : "Razoável",
        comm_id : 3,
    },

];

export function getComentarios(){
    return comentarios;
}

export function setComentario(nome, comentario){
    comentarios.push({
        nome : nome,
        comentario : comentario,
    })
}