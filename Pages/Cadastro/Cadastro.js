import { View, Text, StyleSheet, Image,TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './Styles'
import React from 'react'

const Cadastro = ({navigation}) => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senha2, setSenha2] = useState("")
  const cadastrar = ()=>{

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient
    style={styles.container}
    colors={['#073A79','#2AB3EA']}
    >
      <Image style={styles.logo} source={require('../../assets/logo1.png')} />
      <TextInput
      style={styles.campoText}
      placeholder="Nome"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={nome}
      onChangeText={setNome}>
      </TextInput>
      <TextInput
      style={styles.campoText}
      placeholder="Email"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={email}
      onChangeText={setEmail}>
      </TextInput>
      <TextInput
      style={styles.campoText}
      placeholder="Senha"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={senha}
      onChangeText={setSenha}>
      </TextInput>
      <TextInput
      style={styles.campoText}
      placeholder="Confirmar Senha"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={senha2}
      onChangeText={setSenha2}>
      </TextInput>
      <View  style={styles.loginBtn}>
        <Text onPress={() => navigation.navigate('Login')} style={styles.loginText}>Fazer Login</Text>
      </View>
      <TouchableOpacity
        onPress={cadastrar}
       style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Cadastro