import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from './screens/Login'
import Pokemon from './screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={
                        { title: "Login", headerShown: true }
                    }
                />

                <Stack.Screen
                    name="Pokemon"
                    component={Pokemon}
                    options={
                        { title: "Pokemon", headerShown: true }
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
