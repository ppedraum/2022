import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import PerfilPedreiro from './src/PerfilPedreiro';
import GaleriaScreen from './src/geral_components/GaleriaScreen';
import PostObra from './src/PostObra';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='PerfilPedreiro'>  
                {/* <Stack.Screen 
                    name="HomePedreiro" 
                    component={HomePedreiro} 
                    options={{
                    title:'Bem Vindo!',
                    headerStyle:{
                        backgroundColor: '#f194ff'
                    },
                    headerTintColor: '#FFF'
                    }}
                /> */}
                <Stack.Screen name="PerfilPedreiro" component={PerfilPedreiro} />
                <Stack.Screen name="PostObra" component={PostObra} />
                <Stack.Screen name="GaleriaScreen" component={GaleriaScreen}/>

            </Stack.Navigator>
      </NavigationContainer>
     
    );
}
