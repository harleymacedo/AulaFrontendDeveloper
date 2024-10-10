import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './components/LoginScreen'
import HomeScreen from './components/HomeScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                />

                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                />

            </Stack.Navigator>
            
        </NavigationContainer>
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
