import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';

const Pagamento = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handlePaymentSelection = (paymentType) => {
    setSelectedPayment(paymentType);
    setTimeout(() => {
      setModalVisible(true);
    }, 1000);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagamento</Text>
      <Text style={styles.subtitle}>Selecione a forma de pagamento</Text>
      
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Credito' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('Credito')}
      >
        <View style={styles.paymentOptionContent}>
          <Image source={require('./assets/credit-card.png')} style={styles.paymentImage} />
          <View>
            <Text style={styles.paymentText}>Cartão de Crédito</Text>
            <Text style={styles.paymentCardNumber}>1234 **** **** 6789</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Debito' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('Debito')}
      >
        <View style={styles.paymentOptionContent}>
          <Image source={require('./assets/debit-card.png')} style={styles.paymentImage} />
          <View>
            <Text style={styles.paymentText}>Cartão de Débito</Text>
            <Text style={styles.paymentCardNumber}>1234 **** **** 6789</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'Pix' && styles.selectedPayment]}
        onPress={() => handlePaymentSelection('Pix')}
      >
        <View style={styles.paymentOptionContent}>
          <Image source={require('./assets/pix.png')} style={styles.paymentImage} />
          <View>
            <Text style={styles.paymentText}>Transferência Pix</Text>
            <Text style={styles.paymentCardNumber}>QR Code</Text>
          </View>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.newPaymentOption}>
        <Text style={styles.newPaymentText}>Adicionar uma nova forma de pagamento</Text>
      </TouchableOpacity>
      
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Aviso</Text>
            <Text style={styles.modalText}>
              Após efetuar o pagamento, comparecer ao caixa com o comprovante da compra. Obrigado por comprar no Shibata Supermercados!
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>Voltar para o início</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff', 
      },
      container: {
        backgroundColor: '#fff', 
        flex: 1,
        padding: 20,
        marginTop:70,
        
      },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color:'gray',
    marginBottom: 20,
  },
  paymentOption: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginTop: 35,
  },
  selectedPayment: {
    shadowColor: 'red',
    
    shadowOpacity: 0.9,
    shadowRadius: 4,
    
    
  },
  paymentOptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentImage: {
    width: 83,
    height: 50,
    marginRight: 10,
  },
  paymentText: {
    fontSize: 16,
  },
  paymentCardNumber: {
    fontSize: 13,
    color: 'gray',
  },
  newPaymentOption: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginTop: 20,
    alignItems: 'center',

  },
  newPaymentText: {
    fontSize: 16,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#034EA1',
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Pagamento;
