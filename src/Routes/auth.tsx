import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons/";

import Game from "../Screens/Game";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import ResetPassword from "../Screens/ResetPassword";
import Home from "../Screens/Home";
import ButtonGame from "../Components/ButtonGame";
import Cart from "../Components/Cart";

function NavDrawer(navigation: DrawerContentComponentProps) {

    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={props => <Cart {...props} />} drawerPosition="right" drawerStyle={{ width: "80%" }}>
            <Drawer.Screen name="Game" component={Game} {...navigation} />
        </Drawer.Navigator>
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

function AppTabs() {

    const TabNavigation = createBottomTabNavigator();

    return (
        <TabNavigation.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#B5C401',
                style: {
                    height: 70,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                },
                labelStyle: { fontSize: 18, alignItems: "center", marginBottom: 5, fontStyle: "italic", fontFamily: "Helvetica" },
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
                    tabBarIcon: ({ color, size, focused }) => (
                        focused === true ?
                            <>
                                <View style={{ position: "absolute", top: 0, width: 50, height: 5, backgroundColor: "#B5C401", borderRadius: 20, }}></View>
                                <Ionicons name="md-home-outline" color={color} size={30} style={{ marginTop: 10 }} />
                            </>
                            :
                            <>
                                <Ionicons name="md-home-outline" color={color} size={30} style={{ marginTop: 10 }} />
                            </>
                    ),
                }}
            />
            <TabNavigation.Screen
                name="Game"
                component={NavDrawer}
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
                    tabBarIcon: ({ color, size, focused }) => (
                        focused === true ?
                            <>
                                <View style={{ position: "absolute", top: 0, width: 60, height: 5, backgroundColor: "#B5C401", borderRadius: 20, }}></View>
                                <Ionicons name="person-outline" color={color} size={30} style={{ marginTop: 10 }} />
                            </>
                            :
                            <>
                                <Ionicons name="person-outline" color={color} size={30} style={{ marginTop: 10 }} />
                            </>

                    ),
                }}
            />
        </TabNavigation.Navigator>
    )
}

function AuthStack() {

    const AuthStackNavigation = createStackNavigator();

    return (
        <AuthStackNavigation.Navigator
            initialRouteName="AppTabs"
            screenOptions={{}}>
            <AuthStackNavigation.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
        </AuthStackNavigation.Navigator>
    )
}

export default AuthStack;