import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sistema de Laboratórios</Text>
      <TextInput
        placeholder="Digite seu Nome"
      />
      <Switch />
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
});
