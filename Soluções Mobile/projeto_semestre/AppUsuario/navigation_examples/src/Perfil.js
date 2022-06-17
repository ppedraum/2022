import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Perfil() {
    return (
        <View>
            <Text>Perfil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontSize: 20,
        fontWeight: "bold"
  }
});


