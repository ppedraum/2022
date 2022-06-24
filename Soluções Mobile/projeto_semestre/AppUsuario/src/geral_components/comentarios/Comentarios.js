import React, {useState} from 'react';
import {View, TouchableOpacity, TextInput, Text, Image} from 'react-native';
import styles from '../../styles';
import { getComentarios, setComentario } from './api';

import Comentario from './Comentario';

export default function Comentarios(){
    return (

        <>
            {
                getComentarios().map(comm => (

                    <Comentario key={comm.comm_id} nome={comm.nome} comentario={comm.comentario} />
                    
                ))
            }
        </>



    );
}