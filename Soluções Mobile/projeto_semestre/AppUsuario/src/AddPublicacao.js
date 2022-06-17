import React from 'react'
import { View, Text, Button } from 'react-native';



export default function({navigation}){

    return(
        <View >
            <Text>addPublicacao</Text>
            <Button title='Teste' onPress={()=>{navigation.navigate('CalcMuro')}} ></Button>
        </View>
    );



}