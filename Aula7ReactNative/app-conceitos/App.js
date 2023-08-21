import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro App</Text>
      <TextInput style={styles.input1} />
      <Button
        onPress={()=>{}}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: {
    backgroundColor: '#889977',
    width: 200,
    height: 40
  },
  botao1: {
    color: '#2196F3',
    width: 100,
    height: 40
  }
});
