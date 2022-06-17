import React from 'react'
import { View, Text, Button } from 'react-native';



export default function({navigation}){

    return(
        <View >
            <Text>Calcular</Text>
            <Button title='Muro' onPress={()=>{navigation.navigate('CalcMuro')}} ></Button>
            <Button title='Sala' onPress={()=>{navigation.navigate('CalcSala')}} ></Button>
        </View>
    );



}