import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Logo from '../assets/logo.png'
import CustomInput from '../components/CustomInput';
import styles from '../styles/styles';
import app from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const auth = getAuth(app)
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const navigation = useNavigation()

  useEffect(() => {
    console.log(auth.currentUser)
    if(auth.currentUser)
      navigation.navigate('Listagem')
  }, (auth.currentUse))

  const setEmailInputValue = (value) => {
    setEmail(value)
  }

  const setSenhaInputValue = (value) => {
    setSenha(value)
  }

  const criarUsuario = () => {
    createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredentials) => {
      console.log(userCredentials)
    }).catch((err) => {
      console.error(err)
    })
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, senha)
    .then((userCredentials) => {
      console.log(userCredentials)
      navigation.navigate('Listagem')
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 100,
          height: 100
        }}
      />

      <CustomInput
        placeholder='E-mail'
        value={email} 
        funcao={setEmailInputValue}
      />

      <CustomInput
        placeholder='Senha'
        value={senha}
        funcao={setSenhaInputValue}
        isPassword={true}
      />

      <TouchableOpacity style={{ marginTop: 15 }} onPress={criarUsuario}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Criar Usuário</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginTop: 15 }} onPress={signIn}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

