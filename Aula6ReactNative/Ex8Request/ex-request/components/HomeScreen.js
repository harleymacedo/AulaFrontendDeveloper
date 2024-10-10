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
        <View style={styles.container} >
            <Text style={styles.texto1} >Busca de Pokemon</Text>
            <TextInput 
                placeholder='Digite o nome do pokemon' 
                onChangeText={atualizarTexto}
                style={styles.caixa1}
            />
            <TouchableOpacity onPress={ buscarAtletas } >
                <Text style={styles.botao1} >Buscar</Text>
            </TouchableOpacity>
            <View>
                {resultado.map( (pokemonAtual) => {
                    return (
                        <Text key={pokemonAtual.ability.name} style={styles.textoResultado}>
                            Habilidade: {pokemonAtual.ability.name}
                        </Text>
                    )
                } )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {     
        flex: 1,   
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    texto1: {
        fontSize: 18,
        color: '#281',
        margin: 40,
    },
    caixa1: {
        backgroundColor: '#fff',
        width: 240,
        height: 40,
        borderRadius: 8,
        margin: 20,
    },
    botao1: {
        color: '#985',
        fontSize: 20,        
    },
    textoResultado: {
        margin: 10,
        color: '#a49',
    }
})