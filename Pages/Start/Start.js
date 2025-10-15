import { View, Text,TouchableOpacity, Image,StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './Styles'
import React from 'react'

export default function Start({navigation}) {
  return (
    <LinearGradient style={styles.container}
    colors={['#073A79','#2AB3EA']}
    >
        <Image style={styles.logo} source={require('../../assets/logo1.png')} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')}
       style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}