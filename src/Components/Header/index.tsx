import React from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
    TextLogoTitle,
    ViewLineLogo,
    BoxLogo,
    ViewBoxIcons,
} from "./style";

function Header() {
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
                    onPress={() => alert("Log Out")}
                    size={35}
                    color={"#C1C1C1"}
                // style={{ position: "absolute", marginTop: 25, right: 20 }}
                />
            </ViewBoxIcons>

        </BoxLogo>
    )
}

export default Header