import React, { } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Game from "./Screens/Game";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ResetPassword from "./Screens/ResetPassword";

import Header from "./Components/Header"

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

// const navigationRef = React.useRef<NavigationContainerRef>(null);
// const sStackNavigation = createStackNavigator<RootStackParamList>();
const StackNavigation = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator
                initialRouteName="Game"
                screenOptions={{}}>
                <StackNavigation.Screen name="Game" component={Game} options={{ headerTitle: () => <Header />, headerStyle: { height: 70 } }} />
                <StackNavigation.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <StackNavigation.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <StackNavigation.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Routes;