import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

export default function App() {
  const [bgColor, setBgColor] = useState("#ffffff");

  const mudarCor = () => {
    // Alterna entre duas cores
    setBgColor(bgColor === "#ffffff" ? "#4CAF50" : "#ffffff");
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Button title="Mudar cor de fundo" onPress={mudarCor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});