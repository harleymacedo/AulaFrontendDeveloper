import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Configuracoes from './components/Configuracoes';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>App 2 - Aula React Native</Text>
            <Configuracoes userName='Harley' />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
