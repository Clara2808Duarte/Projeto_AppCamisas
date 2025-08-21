// Importa o hook useState do React (não está sendo usado aqui, mas é comum importar)
import { useState } from 'react'; 

// Importa o componente StatusBar do React Native para controlar a barra de status do celular
import { StatusBar } from 'react-native'; 

// Importa o container de navegação do React Navigation
import { NavigationContainer } from '@react-navigation/native'; 

// Importa a função para criar um stack navigator (navegação em pilha)
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// Importa as telas do aplicativo
import TelaLogin from './components/TelaLogin';
import TelaCatalogo from './components/TelaCatalogo';
import TelaDetalhes from './components/TelaDetalhes';

// Cria uma instância do stack navigator
const Stack = createNativeStackNavigator(); 

// Componente principal do app
export default function App() {
  return (
    // Envolve todo o app com o container de navegação
    <NavigationContainer> 

      {/* Configura a barra de status do celular */}
      <StatusBar 
        barStyle="dark-content"  // Ícones e texto em tom escuro
        backgroundColor="#4B0082" // Cor de fundo roxa
      /> 

      {/* Cria o stack navigator com a tela inicial sendo "Login" */}
      <Stack.Navigator initialRouteName="Login"> 

        {/* Tela de Login */}
        <Stack.Screen
          name="Login"               // Nome da tela para navegação
          component={TelaLogin}      // Componente que será renderizado
          options={{ headerShown: false }} // Oculta a barra superior
        />

        {/* Tela do catálogo de camisetas */}
        <Stack.Screen
          name="Catalogo"             // Nome da tela
          component={TelaCatalogo}    // Componente exibido
          options={{
            title: 'Catálogo de Camisetas',      // Título exibido no topo
            headerStyle: { backgroundColor: '#4B0082' }, // Cor de fundo da barra
            headerTintColor: '#fff',             // Cor do texto e botões na barra
          }}
        />

        {/* Tela de detalhes do produto */}
        <Stack.Screen
          name="Detalhes"              // Nome da tela
          component={TelaDetalhes}     // Componente exibido
          options={{
            title: 'Detalhes do Produto',       // Título exibido no topo
            headerStyle: { backgroundColor: '#4B0082' }, // Cor de fundo da barra
            headerTintColor: '#fff',            // Cor do texto e botões
          }}
        />

      </Stack.Navigator> 
    </NavigationContainer>
  );
}
