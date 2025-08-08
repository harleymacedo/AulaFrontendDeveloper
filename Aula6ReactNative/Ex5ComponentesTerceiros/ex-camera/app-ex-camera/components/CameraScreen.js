import {View, Text, Button} from 'react-native'

export default function CameraScreen() {
    return (
        <View>
            <Text>Minha câmera básica</Text>
            <Text>Componente usado: React Native Camera</Text>
            <Button
                title='Registrar'
                onPress={console.log('Teste da camera')}
            />
        </View>
    )
}