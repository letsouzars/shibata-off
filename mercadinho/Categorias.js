import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const categories = [
  { name: 'Padaria', image: require('./assets/padaria.png') },
  { name: 'Carnes', image: require('./assets/carnes.png') },
  { name: 'Mercearia', image: require('./assets/Mercearia.png') },
  { name: 'Matinais', image: require('./assets/Matinais.png') },
  { name: 'FriosLaticinios', image: require('./assets/frios-laticinios.png') },
  { name: 'Bebidas', image: require('./assets/Bebidas.png') },
  { name: 'UtilidadesDomesticas', image: require('./assets/utilidades-domesticas.png') },
  { name: 'Limpeza', image: require('./assets/Limpeza.png') },
  { name: 'Higiene', image: require('./assets/Higiene.png') },
  { name: 'Hortifruti', image: require('./assets/Hortifruti.png') },
  { name: 'Bomboniere', image: require('./assets/Bomboniere.png') },
];

const Categorias = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryItem}
            onPress={() => navigation.navigate(category.name)}
          >
            <Image source={category.image} style={styles.categoryImage} />
           
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '47%',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:25,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  categoryImage: {
    width: '100%',
    height: 200,
    borderRadius:10,
 
  },

});

export default Categorias;
