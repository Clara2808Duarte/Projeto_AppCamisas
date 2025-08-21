import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function TelaDetalhes({ route }) {
  const { produto } = route.params;
  const coresDisponiveis = ['Branco', 'Preto', 'Azul', 'Vermelho'];
  const tamanhosDisponiveis = ['P', 'M', 'G', 'GG'];

  return (
    <ScrollView style={estilos.container}>
      <Image source={{ uri: produto.imagem }} style={estilos.imagem} />
      <Text style={estilos.nome}>{produto.nome}</Text>
      <Text style={estilos.descricao}>
        Camiseta oficial do time {produto.nome}. Confeccionada em material de
        alta qualidade, ideal para torcedores apaixonados.
      </Text>
      <Text style={estilos.tituloSecao}>Cores disponíveis</Text>
      <View style={estilos.tags}>
        {coresDisponiveis.map((cor) => (
          <View key={cor} style={estilos.tag}>
            <Text style={estilos.textoTag}>{cor}</Text>
          </View>
        ))}
      </View>
      <Text style={estilos.tituloSecao}>Tamanhos disponíveis</Text>
      <View style={estilos.tags}>
        {tamanhosDisponiveis.map((tamanho) => (
          <View key={tamanho} style={estilos.tag}>
            <Text style={estilos.textoTag}>{tamanho}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F8F8FF' },
  imagem: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  nome: { fontSize: 24, fontWeight: '700', color: '#4B0082', marginBottom: 10 },
  descricao: { fontSize: 14, color: '#333', marginBottom: 20 },
  tituloSecao: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4B0082',
    marginBottom: 10,
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 20 },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
  },
  textoTag: { color: '#4B0082', fontWeight: '600' },
});