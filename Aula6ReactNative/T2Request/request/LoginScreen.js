import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'

export default LoginScreen = ({navigation}) => {

    const irParaHome = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View>
            <Text>Sistema de Busca de Atletas</Text>
            <TouchableOpacity onPress={irParaHome} >
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}