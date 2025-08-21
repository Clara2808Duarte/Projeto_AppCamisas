import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importação das telas
import TelaInicial from './components/TelaInicial';
import TelaLogin from './components/TelaLogin';
import TelaCatalogo from './components/TelaCatalogo';
import TelaDetalhes from './components/TelaDetalhes';

// Criando a pilha de navegação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Configuração da barra de status */}
      <StatusBar barStyle="light-content" backgroundColor="#800000" />

      {/* Definindo as telas da navegação */}
      <Stack.Navigator initialRouteName="Inicial">
        
        {/* Tela de Boas-vindas */}
        <Stack.Screen
          name="Inicial"
          component={TelaInicial}
          options={{ headerShown: false }} // esconde o cabeçalho
        />

        {/* Tela de Login */}
        <Stack.Screen
          name="Login"
          component={TelaLogin}
          options={{
            title: 'Login',
            headerStyle: { backgroundColor: '#800000' },
            headerTintColor: '#F5F5DC',
          }}
        />

        {/* Tela de Catálogo */}
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
