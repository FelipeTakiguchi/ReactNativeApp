import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Listagem from './pages/Listagem';
import Cadastro from './pages/Cadastro';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Listagem" component={Listagem}/>
        <Stack.Screen name="newTransaction" component={Cadastro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
