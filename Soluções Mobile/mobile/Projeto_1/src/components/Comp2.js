import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

export default function Comp2() {
  return (
    <View style={styles.container}>
        
      <Text>Teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function teste(x){
    return x+1;
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
