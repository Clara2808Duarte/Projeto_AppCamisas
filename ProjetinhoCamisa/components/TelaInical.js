// Importa os componentes básicos de UI do React Native
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Exporta o componente padrão chamado TelaInicial, recebendo a prop "navigation" do React Navigation
export default function TelaInicial({ navigation }) {
  // Início da renderização do componente
  return (
    // View raiz que ocupa toda a tela e aplica o estilo "container"
    <View style={styles.container}>
      {/* Texto que exibe o nome do app, usando o estilo "titulo" */}
      <Text style={styles.titulo}> Loja de Camisetas</Text>

      {/* Botão tátil que, ao ser pressionado, navega para a tela "Login" */}
      <TouchableOpacity
        style={styles.botao}                         // Aplica o estilo visual do botão
        onPress={() => navigation.navigate("Login")} // Ação de navegação para a tela de Login
      >
        {/* Texto dentro do botão, estilizado por "textoBotao" */}
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

// Objeto de estilos para os elementos da TelaInicial
const styles = StyleSheet.create({
  // Estilo da View principal (container) que centraliza o conteúdo
  container: {
    flex: 1,                   // Ocupa todo o espaço disponível da tela
    backgroundColor: '#800000',// Cor de fundo bordô
    alignItems: 'center',      // Alinha itens horizontalmente ao centro
    justifyContent: 'center',  // Alinha itens verticalmente ao centro
  },
  // Estilo do texto do título
  titulo: {
    fontSize: 32,        // Tamanho grande da fonte
    fontWeight: 'bold',  // Deixa o texto em negrito
    color: '#F5F5DC',    // Cor bege para o texto
    marginBottom: 40,    // Espaço abaixo do título para afastar do botão
  },
  // Estilo do botão "Entrar"
  botao: {
    backgroundColor: '#F5F5DC', // Fundo bege do botão
    paddingVertical: 12,        // Espaçamento interno vertical
    paddingHorizontal: 40,      // Espaçamento interno horizontal
    borderRadius: 8,            // Bordas arredondadas
  },
  // Estilo do texto dentro do botão
  textoBotao: {
    fontSize: 18,         // Tamanho do texto do botão
    fontWeight: 'bold',   // Negrito para dar destaque
    color: '#800000',     // Cor bordô no texto do botão
  },
});
