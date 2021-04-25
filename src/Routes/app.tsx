import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/Login";
import Register from "../Screens/Register";
import ResetPassword from "../Screens/ResetPassword";

function GuestStack() {

    const GuestStackNavigation = createStackNavigator();

    return (
        <GuestStackNavigation.Navigator
            initialRouteName="Login"
            screenOptions={{}}>
            <GuestStackNavigation.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <GuestStackNavigation.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <GuestStackNavigation.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
        </GuestStackNavigation.Navigator>
    )
}

export default GuestStack;