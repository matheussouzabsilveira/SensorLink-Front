import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Pages/Cadastro/Cadastro';
import Start from './Pages/Start/Start';

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
