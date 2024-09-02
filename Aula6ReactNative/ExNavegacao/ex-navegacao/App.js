import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Ex Navegação</Text>
            <Button title='Grupos de estudo'></Button>
            <Button title='Mapa de habilidades'></Button>
            <Button title='Configurações'></Button>
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
