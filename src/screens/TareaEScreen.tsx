import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaEScreen: () => JSX.Element = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaAzul}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#28425B"
  },
  cajaMorada: {
    width: 100,
    height: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6"
  },
  cajaNaranja: {
    width: 100,
    height: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B"
  },
  cajaAzul: {
    width: 100,
    height: "100%",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9"
  }
});