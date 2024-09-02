import {Button, SafeAreaView, Text} from 'react-native'


export default function Home ({navigation}) {

    function irParaHabilidades () {
        navigation.navigate('Habilidades')
    }

    function irParaGrupoEstudo () {
        navigation.navigate('GrupoEstudo')
    }

    return (
        <SafeAreaView>
            <Text>Tela Inicial</Text>
            <Button title='Habilidades' onPress={irParaHabilidades}></Button>
            <Button title='Grupos de estudo' onPress={irParaGrupoEstudo} ></Button>
        </SafeAreaView>
    )
}