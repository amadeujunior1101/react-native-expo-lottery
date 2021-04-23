import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { ViewListGames, ViewGameIcon, ViewDivisorElement, ViewGameDescription, TextNumberList, TextType, ViewTypeTrash } from "./style"

interface Props {
    removeItemCart: Function;
    index: number;
    numbers: Array<String>;
    type: string;
    color: string;
}

function CartItem(props: Props) {
    return (
        <ViewListGames >
            {/* <ViewGameIcon>
                <i className="fas fa-trash-alt" style={{ cursor: "pointer", color: "#888888" }} onClick={() => props.removeItemCart(props.index)}></i>
            </ViewGameIcon> */}
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