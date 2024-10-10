
import {
    View,
    TextInput,
    Text,
    Button,
    Alert,
    Switch,
    ScrollView
} from 'react-native'
import { useState } from 'react'

const BuscaFrete = (props) => {

    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [frete, setFrete] = useState(0)
    const [isEnabled, setIsEnabled] = useState(false)
    const [corFundo, setCorFundo] = useState('#fff')
    const [valueSwitch, setValueSwitch] = useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [corScroll, setCorScroll] = useState('#fff')

    const atualizarCep = (value) => {
        setCep(value)
    }

    const exibirMensagem = () => {
        Alert.alert('Até agora temos o cep:' + cep)
    }

    const mudarTema = () => {
        if (valueSwitch) {
            setCorFundo('#681')
            valueSwitch(false)
        } else {
            setCorFundo('#fff')
            setSwitchCorFundo(true)
        }
    }

    const mudarCorScroll = () => {
        setCorScroll('#491')
    }

    return (
        <View style={{backgroundColor: corFundo}}>
            <Text style={{ color: props.cor }}>Busca de frete</Text>
            <TextInput placeholder='Digite o CEP' onChangeText={atualizarCep} />
            <Button title='Calcular' onPress={exibirMensagem} />
            <Text> Cep: {cep} </Text>
            <Text> Endereço: {endereco} </Text>
            <Text> Frete: {frete} </Text>
            <ScrollView style={{ height: 50, backgroundColor: corScroll }} onScroll={mudarCorScroll}>
                <Text>Texto 1</Text>
                <Text>Texto 2</Text>
                <Text>Texto 3</Text>
                <Text>Texto 4</Text>
                <Text>Texto 5</Text>
            </ScrollView>
            <Switch
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    )
}

export default BuscaFrete
