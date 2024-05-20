import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const promoProducts = [
  { name: 'Maçã/Unidade', image: require('./assets/maca.png'), currentPrice: 'R$ 2,29', oldPrice: 'R$ 4,46' },
  { name: 'Pinho Sol', image: require('./assets/pinho-sol.png'), currentPrice: 'R$ 25,99', oldPrice: 'R$ 35,25' },
  { name: 'Filé/Kg', image: require('./assets/file.png'), currentPrice: 'R$ 39,99', oldPrice: 'R$ 44,46' },
  { name: 'Papel Higiênico Neve', image: require('./assets/neve.png'), currentPrice: 'R$ 25,99', oldPrice: 'R$ 35,25' },
];

const Home = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.BemVindo}>
          Bem vindo Ao Nosso Aplicativo!
        </Text>
        <Image source={require('./assets/banner.png')} style={styles.banner} />
        <Text style={styles.BemVindo}>
          Produtos Em Promoção
        </Text>
        <View style={styles.promoContainer}>
          {promoProducts.map((product, index) => (
            <View key={index} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>
                {product.currentPrice} <Text style={styles.oldPrice}>{product.oldPrice}</Text>
              </Text>
            </View>
          ))}
        </View>
        <Image source={require('./assets/banner2.png')} style={styles.banner} />
        <Text style={styles.BemVindo}>
          Missão do Grupo Shibata
        </Text>
        <Text style={styles.texto}>
          Nossa missão é fidelizar os clientes com produtos e serviços, que atendam suas necessidades e superem suas expectativas.
        </Text>
        <Image source={require('./assets/logo.png')} style={{ margin: 60 }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#fff', 
  },
  container: {
    backgroundColor: '#fff', 
    flex: 1,
    marginTop:70,
  },
  BemVindo: {
    textAlign: 'left',
    fontSize: 23,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular', 
    marginTop: 20,
    marginHorizontal: 20,
  },
  banner: {
    width: screenWidth * 0.9, 
    height: 200,
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginVertical: 10, 
  },
  promoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 15,
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    height: 200,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
    fontFamily: 'Montserrat-Regular', 
  },
  productPrice: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
    marginTop: 4,
    fontFamily: 'Montserrat-Regular', 
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontFamily: 'Montserrat-Regular', 
  },
  texto: {
    textAlign: 'left',
    fontSize: 15,
    marginTop: 20,
    marginHorizontal: 20,
    color: '#888',
    fontFamily: 'Montserrat-Regular', 
  },
});

export default Home;
