import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import MapaBusca from './components/MapaBusca'
import Evento from './components/Evento'
import Grafico from './components/Grafico'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Exemplo de Componentes de Terceiros</Text>
            <MapaBusca />
            <Evento />
            <Grafico /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
