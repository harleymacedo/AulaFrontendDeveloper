import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
        <Text style={styles.text}>Digite seu e-mail:</Text>
        <TextInput
          style={styles.text}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.text}>Digite sua senha:</Text>
        <TextInput
          style={styles.text}
          placeholder="Senha"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
})