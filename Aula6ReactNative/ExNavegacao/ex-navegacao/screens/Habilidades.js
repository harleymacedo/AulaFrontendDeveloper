import {View, Text} from 'react-native'


export default function Habilidades ({navigate, route}) {
    return (
        <View>
            <Text>Tela de Habilidades</Text>
            <Text>Usuário: {route.params.usuario}</Text>
        </View>
    )
}

