import React from "react";
import { TouchableOpacity, View, Button, Text } from "react-native";

import { useNavigation, CommonActions } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    TextLogoTitle,
    ViewLineLogo,
    BoxLogo,
    ViewBoxIcons,

} from "./style";

import { DrawerNavigation } from "./types"

function Header(props: DrawerNavigation) {
    const navigation = useNavigation();
    return (
        <BoxLogo>

            <TouchableOpacity onPress={() => alert("Home")}>
                <TextLogoTitle>TGL</TextLogoTitle>
                <ViewLineLogo />
            </TouchableOpacity>

            <ViewBoxIcons>
                <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
                    <MaterialCommunityIcons
                        name={"cart-minus"}
                        size={35}
                        color={"#B5C401"}
                        style={{ marginRight: 30 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 1,
                        routes: [
                            { name: 'Login' },
                            // {
                            //     name: 'Profile',
                            //     params: { user: 'jane' },
                            // },
                        ],
                    })
                )}>
                    <MaterialIcons
                        name={"logout"}
                        size={35}
                        color={"#C1C1C1"}
                    // onPress={() => navigation.navigate("Login")}

                    // style={{ position: "absolute", marginTop: 25, right: 20 }}
                    />
                </TouchableOpacity>
            </ViewBoxIcons>

        </BoxLogo>
    )
}

export default Header