import { View, Text, StyleSheet, Image,TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Vibration } from 'react-native'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './Styles'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erroEmail, setErroEmail] = useState(false)
  const [erroSenha, setErroSenha] = useState(false)
  const [usuariosList, setUsuariosList] = useState([])
  const URL = 'https://sensor-link-back-b8df.vercel.app'
  const usuarios = async () => {
    try {
      const response = await fetch(`${URL}/usuarios`);
      const data = await response.json();
      setUsuariosList(data.data)
      if(!response.ok) {
        throw new Error('Erro ao buscar usuarios');
      }
      return data;
    }catch (error) {
      console.error(error);
    }
  }
  
  const Logar = ()=>{
    if(email === "" || senha === ""){
      setErroEmail(true)
      setErroSenha(true)
      Vibration.vibrate(500)
      return
    }
    const loginValido = usuariosList.find((usuario)=>{
      if(usuario.email === email && usuario.senha === senha){
        return true
      }
    })
    if(loginValido){
      const idUsuario = usuariosList.find((usuario)=>{
        if(usuario.email === email && usuario.senha === senha){
          return usuario
        }
      })
      AsyncStorage.setItem('user', JSON.stringify(idUsuario))
      setErroEmail(false)
      setErroSenha(false)
      navigation.navigate('Home')
    } else {
      setErroEmail(true)
      setErroSenha(true)
      Vibration.vibrate(500)
    }
  }

  useEffect(()=>{
    usuarios()
  },[])
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient
    style={styles.container}
    colors={['#073A79','#2AB3EA']}
    >
      <Image style={styles.logo} source={require('../../assets/logo1.png')} />
      <TextInput
      style={[styles.campoText, erroEmail && styles.onErro]}
      placeholder="Email"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={email}
      onChangeText={setEmail}>
      </TextInput>
      <TextInput
      style={[styles.campoText, erroSenha && styles.onErro]}
      placeholder="Senha"
      secureTextEntry={true}
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={senha}
      onChangeText={setSenha}>
      </TextInput>
      <View  style={styles.loginBtn}>
        <Text onPress={() => navigation.navigate('Cadastro')} style={styles.loginText}>Criar Conta</Text>
      </View>
      <TouchableOpacity
        onPress={Logar}
       style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default Login