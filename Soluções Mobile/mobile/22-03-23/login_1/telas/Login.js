import { StyleSheet, Text, View, TouchableOpacity, TextInput, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.text}>Faça Login!</Text>
        <Text style={styles.title}>Nome: </Text>
        <TextInput style={styles.txtInput}/>
        <Text style={styles.title}>E-Mail: </Text>
        <TextInput style={styles.txtInput}/>
        <Text style={styles.title}>Senha: </Text>
        <TextInput style={styles.txtInput}/>
        <TouchableOpacity onPress={() => alert('Enviado!')} style={styles.botao}>
          Enviar
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login:{
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  botao:{
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 20,
    fontFamily: 'Arial',
    marginVertical: 20,
    borderRadius: 10,
    alignSelf: 'flex-end'
  },
  txtInput:{
    backgroundColor: '#fff',
    width: 250,
    fontSize: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontFamily: 'Arial',
    paddingVertical: 20,
  },
  title:{
    color: '#999',
    fontSize: 20,
    fontFamily: 'Arial',
  },

});
