
import React, { ReactNode } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Login";

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
                initialRouteName="Login"
                screenOptions={{}}>
                <StackNavigation.Screen name="Login" component={Login} options={{ headerShown: false }} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export default Routes;