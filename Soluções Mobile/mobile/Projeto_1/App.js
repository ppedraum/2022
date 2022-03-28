
import { TouchableHighlight, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import Comp1 from './src/components/Comp1';

import pato from './src/assets/pato.jpg'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={pato} style={styles.imagem}/>
      <Text style={styles.fonte}>Isso é um teste!</Text>

      <TouchableHighlight style={styles.botao} onPress={() => alert('Hello!')}>
        <Text style={{color: 'red', fontSize: 18, fontFamily: 'Comic Sans MS'}}>Testee</Text>
      </TouchableHighlight>
      <TextInput style={styles.input}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  fonte:{
    color: '#eee',
    fontSize: 18
  },
  imagem:{
    width: 1280/4,
    height: 720/4,
  },
  botao:{
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  input:{
    backgroundColor:'white',
    borderRadius: 10,
    width: 150,
    height:25,
    fontSize: 18,
  }
});
