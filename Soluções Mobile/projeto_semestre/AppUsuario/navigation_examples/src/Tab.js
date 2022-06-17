import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from './src/Home';
import Sobre from './src/Sobre';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize: 12},
            style: {backgroundColor: '#3a3f44'},
            activeBackgroundColor: '#272b30',
            activeTintColor:'#fff',
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home';
              } else if (route.name === 'Sobre') {
                iconName = focused ? 'list' : 'list';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            }
          })}
          >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Sobre" component={Sobre}/>
        </Tab.Navigator>
    </NavigationContainer>
   
   
  );
}


