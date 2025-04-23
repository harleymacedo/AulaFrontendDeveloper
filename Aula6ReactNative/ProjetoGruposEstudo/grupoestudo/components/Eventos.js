import { View, Text, StyleSheet } from 'react-native'

export default function Eventos() {

    const [eventos, setEventos] = useState([])
    const [mensagem, setMensagem] = useState('')

    useEffect(function () {
        obterEventos()
    }, [])

    async function obterEventos() {
        try {
            const response = await fetch('https://gruposdeestudobackend.vercel.app/evento')
            const data = await response.json()
            setEventos(data)
        } catch (error) {
            setMensagemErro('Erro ao obter os eventos')
        }
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Eventos</Text>
            <Text style={styles.text}>Lista de eventos</Text>
            {mensagem && <Text>{mensagem}</Text>}
            {eventos.length === 0 && <Text style={styles.text}>Nenhum evento encontrado</Text>}
            {eventos.map((evento) => (
                <View key={evento._id} style={styles.container}>
                    <Text style={styles.text}>{evento.nome}</Text>
                    <Text style={styles.text}>{evento.data}</Text>
                </View>
            ))}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
})