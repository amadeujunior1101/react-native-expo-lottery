import React from "react";
import { TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

import { useNavigation, CommonActions } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    TextLogoTitle,
    ViewLineLogo,
    BoxLogo,
    ViewBoxIcons,
    ViewBoxCartIcon,
    TextNumberCartItem,
} from "./style";

import { DrawerNavigation, ArrayObjects } from "./types"

function Header(props: DrawerNavigation) {

    const result = useSelector((state: ArrayObjects) => state.cart);

    const navigation = useNavigation();
    return (
        <BoxLogo>

            <TouchableOpacity onPress={() => alert("Home")}>
                <TextLogoTitle>TGL</TextLogoTitle>
                <ViewLineLogo />
            </TouchableOpacity>

            <ViewBoxIcons>
                {
                    props.state === true ?
                        <ViewBoxCartIcon>
                            <TouchableOpacity onPress={() => props.navigation.openDrawer()} >
                                <MaterialCommunityIcons
                                    name={"cart-minus"}
                                    size={35}
                                    color={"#B5C401"}
                                    style={{}}
                                />
                            </TouchableOpacity>
                            {/* <TextNumberCartItem>{result.length}</TextNumberCartItem> */}
                        </ViewBoxCartIcon>
                        :
                        <>
                        </>
                }
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

                        style={{ marginLeft: 30 }}
                    />
                </TouchableOpacity>
            </ViewBoxIcons>

        </BoxLogo>
    )
}

export default Header