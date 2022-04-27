/*
O NavigationContainer possui vários tipos de navegadores diferentes. Um deles é o StackNavigator, que usamos criando um objeto pelo método createNativeStackNavigator, e depois usando as propriedades Navigator (que controla a navegação) e screen (que é a tela navegável)
*/
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation, route}) {
  const { num } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>numero = {JSON.stringify(num)}</Text>
      {/*É necessário usar o JSON, por algum motivo que não sei*/}
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details', {num: Math.floor(Math.random()*100)})} 
        //Pode passar novos valores para os parâmetros, senão, vai usar os valores padrão (initialParams) do Stack.Screen
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go all the way back"
        onPress={() => navigation.navigate('Home')} /*O push coloca a home na próxima posição do stack, e não voltando inicio de verdade*/
      /*O navigation.popToPop() não está funfando aparentemente*/
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" /* Colocar opções padrão para todas as telas */
      screenOptions={{
        title: 'Default',
        headerTitleStyle: {fontFamily: 'New Times Roman'}
      }}> 

        <Stack.Screen name="Home" 
        component={HomeScreen} 
        options={{ title: 'Overview' }} /*Opções específicas para cada tela*/
        />

        <Stack.Screen name="Details" 
        component={DetailsScreen} 
        initialParams={{num: 1, name: 'Details'}} //Parâmetros iniciais da screen
        options={{ 
          title: 'Details',
          headerStyle:{
            backgroundColor:'#fff',
          },
          headerTintColor: '#ffaaaa',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Comic Sans MS',
          },
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;