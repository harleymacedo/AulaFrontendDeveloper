import { View, Text, StyleSheet } from 'react-native'
import DateTimePicker from 'react-native-ui-datepicker'
import { useState } from 'react'
import dayjs from 'dayjs'

export default function Evento() {

    const [data, setData] = useState(dayjs());

    const atualizarData = (params) => {
        setDate(params.date)
    }
    
    return (
        <View>
            <Text>Novo evento</Text>
            <DateTimePicker
                mode="single"
                date={data}
                onChange={atualizarData}
            />
        </View>
    )
}
