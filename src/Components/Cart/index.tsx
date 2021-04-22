import React from "react";
import { View, Text } from "react-native";
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,

} from '@react-navigation/drawer';

function Cart(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            {/* <DrawerItemList {...props} /> */}
            <View>
                <Text>Oi</Text>
            </View>
        </DrawerContentScrollView>
    );
}

export default Cart;
