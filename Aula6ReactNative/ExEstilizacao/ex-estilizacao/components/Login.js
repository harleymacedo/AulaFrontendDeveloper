import {View, Text, Image, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native'

export default function Login () {
    return (
        <View style={styles.containerLogin}>
            <Text style={styles.texto1} >Login no App</Text>
            <Button 
                title='Cadastrar agora' 
                style={styles.buttonCadastro} 
            />
            <View>
                <TextInput placeholder='Email' style={styles.caixaEmail} />
                <TextInput placeholder='Senha' style={styles.caixaEmail} />
            </View>
            <TouchableOpacity style={styles.buttonCadastro}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerLogin: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 400,
        width: 300,
        backgroundColor: '#d2a679',
        borderRadius: 8,
    },
    texto1: {
        fontSize: 24,
        fontFamily: 'Verdana',
        fontWeight: '800',
        color: '#939',
    },
    buttonCadastro: {
        backgroundColor: 'green',
        borderRadius: 4,
    },
    caixaEmail: {
        backgroundColor: 'white',
        borderRadius: 4,
        fontSize: 22,
        width: 200,
        margin: 5,
    }
})
