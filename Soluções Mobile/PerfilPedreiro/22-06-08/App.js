import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import PerfilPedreiro from './src/components/PerfilPedreiro';
import Teste from './src/testes/Main'
import HomePedreiro from './src/components/HomePedreiro';
import SobreScreen from './src/components/SobreScreen';
import GaleriaScreen from './src/components/GaleriaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomePedreiro'>  
                <Stack.Screen 
                    name="HomePedreiro" 
                    component={HomePedreiro} 
                    options={{
                    title:'Bem Vindo!',
                    headerStyle:{
                        backgroundColor: '#f194ff'
                    },
                    headerTintColor: '#FFF'
                    }}
                />
                <Stack.Screen name="PerfilPedreiro" component={PerfilPedreiro} />
                <Stack.Screen name="SobreScreen" component={SobreScreen} />
                <Stack.Screen name="GaleriaScreen" component={GaleriaScreen} />
            </Stack.Navigator>
      </NavigationContainer>
     
    );
}
