import { View, Text, StyleSheet, Image,TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './Styles'
import React from 'react'

const Cadastro = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
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
      value={nome}
      onChangeText={setNome}>
      </TextInput>
    </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Cadastro