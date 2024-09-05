import { StyleSheet, SafeAreaView } from 'react-native'
import Login from './components/Login'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
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
    }
});
