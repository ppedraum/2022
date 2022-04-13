import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';



export default function App() {
  const[resultado, setResultado] = useState(0);
  
  return (
    <View style={styles.container}>
      
      <Text>Calculadora Muito Foda</Text>
      <View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao}><Text>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>3</Text></TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao}><Text>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>6</Text></TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao} ><Text>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao}><Text>9</Text></TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao} ><Text>+</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao} ><Text>-</Text></TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao} ><Text>x</Text></TouchableOpacity>
          <TouchableOpacity style={styles.botao} ><Text>/</Text></TouchableOpacity>
        </View>
        <View style={styles.view}>
          <TouchableOpacity style={styles.botao_igual} ><Text>=</Text></TouchableOpacity>
        </View>
      </View>
      
      







      {/* <TouchableOpacity style={styles.botao} /* onPress={acrescValue(valor, +1)} >+</TouchableOpacity> 
      <View style={styles.view}>
        <Button
        onPress={incremetar}
        title="+">
        </Button>
        <Button
        onPress={decremetar}
        title="-">
        </Button>
      </View>
      <View style={styles.view}>
        <TextInput
        style={styles.txt_input}
        placeholder="Nº"
        keyboardType="numeric"
        onChangeText={setNum1}
        />

        <TextInput
        style={styles.txt_input}
        placeholder="Nº"
        keyboardType="numeric"
        onChangeText={setNum2}
        />

        <Text>{numero}</Text>
      </View>
      <View style={styles.view}>
        <Button
          style={styles.botao}
          onPress={somar}
          title="+">
        </Button>
        <Button
          style={styles.botao}
          onPress={subtrair}
          title="-">
        </Button>
        <Button
          style={styles.botao}
          onPress={multiplicar}
          title="x">
        </Button>
        <Button
          style={styles.botao}
          onPress={dividir}
          title="/">
        </Button>
        
      </View>
       */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    display: "flex",
    margin: 2,
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt_input:{
    width: 50,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
  },
  botao:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    width: 50,
    height: 50,
    backgroundColor: "#95ea7a",
    borderWidth:2,
    borderColor: "#18a255",
    fontSize: 30,
  },
  botao_igual:{
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
    width: 104,
    height: 50,
    backgroundColor: "#95ea7a",
    borderWidth:2,
    borderColor: "#18a255",
    fontSize: 30,
  }
});
