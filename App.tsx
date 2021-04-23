import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import Routes from './src/Routes';
import AppLoading from "expo-app-loading";

import store from "./src/store/store";
import { Provider } from "react-redux";

export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    "Roboto-Italic": require('./assets/fonts/Roboto-Italic.ttf'),
    "Helvetica": require('./assets/fonts/Pragmatica-ExtraLight.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Routes />
        </Provider>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});

