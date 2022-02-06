import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted"/>

      <Text style={styles.title}>Meu primeiro App Nativo!</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Criando aplicações com React Native</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    marginBottom: 24
  },
  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 3
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});
