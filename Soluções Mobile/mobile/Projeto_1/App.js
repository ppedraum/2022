
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Comp1 from './src/components/Comp1';
import Comp2 from './src/components/Comp2';

export default function App() {
  return (
    <View style={styles.container}>
    {/*   <Comp1/>  */}
      <Comp2/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
