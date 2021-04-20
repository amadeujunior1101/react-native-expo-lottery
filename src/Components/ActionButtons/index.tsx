import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import {
    ViewContainerButtons,
    ButtonActionGame,
    TextActionGame,
} from "./style";

interface FunctionButtons {
    completeGame: Function;
    clearGame: Function;
    addCart: Function;
}

function ActionButtons(props: FunctionButtons) {
    return (
        <ViewContainerButtons>
            <ButtonActionGame onPress={() => props.completeGame()}>
                <TextActionGame>Complete game</TextActionGame>
            </ButtonActionGame>
            <ButtonActionGame onPress={() => props.clearGame()}>
                <TextActionGame>Clear game</TextActionGame>
            </ButtonActionGame>
            <ButtonActionGame style={{ flexDirection: "row", backgroundColor: "#B5C401", alignItems: "center" }} onPress={() => props.addCart()}>
                <MaterialCommunityIcons
                    name={"cart-minus"}
                    onPress={() => alert("Cart")}
                    size={25}
                    color={"#FFF"}
                    style={{ marginLeft: 5, }}
                />
                <TextActionGame style={{ color: "#FFF" }}>Add to cart</TextActionGame>
            </ButtonActionGame>
        </ViewContainerButtons>
    )
}

export default ActionButtons;