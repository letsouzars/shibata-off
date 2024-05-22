import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {
  const navigation = useNavigation();

  useFonts({ 'Montserrat': require('./assets/Montserrat-VariableFont_wght.ttf') });

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={1000}
          animation="flipInY"
          source={require('./assets/shibataAZ.png')}
          style={styles.logo}
          resizeMode='contain'
        />
      </View>
      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}>
          Venha fazer parte e organizar suas compras!
        </Text>
        <Text style={styles.text}>
          Faça o login para começar
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Acesso')}
          style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
          style={[styles.button, styles.buttonCadastro]}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: "70%"
  },
  containerForm: {
    flex: 1.5,
    backgroundColor: '#034EA1',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 12,
    color: "#FFF",
    fontFamily: 'Montserrat',
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    backgroundColor: '#FFF',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonCadastro: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#034EA1',
    fontWeight: 'bold'
  }
});
