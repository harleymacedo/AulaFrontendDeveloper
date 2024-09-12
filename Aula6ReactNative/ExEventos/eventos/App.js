import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView } from 'react-native'
import BuscaFrete from './components/BuscaFrete'

export default function App() {
    return (
        <SafeAreaView>
            <BuscaFrete cor='green' tipo="detalhado" />            
        </SafeAreaView>
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
