import React from "react";
import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomePedreiro({navigation}){

    return(
        <View>
            <Button onPress={navigation.navigate('PerfilPedreiro')} title='perfil' ></Button>
            <Button onPress={navigation.navigate('SobreScreen')} title='sobre' ></Button>
            <Button onPress={navigation.navigate('GaleriaScreen')} title='galeria' ></Button>
        </View>
    );
}