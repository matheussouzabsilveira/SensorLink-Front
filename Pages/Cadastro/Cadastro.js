import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './Styles'
import React from 'react'

const Cadastro = () => {
  return (
    <LinearGradient
    style={styles.container}
    colors={['#073A79','#2AB3EA']}
    >
      <Text>Cadastro</Text>
    </LinearGradient>
  )
}

export default Cadastro