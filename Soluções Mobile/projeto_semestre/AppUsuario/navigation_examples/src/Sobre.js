import { Text, StyleSheet, View } from "react-native";
import React from "react";

export default function Sobre({navigation}){

    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>Sobre</Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#57576b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    baseText: {
        fontSize: 20,
        fontWeight: "bold"
  }
});
