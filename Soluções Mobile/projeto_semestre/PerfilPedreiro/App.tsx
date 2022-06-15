import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import PerfilPedreiro from './src/components/PerfilPedreiro';
import TesteTopTab from './src/components/TopTabNav';

export default function App() {
  return (
    <View>
      <StatusBar/>
      <PerfilPedreiro/>
      {/* <TesteTopTab/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
