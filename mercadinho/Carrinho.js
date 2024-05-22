import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';

const Carrinho = () => {
  const { cart, addItemToCart, removeItemFromCart, getTotalPrice } = useContext(CartContext);
  const navigation = useNavigation();

  const handlePayment = () => {
    navigation.navigate('Pagamento');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Suas Compras</Text>
      <Text style={styles.subtitle}>Calcule suas compras aqui!</Text>
      {cart.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={item.image} style={styles.cartItemImage} />
          <View style={styles.cartItemDetails}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>R$ {(item.price * item.quantity).toFixed(2)}</Text>
          </View>
          <View style={styles.cartItemControls}>
            <TouchableOpacity onPress={() => removeItemFromCart(item.id)}>
              <Text style={styles.cartItemControl}>-</Text>
            </TouchableOpacity>
            <Text style={styles.cartItemQuantity}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => addItemToCart(item)}>
              <Text style={styles.cartItemControl}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalPrice}>R$ {getTotalPrice().toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pagar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  cartItemDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
  },
  cartItemPrice: {
    fontSize: 14,
    color: 'gray',
  },
  cartItemControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemControl: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  cartItemQuantity: {
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Carrinho;
