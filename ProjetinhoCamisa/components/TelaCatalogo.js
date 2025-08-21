import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';

// Import das imagens
import CamisetaSP from './assets/Camiseta SP frente.png';
import CamisetaCorinthians from './assets/Camiseta Corinthians frente.png';
import CamisetaFlamengo from './assets/Camiseta Flamengo frente.png';
import CamisetaPalmeiras from './assets/Camiseta Palmeiras frente.png';
import CamisetaBotafogo from './assets/Camiseta Botafogo frente.png';
import CamisetaChelsea from './assets/Camiseta Chelsea frente.png';
import CamisetaRM from './assets/Camiseta RM frente.png';
import CamisetaPSG from './assets/Camiseta PSG frente.png';
import CamisetaMC from './assets/Camiseta MC frente.png';
import CamisetaLiverpool from './assets/Camiseta Liverpool frente.png';


const camisetas = [
  {
    id: '1',
    nome: 'Palmeiras 2025',
    imagem: CamisetaPalmeiras,
  },
  {
    id: '2',
    nome: 'Flamengo 2025',
    imagem: CamisetaFlamengo,
  },
  {
    id: '3',
    nome: 'São Paulo 2025',
    imagem: CamisetaSP,
  },
  {
    id: '4',
    nome: 'Corinthians 2025',
    imagem: CamisetaCorinthians,
  },
  {
    id: '5',
    nome: 'Botafogo 2025',
    imagem: CamisetaBotafogo,
  },
  {
    id: '6',
    nome: 'Chelsea 2025',
    imagem: CamisetaChelsea,
  },
  {
    id: '7',
    nome: 'Real Madrid 2025',
    imagem: CamisetaRM,
  },
  {
    id: '8',
    nome: 'Liverpool 2025',
    imagem: CamisetaLiverpool,
  },
  {
    id: '9',
    nome: 'Paris Saint-Germain 2025',
    imagem: CamisetaPSG,
  },
  {
    id: '10',
    nome: 'Manchester United 2025',
    imagem: CamisetaMC,
  },
];

export default function TelaCatalogo({ navigation }) {
  return (
    <View style={estilos.container}>
  <FlatList
    data={camisetas}   // Lista de dados que será exibida (no caso, um array de camisetas).
    keyExtractor={(item) => item.id} // Define a chave única de cada item, usando o id da camiseta.
    numColumns={2}  // Exibe os itens em 2 colunas (em forma de grade).
    columnWrapperStyle={{ justifyContent: 'space-between' }} 
    // Ajusta o espaçamento entre as colunas, distribuindo os itens igualmente.
    
    renderItem={({ item }) => ( // Função que renderiza cada item da lista.
      <TouchableOpacity
        style={estilos.item} // Estilo aplicado ao "card" de cada camiseta.
        onPress={() => navigation.navigate('Detalhes', { produto: item })}>
        {/* Quando clicado, navega para a tela "Detalhes", passando o item como parâmetro */}
        
        <Image source={{ uri: item.imagem }} style={estilos.imagem} />
        {/* Mostra a imagem da camiseta, carregada por URL */}
        
        <Text style={estilos.nome}>{item.nome}</Text>
        {/* Mostra o nome da camiseta */}
      </TouchableOpacity>
    )}
  />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: '#F8F8FF' },
  item: {
    flex: 1,
    margin: 6,
    alignItems: 'center',
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
    padding: 10,
  },
  imagem: { width: 120, height: 120, resizeMode: 'contain' },
  nome: {
    marginTop: 8,
    fontWeight: '700',
    color: '#4B0082',
    textAlign: 'center',
  },
});