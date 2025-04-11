import { View, Text, StyleSheet } from 'react-native'

export default function Alunos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Alunos</Text>
      <Text style={styles.text}>Lista de alunos</Text>
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