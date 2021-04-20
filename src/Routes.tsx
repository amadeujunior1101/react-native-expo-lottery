import React, { } from "react";
import { View, Text, Button } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons/";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Game from "./Screens/Game";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ResetPassword from "./Screens/ResetPassword";
import ButtonGame from "./Components/ButtonGame";

import Header from "./Components/Header"

type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
    Feed: { sort: 'latest' | 'top' } | undefined;
};

// const navigationRef = React.useRef<NavigationContainerRef>(null);
// const sStackNavigation = createStackNavigator<RootStackParamList>();
const StackNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <TabNavigation.Navigator
            initialRouteName="Game"
            tabBarOptions={{
                activeTintColor: '#B5C401',
                style: {
                    height: 70,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                labelStyle: { fontSize: 18, alignItems: "center", marginBottom: 5 },
                safeAreaInsets: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }
            }}>
            <TabNavigation.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-home-outline" color={color} size={30} style={{ marginTop: 10 }} />
                    ),
                }}
            />
            <TabNavigation.Screen
                name="Game"
                component={Game}
                options={{
                    tabBarLabel: '',
                    // headerTitle: () => <Header />, headerStyle: { height: 70 } ,
                    tabBarIcon: ({ color, size }) => (
                        <ButtonGame />
                    ),
                }}
            />
            <TabNavigation.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person-outline" color={color} size={30} style={{ marginTop: 10 }} />
                    ),
                }}
            />
        </TabNavigation.Navigator>
    )
}

function Home() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Go to Home"
                onPress={() => alert()}
            />
        </View>
    );
}

function Account() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Account!</Text>
            <Button
                title="Go to Account"
                onPress={() => alert()}
            />
        </View>
    );
}

function NestNavigation() {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator
                initialRouteName="BottomNavigation"
                screenOptions={{}}>
                <StackNavigation.Screen name="Login" component={Login} options={{ headerShown: false }} />
                {/* <StackNavigation.Screen name="Game" component={Game} options={{ headerTitle: () => <Header />, headerStyle: { height: 70 } }} />
                <StackNavigation.Screen name="Register" component={Register} options={{ headerShown: false }} />
                <StackNavigation.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} /> */}
                <StackNavigation.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerTitle: () => <Header />, headerStyle: { height: 70 } }} />

            </StackNavigation.Navigator>
        </NavigationContainer>
    )
}

const Routes = () => {
    return (
        <NestNavigation />
    );
}

export default Routes;