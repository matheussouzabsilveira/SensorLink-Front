import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  campoText: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 16,
    width: '70%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
  },
  button: {
    backgroundColor: '#fff',
    height: 50,
    width: '70%',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: '#1780B6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginBtn: {
    width: '70%',
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  loginText: {
    color: 'blue',
    textDecorationStyle: 'solid',
    textDecorationColor: "blue",
    textDecorationLine: "underline",
    fontWeight: 'bold',
  }
});

export default styles;