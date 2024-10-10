import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native'

export default LoginScreen = ({navigation}) => {

    const irParaHome = () => {
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.container} >
            <Text style={styles.texto1}>Sistema de Busca de Atletas</Text>
            <TouchableOpacity onPress={irParaHome} >
                <Text style={styles.botao1}>Entrar</Text>
            </TouchableOpacity>
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
    botao1: {
        color: '#985',
        fontSize: 20,        
    }
})