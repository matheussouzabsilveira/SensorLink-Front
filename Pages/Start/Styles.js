import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    width: '70%',
    alignItems: 'center',
    borderRadius: 25,
  },
  buttonText: {
    color: '#1780B6',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default styles;