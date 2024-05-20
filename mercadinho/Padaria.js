import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Pão de Queijo/Unidade', price: 0.50, image: require('./assets/pao-de-queijo.png') },
  { id: 2, name: 'Pão de Forma PANCO', price: 10.49, image: require('./assets/pao-de-forma.png') },
  { id: 3, name: 'Egg Sponge', price: 14.99, image: require('./assets/egg-sponge.png') },
  { id: 4, name: 'Cookies Original Bauducco', price: 4.49, image: require('./assets/cookies.png') },
  { id: 5, name: 'Pão Francês/Unidade', price: 0.65, image: require('./assets/pao-frances.png') },
];

const Padaria = () => {
  const { addItemToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Padaria</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Pesquisar..."
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <Image source={product.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>R$ {product.price.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={() => addItemToCart(product)}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <Text style={styles.notFoundText}>Não encontrado</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
  },
 
  addButtonText: {
    color: 'red',
    fontSize: 30,
    lineHeight: 30,
  },
  notFoundText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'red',
    marginTop: 20,
  },
});

export default Padaria;
