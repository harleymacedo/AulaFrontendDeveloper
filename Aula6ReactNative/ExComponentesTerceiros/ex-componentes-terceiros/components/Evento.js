import { View, Text, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function Evento() {

    const [date, setDate] = useState(dayjs());
    
    return (
        <View>
            <Text>Novo evento</Text>
            <DateTimePicker
                mode="single"
                date={date}
                onChange={(params) => setDate(params.date)}
            />
        </View>
    )
}