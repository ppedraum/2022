import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//parte 2
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/Home';
import Sobre from './src/Sobre';

const Stack = createNativeStackNavigator();
//parte 2
const Tab = createBottomTabNavigator();

function tabs (){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Home}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>  
        <Stack.Screen 
          name="Home" 
          component={tabs} 
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


