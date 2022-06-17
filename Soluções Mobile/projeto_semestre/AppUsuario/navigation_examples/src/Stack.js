import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './src/Home';
import Sobre from './src/Sobre';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>  
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title:'Bem Vindo!',
            headerStyle:{
              backgroundColor: '#f194ff'
            },
            headerTintColor: '#FFF'
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
   
   
  );
}


