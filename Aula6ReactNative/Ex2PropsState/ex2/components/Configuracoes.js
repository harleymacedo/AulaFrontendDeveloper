import {View, Text, TouchableOpacity, Alert, Switch, StyleSheet} from 'react-native'

const Configuracoes = (props) => {

    const mensagem = () => {
        Alert.alert('Usuário logado: ' + props.userName)
    }

    return (
        <View>
            <Text style={{'color': props.cor, fontSize: props.tamanho}}>
                Tela de Configurações 
            </Text>
            <TouchableOpacity onPress={mensagem}> 
                <Text>Mensagem</Text> 
            </TouchableOpacity>
            <Switch />
        </View>
    )
}

export default Configuracoes

const styles = StyleSheet.create({
    texto1: {
        fontSize: 22,
        fontFamily: 'Verdana',
    }
})