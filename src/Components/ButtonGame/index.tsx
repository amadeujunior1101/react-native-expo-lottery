import React from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { ViewButton } from "./style"

function ButtonGame() {
    return (
        <ViewButton>
            <FontAwesome name="dollar" color={"#FFF"} size={40} />
        </ViewButton >
    )
}

export default ButtonGame;