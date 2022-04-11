
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
valor=0;


export default function Comp2() {
  return (
    
    <View style={styles.container}>
        <View style={styles.flex}>
            <TouchableOpacity style={styles.botao} /* onPress={acrescValue(valor, +1)} */>+</TouchableOpacity> 
            <TouchableOpacity style={styles.botao} /* onPress={acrescValue(valor, -1)} */>-</TouchableOpacity> 
        </View>
        <Text>{this.valor}</Text>
    </View>
  );
}

/* function acrescValue(valor, inc){
    this.valor+=valor*inc;
    return this.valor;
} */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex:{
    flexDirection: 'row',
  },
   botao:{
    backgroundColor: 'red',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});
