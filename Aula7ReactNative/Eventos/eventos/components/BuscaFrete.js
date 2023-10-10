
import { 
    View, 
    TextInput, 
    Text,
    Button
} from 'react-native'

const BuscaFrete = (props) => {
    return (
        <View>
            <Text>Busca de frete</Text>
            <TextInput placeholder='Digite o CEP' />
            <Button value='Calcular' />
        </View>
    )
}

export default BuscaFrete