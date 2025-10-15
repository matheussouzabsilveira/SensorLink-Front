import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Pages/Cadastro/Cadastro';
import Start from './Pages/Start/Start';
import Login from './Pages/Login/Login';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
         initialRouteName='Start'>
            <Stack.Screen name='Start' component={Start}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
