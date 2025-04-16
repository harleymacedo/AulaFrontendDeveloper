import { View, Text, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'


export default function Grupos() {

  useEffect(function () {
    
  }, [])

  const [grupos, setGrupos] = useState([])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grupos</Text>
      <Text style={styles.text}>Lista de grupos</Text>
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