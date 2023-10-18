import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'
import { useState } from 'react'
import axios from 'axios'


export default HomeScreen = ({navigation}) => {

    const [textoBusca, setTextoBusca] = useState('')
    const [resultado, setResultado] = useState([])

    const atualizarTexto = (value) => {
        setTextoBusca(value.toLowerCase())
    } 

    const buscarAtletas = async () => {
        try {
            const url = 'https://pokeapi.co/api/v2/pokemon/' + textoBusca
            console.log(url)
            const resultado = await axios.get(url)
            console.log(resultado.data.abilities)
            setResultado(resultado.data.abilities)
        } catch (error) {
            console.log(error.message)
            Alert.alert('Erro durante a busca')
        }
    }

    return (
        <View>
            <Text>Busca de Pokemon</Text>
            <TextInput 
                placeholder='Digite o nome do pokemon' 
                onChangeText={atualizarTexto}
            />
            <TouchableOpacity onPress={ buscarAtletas }>
                <Text>Buscar</Text>
            </TouchableOpacity>
            <View>
                {resultado.map( (pokemonAtual) => {
                    return (
                        <Text key={pokemonAtual.ability.name}>
                            Habilidade: {pokemonAtual.ability.name}
                        </Text>
                    )
                } )}
            </View>
        </View>
    )
}