import { Text, StyleSheet, View, Button } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from '@expo/vector-icons'; 


export default function Home({navigation}){
    return (
        <View style={styles.container}>
            <Text style={styles.baseText}>Home</Text>
            <Button
                title="Sobre"
                color="#f194ff"
                onPress={() => navigation.navigate('Sobre')}
            />
             <Button
                title="Drawer"
                color="#f194ff"
                onPress={() => navigation.openDrawer()}
            /> 
            <AntDesign name="car" size={24} color="black" />
            <Ionicons name="ios-home" size={24} color="black" />
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
