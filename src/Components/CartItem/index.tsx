import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, } from "@expo/vector-icons";
import { ViewListGames, ViewDivisorElement, ViewGameDescription, TextNumberList, TextType, ViewTypeTrash } from "./style"
import { Props } from "./types";

function CartItem(props: Props) {
    return (
        <ViewListGames >
            <ViewDivisorElement color={props.color} />
            <ViewGameDescription>
                <TextNumberList>{(props.numbers).join(", ")}</TextNumberList>
                <ViewTypeTrash>
                    <Text>27/11/2020 - (R$ 2,50)</Text>
                    <TouchableOpacity onPress={() => props.removeItemCart(props.index)} >
                        <MaterialCommunityIcons
                            name={"trash-can"}
                            size={20}
                            color={"#707070"}
                            style={{}}
                        />
                    </TouchableOpacity>
                </ViewTypeTrash>
                <TextType color={props.color}>{props.type}</TextType>
            </ViewGameDescription>
        </ViewListGames>
    )
}
export default CartItem;