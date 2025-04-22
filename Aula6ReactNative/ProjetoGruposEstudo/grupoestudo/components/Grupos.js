import { View, Text, StyleSheet, Alert } from 'react-native'
import { useState, useEffect } from 'react'


export default function Grupos() {

  useEffect(function () {
    obterGrupos()
  }, [])

  async function obterGrupos () {
    try {
      const response = await fetch('https://gruposdeestudobackend.vercel.app/grupo')
      const data = await response.json()
      setGrupos(data)
    } catch (error) {
      setMensagemErro('Erro ao obter os grupos')
    }
  }

  const [grupos, setGrupos] = useState([])
  const [mensagem, setMensagem] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Grupos</Text>
      <Text style={styles.text}>Lista de grupos</Text>
      {mensagem && <Text>{mensagem}</Text>}
      {grupos.length === 0 && <Text style={styles.text}>Nenhum grupo encontrado</Text>}
      {grupos.map((grupo) => (
        <View key={grupo._id} style={styles.container}>
          <Text style={styles.text}>{grupo.nome}</Text>
          <Text style={styles.text}>{grupo.curso}</Text>
        </View>
      ))}
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