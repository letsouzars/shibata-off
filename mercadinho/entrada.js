import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Acesso() {
    const navigation = useNavigation();

    const handleAcessarPress = () => {
        navigation.navigate('MainTabs', { screen: 'Home' });
    };

    const handleCadastroPress = () => {
        navigation.navigate('Cadastro');
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableOpacity>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Bem-Vindo de volta!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <TextInput placeholder='Seu email...' style={styles.input} />
                        <TextInput placeholder='Sua senha' style={styles.input} secureTextEntry />
                        <TouchableOpacity style={styles.button} onPress={handleAcessarPress}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister} onPress={handleCadastroPress}>
                            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#034EA1'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#FFF",
        fontFamily: 'montserrat',
        marginTop: 8,
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 28,
    },
    input: {
        borderBottomWidth: 1,
        marginTop: 15,
        height: 40,
        marginBottom: 6,
        fontSize: 16
    },
    button: {
        backgroundColor: '#034EA1',
        width: '60%',
        borderRadius: 50,
        paddingVertical: 8,
        marginTop: 45,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'montserrat',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 9999,
        padding: 10
    },
});
