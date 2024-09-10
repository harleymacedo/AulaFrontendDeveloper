import { StyleSheet, SafeAreaView, Text, Image } from 'react-native'
import Login from './components/Login'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.texto1} >Grupos de Estudo</Text>
            <Image source={require('./assets/negocios-100.png')} />
            <Login />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee6ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto1: {
        fontSize: 32,
        fontFamily: 'Tahoma',
        color: '#381',
        marginBottom: 20,
        fontWeight: '800',
    }
});
