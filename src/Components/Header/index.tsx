import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useNavigation, CommonActions } from '@react-navigation/native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    TextLogoTitle,
    ViewLineLogo,
    BoxLogo,
    ViewBoxIcons,
} from "./style";

// import { NavigationType } from "./types"

function Header() {
    const navigation = useNavigation();
    return (
        <BoxLogo>
            <TouchableOpacity onPress={() => alert("Home")}>
                <TextLogoTitle>TGL</TextLogoTitle>
                <ViewLineLogo />
            </TouchableOpacity>

            <ViewBoxIcons>
                <MaterialCommunityIcons
                    name={"cart-minus"}
                    onPress={() => alert("Cart")}
                    size={35}
                    color={"#B5C401"}
                    style={{ marginRight: 30 }}
                />
                <MaterialIcons
                    name={"logout"}
                    size={35}
                    color={"#C1C1C1"}
                    // onPress={() => navigation.navigate("Login")}
                    onPress={() => navigation.dispatch(
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
                    )}

                // style={{ position: "absolute", marginTop: 25, right: 20 }}
                />
            </ViewBoxIcons>

        </BoxLogo>
    )
}

export default Header