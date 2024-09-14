import { View, Text, StyleSheet } from 'react-native'
import Calendar from 'react-native-calendars'

export default function Evento() {
    return (
        <View>
            <Text>Novo evento</Text>
            <Calendar
                onDayPress={day => {
                    console.log('selected day', day);
                }}
            />
        </View>
    )
}