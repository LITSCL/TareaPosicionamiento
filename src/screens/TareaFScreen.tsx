import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaFScreen: () => JSX.Element = () => {
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
    justifyContent: "space-between",
    backgroundColor: "#28425B"
  },
  cajaMorada: {
    flex: 1,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6"
  },
  cajaNaranja: {
    flex: 1,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B"
  },
  cajaAzul: {
    flex: 2,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9"
  }
});