import { StyleSheet, Text, View, Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './screens/Home'
import GrupoEstudo from './screens/GrupoEstudo'
import Habilidades from './screens/Habilidades'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={
                        { title: "Home", headerShown: true }
                    }
                />

                <Stack.Screen
                    name="GrupoEstudo"
                    component={GrupoEstudo}
                    options={
                        { title: "GrupoEstudo", headerShown: true }
                    }
                />

                <Stack.Screen
                    name="Habilidades"
                    component={Habilidades}
                    options={
                        { title: "Habilidades", headerShown: true }
                    }
                />

            </Stack.Navigator>

        </NavigationContainer>

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
