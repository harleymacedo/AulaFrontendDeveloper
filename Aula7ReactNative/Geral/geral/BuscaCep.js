
import { View, TextInput, Text } from 'react-native'
import { useState } from 'react'

const BuscaCep = (props) => {

    const [cep, setCep] = useState('')

    return (
        <View>
            <Text>Busca Cep</Text>
            <TextInput placeholder='Cep' />
            <Text>Cep atual: { cep } </Text>
        </View>
    )
}

export default BuscaCep