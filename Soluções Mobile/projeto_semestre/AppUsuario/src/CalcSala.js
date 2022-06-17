import React from 'react'
import { View, Text, Button } from 'react-native';



export default function({navigation}){

    return(
        <View style={{flex: 1}}  >
            <Text>calcSala</Text>
            <Button title='Enviar' onPress={()=>{navigation.navigate('ResultadoCalculo')}} />
        </View>
    );



}