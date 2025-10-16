import { View, Text, StyleSheet, Image,TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Vibration } from 'react-native'
import { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './Styles'
import React from 'react'

const Cadastro = ({navigation}) => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [senha2, setSenha2] = useState("")
  const [erroNome, setErroNome] = useState(false)
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
  const postUsuario = async () => {
    try {
      const response = await fetch(`${URL}/usuarios`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha
        }),
      });
      if(!response.ok) {
        throw new Error('Erro ao cadastrar usuario');
      }
      const data = await response.json();
      return data;      
    }catch (error) {
      console.error(error);
    }
  }
  const cadastrar = ()=>{
    let formularioValido = true
    if(nome === "" || nome == null){
      setErroNome(true)
      Vibration.vibrate()
      formularioValido = false
    }else{
      setErroNome(false)
    }
    if(email === "" || email == null){
      setErroEmail(true)
      Vibration.vibrate()
      formularioValido = false
    }else{
      setErroEmail(false)
    }

    usuariosList.map((item)=>{
      if(item.email === email){
        formularioValido = false
        setErroEmail(true)
        Vibration.vibrate()
      }
    })

    if(senha === "" || senha == null || senha !== senha2){
      setErroSenha(true)
      formularioValido = false
      Vibration.vibrate()
    }else{
      setErroSenha(false)
    }
     
    if(formularioValido){
      postUsuario()
      navigation.navigate('Login')
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
      style={[styles.campoText, erroNome && styles.onErro]}
      placeholder="Nome"
      placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
      value={nome}
      onChangeText={setNome}>
      </TextInput>
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
      <TextInput
      style={[styles.campoText, erroSenha && styles.onErro]}
      placeholder="Confirmar Senha"
      secureTextEntry={true}
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