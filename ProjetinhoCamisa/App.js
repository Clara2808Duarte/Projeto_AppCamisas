import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './components/TelaInicial';
import TelaLogin from './components/TelaLogin';
import TelaCatalogo from './components/TelaCatalogo';
import TelaDetalhes from './components/TelaDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Barra de status */}
      <StatusBar barStyle="light-content" backgroundColor="#800000" />

      <Stack.Navigator initialRouteName="Inicial">
        {/* Tela de capa inicial */}
        <Stack.Screen
          name="Inicial"
          component={TelaInicial}
          options={{ headerShown: false }} // sem barra no topo
        />

        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        />

        {/* Tela do Catálogo */}
        <Stack.Screen
          name="Catalogo"
          component={TelaCatalogo}
          options={{
            title: 'Catálogo de Camisetas',
            headerStyle: { backgroundColor: '#800000' },
            headerTintColor: '#F5F5DC',
          }}
        />

        {/* Tela de Detalhes */}
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{
            title: 'Detalhes do Produto',
            headerStyle: { backgroundColor: '#800000' },
            headerTintColor: '#F5F5DC',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
