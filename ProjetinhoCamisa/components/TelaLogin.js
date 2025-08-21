import { useState } from 'react'; // Importa o hook useState do React para armazenar e atualizar estado
import {
  View, // Componente contêiner para agrupar outros componentes
  Text, // Componente para exibir texto
  TextInput, // Componente para receber entrada de texto do usuário
  TouchableOpacity, // Componente para criar botões tocáveis
  Alert, // API para exibir alertas no app
  StyleSheet, // API para criar estilos em React Native
  KeyboardAvoidingView, // Componente que ajusta a tela quando o teclado aparece
  Platform, // API para detectar sistema operacional (iOS ou Android)
} from 'react-native'; // Importa todos os componentes da biblioteca React Native

export default function TelaLogin({ navigation }) { // Componente principal da tela de login, recebe "navigation" para navegar entre telas
  const [usuario, setUsuario] = useState(''); // Estado para armazenar o valor digitado no campo usuário
  const [senha, setSenha] = useState(''); // Estado para armazenar o valor digitado no campo senha
  const [erroUsuario, setErroUsuario] = useState(''); // Estado para armazenar mensagem de erro do usuário

  const validarLogin = () => { // Função chamada ao clicar no botão "Entrar"
    if (!usuario.trim()) { // Verifica se o usuário não digitou nada (trim remove espaços)
      setErroUsuario('O usuário é obrigatório.'); // Define mensagem de erro para usuário vazio
      return; // Sai da função para não continuar
    } else {
      setErroUsuario(''); // Limpa a mensagem de erro se o usuário estiver preenchido
    }

    // 🔑 Verificação de login fixo
    if (usuario === 'aluno' && senha === '123') { // Verifica se usuário e senha estão corretos
      Alert.alert('✅ Sucesso!', 'Login realizado com sucesso.'); // Mostra alerta de sucesso
      navigation.navigate('Catalogo'); // Navega para a tela "Catalogo"
    } else {
      Alert.alert('⚠️ Erro', 'Usuário ou senha incorretos.'); // Mostra alerta caso usuário ou senha estejam errados
    }
  };

  return ( // Retorna os elementos que serão renderizados na tela
    <KeyboardAvoidingView
      style={estilos.container} // Aplica estilo ao contêiner principal
      behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Ajusta o comportamento do teclado no iOS
    >
      <View style={estilos.card}> {/* Card branco que contém os campos e botão */}
        <Text style={estilos.titulo}>⚽ Time de Craques</Text> {/* Título da tela */}

        <View style={estilos.bloco}> {/* Bloco para campo usuário */}
          <Text style={estilos.rotulo}>Usuário</Text> {/* Rótulo do campo */}
          <TextInput
            placeholder="Digite seu usuário" // Texto que aparece quando o campo está vazio
            value={usuario} // Valor atual do campo, ligado ao estado
            onChangeText={setUsuario} // Atualiza estado ao digitar
            style={[estilos.input, erroUsuario ? estilos.inputErro : null]} // Aplica estilo e altera borda se houver erro
            placeholderTextColor="#aaa" // Cor do texto placeholder
          />
          {erroUsuario ? ( // Se houver erro, exibe mensagem
            <Text style={estilos.textoErro}>{erroUsuario}</Text>
          ) : null}
        </View>

        <View style={estilos.bloco}> {/* Bloco para campo senha */}
          <Text style={estilos.rotulo}>Senha</Text> {/* Rótulo do campo */}
          <TextInput
            placeholder="Digite sua senha" // Placeholder do campo senha
            value={senha} // Valor atual do campo senha
            onChangeText={setSenha} // Atualiza estado ao digitar senha
            style={estilos.input} // Aplica estilo padrão
            placeholderTextColor="#aaa" // Cor do placeholder
            secureTextEntry // Oculta os caracteres digitados
          />
        </View>

        <TouchableOpacity style={estilos.botao} onPress={validarLogin}> {/* Botão Entrar */}
          <Text style={estilos.textoBotao}>Entrar</Text> {/* Texto do botão */}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({ // Criação do objeto de estilos
  container: {
    flex: 1, // Ocupa toda a tela
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    padding: 20, // Espaçamento interno
    backgroundColor: '#45150d', // Cor de fundo da tela
  },
  card: {
    width: '100%', // Largura total
    backgroundColor: '#fff', 
    borderRadius: 16, // Cantos arredondados
    padding: 25, 
    shadowColor: '#000', // Cor da sombra
    shadowOpacity: 0.15, // Opacidade da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 8, // Sombra no Android
  },
  titulo: {
    fontSize: 28, 
    fontWeight: '800', // Peso da fonte
    color: '#45150d', // Cor do texto
    textAlign: 'center', // Centraliza o texto
    marginBottom: 30, // Espaço abaixo do título
    letterSpacing: 1, // Espaçamento entre letras
  },
  bloco: { marginBottom: 18 }, // Espaçamento entre blocos de campo
  rotulo: {
    fontSize: 15, // Tamanho da fonte do rótulo
    fontWeight: '600', // Peso da fonte
    color: '#45150d', // Cor do texto
    marginBottom: 8, // Espaço abaixo do rótulo
  },
  input: {
    color: 'white', // Cor do texto digitado
    borderWidth: 1, // Largura da borda
    borderColor: '#8A2BE2', // Cor da borda
    borderRadius: 10, // Cantos arredondados do input
    padding: 14, // Espaço interno
    backgroundColor: '#45150d', // Fundo do input
    fontSize: 15, // Tamanho da fonte
    shadowColor: '#8A2BE2', // Cor da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
  },
  inputErro: { borderColor: '#FF0000' }, // Borda vermelha se houver erro
  textoErro: { color: '#FF0000', marginTop: 6, fontSize: 13 }, // Estilo da mensagem de erro
  botao: {
    backgroundColor: '#45150d', // Cor de fundo do botão
    paddingVertical: 15, // Altura interna do botão
    borderRadius: 12, // Cantos arredondados
    alignItems: 'center', // Centraliza texto do botão
    marginTop: 10, // Espaço acima do botão
    shadowColor: '#4B0082', // Cor da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 6, // Raio da sombra
  },
  textoBotao: {
    color: '#fff', // Cor do texto
    fontWeight: '700', // Peso da fonte
    fontSize: 17, // Tamanho da fonte
    letterSpacing: 0.5, // Espaçamento entre letras
  },
});
