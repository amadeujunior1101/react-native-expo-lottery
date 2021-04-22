import React, { } from "react";
import { View, Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons/";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    createDrawerNavigator, DrawerContentComponentProps,
} from '@react-navigation/drawer';
import Game from "./Screens/Game";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import ResetPassword from "./Screens/ResetPassword";
import Home from "./Screens/Home";
import ButtonGame from "./Components/ButtonGame";
import CustomDrawerContent from "./Components/Cart";

import Header from "./Components/Header"

const StackNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function NavStack() {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="Login" component={Login} />
//             <Stack.Screen name="Game" component={Game} options={{ headerTitle: () => <Header />, headerStyle: { height: 70 } }} />
//             <Stack.Screen name="Register" component={Register} />
//             <Stack.Screen name="ResetPassword" component={ResetPassword} />
//         </Stack.Navigator>
//     );
// }

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

interface DrawerType {
    navigation: {
        openDrawer: Function,
        toggleDrawer: Function
    }
}

function NavDrawer(navigation: DrawerContentComponentProps) {
    return (
        // <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} drawerPosition="right" drawerStyle={{ width: "70%" }}>
            <Drawer.Screen name="Game" component={Game} {...navigation} />
        </Drawer.Navigator>
    );
}

function AppStack() {
    return (
        <StackNavigation.Navigator
            initialRouteName="Login"
            screenOptions={{}}>
            <StackNavigation.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <StackNavigation.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <StackNavigation.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
            <StackNavigation.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
        </StackNavigation.Navigator>
    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
}

export default Routes;
