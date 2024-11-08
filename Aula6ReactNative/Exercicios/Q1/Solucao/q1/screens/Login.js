import {Button, View, Text} from 'react-native'

export default function Login ({navigation}) {

    function irParaPokemon () {
        navigation.navigate('Pokemon')
    }

    return (
        <View>
            <Text>Tela de Login</Text>
            <Button title='Pokemon' onPress={irParaPokemon}></Button>
        </View>
    )
}