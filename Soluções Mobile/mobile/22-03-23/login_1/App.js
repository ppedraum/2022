import { StyleSheet, Text, View } from 'react-native';
import Login from './telas/Login.js'
export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
