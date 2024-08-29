import {View, Text, TouchableOpacity, Alert, Switch} from 'react-native'

const Configuracoes = (props) => {

    const mensagem = () => {
        Alert.alert('Usuário logado: ' + props.userName)
    }

    return (
        <View>
            <Text> Tela de Configurações </Text>
            <TouchableOpacity onPress={mensagem}> 
                <Text>Mensagem</Text> 
            </TouchableOpacity>
            <Switch />
        </View>
    )
}

export default Configuracoes