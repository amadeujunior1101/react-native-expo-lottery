import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants'
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import Routes from './src/Routes';
import { AuthProvider } from "./src/Contexts/auth";

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
          <NavigationContainer>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </NavigationContainer>
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

