import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Nome do App */}
      <Text style={styles.titulo}> Loja de Camisetas</Text>

      {/* Botão para entrar */}
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000', // fundo bordô
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F5F5DC', // texto bege
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#F5F5DC', // bege
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800000', // texto bordô
  },
});
