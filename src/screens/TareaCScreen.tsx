import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaCScreen: () => JSX.Element = () => {
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#28425B"
  },
  cajaMorada: {
    width: 100,
    height: 100,
    alignSelf: "flex-end",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#5856D6"
  },
  cajaNaranja: {
    width: 100,
    height: 100,
    alignSelf: "flex-start",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#F0A23B"
  },
  cajaAzul: {
    width: 100,
    height: 100,
    alignSelf: "center",
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "#28C4D9"
  }
});