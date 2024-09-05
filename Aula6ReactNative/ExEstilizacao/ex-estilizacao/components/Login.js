import {View, Text, Alert, TouchableOpacity, Button, StyleSheet, TextInput} from 'react-native'
import {useState} from 'react'

export default function Login () {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function atualizarEmail (value) {
        setEmail(value)
        console.log(email)
    }

    function atualizarSenha (value) {
        setSenha(value)
    }

    function verificarLogin () {
        if (email === 'harley.ip@gmail.com' && senha === '123456') {
            Alert.alert('Login autorizado')
        } else {
            Alert.alert('Email ou senha incorrentos')
        }
    }

    return (
        <View style={styles.containerLogin}>
            <Text style={styles.texto1} >Login no App</Text>
            <Button 
                title='Cadastrar agora'                
            />
            <View>
                <TextInput 
                    placeholder='Email' 
                    style={styles.caixaEmailSenha} 
                    onChangeText={atualizarEmail}
                />
                <TextInput 
                    placeholder='Senha' 
                    style={styles.caixaEmailSenha} 
                    secureTextEntry={true}
                    onChangeText={atualizarSenha}
                />
            </View>
            <TouchableOpacity style={styles.buttonCadastro}>
                <Text 
                    style={{color: 'white', textAlign: 'center', fontSize: 22}}
                    onPress={verificarLogin}
                >
                    Entrar
                </Text>
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
    caixaEmailSenha: {
        backgroundColor: 'white',
        borderRadius: 4,
        fontSize: 22,
        width: 200,
        margin: 5,
    },
    buttonCadastro: {
        backgroundColor: '#4d94ff',
        borderRadius: 4,
        height: 30,
        width: 96,
        color: 'white',        
    },
})
