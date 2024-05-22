import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Modal, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [isModalVisible, setModalVisible] = useState(false); // Novo estado para controlar o modal
    const navigation = useNavigation();

    const handleAcessarPress = () => {
        
        setModalVisible(true);
    };

    const closeModal = () => {
        // Função para fechar o modal
        setModalVisible(false);
    };

    const handleEntradaPress = () => {
        navigation.navigate('Acesso');
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="#034EA1" />
                    </TouchableOpacity>
                    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                        <Text style={styles.message}>Faça parte da comunidade Shibata!</Text>
                    </Animatable.View>
                    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                        <Text style={styles.title}>Cadastre-se!</Text>
                        <TextInput
                            placeholder='Nome/Sobrenome'
                            style={styles.input}
                            placeholderTextColor="#FFF"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                            secureTextEntry
                            placeholderTextColor="#FFF"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder='Telefone'
                            style={styles.input}
                            placeholderTextColor="#FFF"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder='Senha'
                            style={styles.input}
                            secureTextEntry
                            placeholderTextColor="#FFF"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            placeholder='Confirmar senha'
                            style={styles.input}
                            secureTextEntry
                            placeholderTextColor="#FFF"
                            underlineColorAndroid="transparent"
                        />
                        <TouchableOpacity style={styles.button} onPress={handleAcessarPress}>
                            <Text style={styles.buttonText}> Criar Conta </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegister} onPress={handleEntradaPress}>
                            <Text style={styles.registerText}>Já tem uma conta? Entre !</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                    {/* Modal para exibir a mensagem de login bem-sucedido */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isModalVisible}
                        onRequestClose={closeModal} // Necessário para Android
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalText}> Conta criada com sucesso!</Text>
                                <Pressable style={styles.modalButton} onPress={closeModal}>
                                    <Text style={styles.modalButtonText}>Fechar</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#034EA1",
        marginTop: 8,
    },
    containerForm: {
        backgroundColor: "#034EA1",
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%"
    },
    title: {
        fontSize: 20,
        marginTop: 30,
        color: "#fff",
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: "#fff",
    },
    button: {
        backgroundColor: '#fff',
        width: '60%',
        borderRadius: 50,
        paddingVertical: 11,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: "#034EA1",
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
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
        fontFamily: 'montserrat',
    },
    modalButton: {
        backgroundColor: '#034EA1',
        borderRadius: 20,
        padding: 12,
        marginTop: 10,
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: 'montserrat',
        fontWeight: 'bold',
    },
});
