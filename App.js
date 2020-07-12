import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/Pages/login'
import Register from './src/Pages/Register/Register1'

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Register />
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
