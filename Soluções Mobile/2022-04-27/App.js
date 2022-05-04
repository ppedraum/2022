import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import StackNav from './src/StackNav';
import TabNav from './src/TabNav';

function App() {
  return (
    <View style={styles.container}>
      <StackNav></StackNav>
      {/* <TabNav></TabNav> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


/* parei em: https://reactnavigation.org/docs/params */
