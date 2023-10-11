
import { 
    View, 
    TextInput, 
    Text,
    Button,
    Alert
} from 'react-native'
import { useState } from 'react'

const BuscaFrete = (props) => {

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [frete, setFrete] = useState(0)

    const atualizarCep = (value) => {
        setCep(value)
    }

    const exibirMensagem = () => {
        Alert.alert('Até agora temos o frete:' + cep)
    }

    return (
        <View>
            <Text>Busca de frete</Text>
            <TextInput placeholder='Digite o CEP' onChangeText={ atualizarCep } />
            <Button title='Calcular' onPress={ () => { exibirMensagem() }} />
            <Text> Cep: {cep} </Text>
            <Text> Endereço: {endereco} </Text>
            <Text> Frete: {frete} </Text>
        </View>
    )
}

export default BuscaFrete
