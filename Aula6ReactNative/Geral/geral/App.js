import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BuscaCep from './BuscaCep';

export default function App() {

    return (
        <View style={styles.container}>
            <Text>IFCE Campus Crato</Text>
            <Text>Projeto de Sistemas Web 1, N2</Text>
            <BuscaCep />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
