import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

export default function () {
    return (
        <View>
            <Text>Mapa de Busca</Text>        
            <TextInput />
            <Button title='Buscar'></Button>
            <View>
                <MapView style={styles.map} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: 300,
        height: 300,
    },
})

