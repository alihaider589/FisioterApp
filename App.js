import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Login from './src/Pages/login'
import Register from './src/Pages/Register/Register1'
import Coupen from './src/Pages/Drawerpages/Coupen'
import Invita from './src/Pages/Drawerpages/Invita'
import Social from './src/Pages/Drawerpages/Social e contatti'
import  Feedback from './src/Pages/Drawerpages/Feedback'
import Pagamenti from './src/Pages/Drawerpages/pagamenti'
import MioAccount from './src/Pages/Drawerpages/II mio account'

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Invita /> */}
      {/* <Register /> */}
      {/* <Coupen /> */}
      {/* <Social /> */}
      {/* <Feedback /> */}
      {/* <Pagamenti /> */}
      <MioAccount />
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
