import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import axios from 'axios'

export default function App() {

    const [cotacao, setCotacao] = useState(0.0)

    const buscar = async () => {
        const url = 'https://economia.awesomeapi.com.br/last/USD-BRL'
        const result = await axios.get(url)
        const dados = await result.data
        console.log(dados)
        setCotacao(dados.USDBRL.bid)
    }

    return (
        <View style={styles.container}>
            <Text>Meu primeiro App</Text>
            <Text>Busca cotação atual do dolar</Text>
            <TouchableOpacity style={styles.botao1} onPress={buscar}>
                <Text>Buscar</Text>
            </TouchableOpacity>
            <Text>Resultado: 1 dólar equivale a R$ {cotacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input1: {
        backgroundColor: '#889977',
        width: 200,
        height: 40
    },
    botao1: {
        color: '#2196F3',
        width: 100,
        height: 40,
        backgroundColor: '#998877'
    }
});
