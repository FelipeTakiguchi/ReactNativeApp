import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import styles from '../styles/styles';
import app from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

export default function Login() {
    const auth = getAuth(app)
    const [val, setValor] = useState()
    const [ref, setReferencia] = useState()
    const [inputData, setData] = useState()
    const navigation = useNavigation()

    const criarTransacao = async() => {
        const transaction = {
            data: inputData,
            valor: parseInt(val),
            referencia: ref
        }
        try {
            const response = await axios.post('http://localhost:3000/addTransacao', { ...transaction })
           
            navigation.navigate('Listagem');
        } catch (err) {
            console.log(err);
        }
    }

    const setValorInputValue = (value) => {
        setValor(value)
    }

    const setReferenciaInputValue = (value) => {
        setReferencia(value)
    }

    const setDataInputValue = (value) => {
        setData(value)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Criar Transação</Text>
            <CustomInput
                placeholder='Valor'
                value={val}
                funcao={setValorInputValue}
            />

            <CustomInput
                placeholder='Referência'
                value={ref}
                funcao={setReferenciaInputValue}
            />

            <CustomInput
                placeholder='Data'
                value={inputData}
                funcao={setDataInputValue}
            />

            <TouchableOpacity style={{ marginTop: 15 }} onPress={criarTransacao}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Criar Transação</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

