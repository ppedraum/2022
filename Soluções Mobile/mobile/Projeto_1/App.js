
import { StyleSheet, View} from 'react-native';
import React from 'react';

import Comp2 from './src/components/Comp2';
import Comp1 from './src/components/Comp1';


export default function App() {
  return (
    <View style={styles.container}>
      <Comp2></Comp2>
    {/*   <Comp1/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
