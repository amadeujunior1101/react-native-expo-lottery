import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { useFonts } from 'expo-font';
import Routes from './src/Routes';

export default function App() {
  // const [loaded] = useFonts({
  //   Helvetica: require('./assets/fonts/Pragmatica-ExtraLight.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }
  
  return (
    <View style={styles.container}>
      <Routes />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
