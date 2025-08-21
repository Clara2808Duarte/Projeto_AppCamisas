import { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from './components/TelaLogin';
import TelaCatalogo from './components/TelaCatalogo';
import TelaDetalhes from './components/TelaDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#4B0082" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Catalogo"
          component={TelaCatalogo}
          options={{
            title: 'Catálogo de Camisetas',
            headerStyle: { backgroundColor: '#4B0082' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={TelaDetalhes}
          options={{
            title: 'Detalhes do Produto',
            headerStyle: { backgroundColor: '#4B0082' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
