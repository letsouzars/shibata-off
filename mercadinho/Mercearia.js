import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Arroz 2Kg', price: 7.96, image: require('./assets/arroz.png') },
  { id: 2, name: 'Feijão Carioca 1Kg', price: 22.50, image: require('./assets/feijao.png') },
  { id: 3, name: 'Molho de Tomate', price: 15.99, image: require('./assets/molho-tomate.png') },
  { id: 4, name: 'Macarrão Renata', price: 3.78, image: require('./assets/macarrao.png') },
  { id: 5, name: 'Café 3 Corações', price: 3.78, image: require('./assets/cafe.png') },
];

const Mercearia = () => {
  const { addItemToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mercearia</Text>
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

export default Mercearia;
