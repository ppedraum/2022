import React from 'react'
import { View, Text, TextInput, Button } from 'react-native';



export default function({navigation}){

    return(
        <View >
            <View style={{display:'flex', flexDirection:'row',}} >
                <TextInput placeholder='Pesquisar...' style={{width:'200px',height:'25px'}} />
                <Button title='Pesquisar' onPress={()=>{navigation.navigate('PerfilPedreiro')}} />
            </View>
            
        </View>
    );



}