import { View, Text } from 'react-native'
import React, { use } from 'react'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Home() {
    const [user, setUser] = useState(null);
    const URL = 'https://sensor-link-back-b8df.vercel.app'
    useEffect(() => {
    const fetchUserData = async () => {
        try{
            const user = await AsyncStorage.getItem('user');
            const parsedUser = JSON.parse(user);
            console.log(user);
            setUser(parsedUser);
        }catch(error){
            console.error(error);
        }
    };
    fetchUserData();
        }, []);
  return (
    <View>
        <Text>Bem vindo, {user ? user.nome : 'Carregando...'}</Text>
  </View>
  )
}