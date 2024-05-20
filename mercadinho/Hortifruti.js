import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { CartContext } from './CartContext';

const products = [
  { id: 1, name: 'Maçã/Unidade', price: 2.29, image: require('./assets/maca.png') },
  { id: 2, name: 'Alface Americana Amj Unidade', price: 5.99, image: require('./assets/salada.png') },
  { id: 3, name: 'Batata Lavada 500g', price: 12.99, image: require('./assets/batata.png') },
  { id: 4, name: 'Banana Prata', price: 6.90, image: require('./assets/banana.png') },
  { id: 5, name: 'Limão Kg', price: 9.99, image: require('./assets/limao.png') },
];

const HortiFruti = () => {
  const { addItemToCart } = useContext(CartContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>HortiFruti</Text>
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

export default HortiFruti;
