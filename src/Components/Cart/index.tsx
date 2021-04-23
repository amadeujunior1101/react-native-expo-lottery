import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import api from "../../Services/api";
import { removeCart } from "../../store/Carts/Carts.actions";
import {
    DrawerContentScrollView,
    DrawerContentComponentProps,

} from '@react-navigation/drawer';
import CartItem from "../CartItem"
import {
    TextInformationCartEmpty,
    ViewBoxCartTitle,
    TextCartTitle,
    TouchableOpacityIconClose,
    ViewTextInformationCartEmpty,
    ViewCartTotal,
    TextCartTotal,
    TextTotal,
    TextValueTotal,
    TouchableOpacitySaveButton,
    TextSaveButton,
} from "./style";

import { ArrayObjects, CartProp, Item, ItemCart } from "./types";

function Cart(props: DrawerContentComponentProps) {

    const result = useSelector((state: ArrayObjects) => state.cart);

    const dispatch: Dispatch = useDispatch();

    const [cart, setCart] = useState<CartProp[]>(result)
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([])
    const [selectedGame, setSelectedGame] = useState<Item>()

    useEffect(() => {
        // console.log("Result length current:", result.length)
        setCart(result)
    }, [cart])

    function cartValue() {
        let total;
        if (cart.length === 0) {
            total = 0

        } else {
            total = cart.reduce((accumulator: any, currentValue) => {
                return Number(accumulator) + currentValue.price;
            }, [0]);
        }

        return total
    }

    let itemCart: ArrayObjects = {
        cart: cart
    };

    async function saveCart() {
        // return console.log("Click save")
        if (cartValue() < Number(selectedGame?.min_cart_value)) {
            // SetVisibleInfoBet(true)
            // SetInfoBet(`O valor mínimo das apostas é ${Number(selectedGame?.min_cart_value).toFixed(2)
            //     .replace(".", ",")
            //     .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`)
            setTimeout(() => {
                // SetVisibleInfoBet(false)
            }, 4000);
        } else {
            // setVisibleLoading(true);
            try {
                const betSave = await api.post("/create-bet", {
                    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    games: itemCart.cart
                });

                if (betSave.status === 200) {
                    // SetVisibleInfoBet(false)
                    setCart([]);
                    // setVisibleLoading(false);

                    // SetVisibleInfoBet(true)
                    // SetInfoBet("Aposta registrada, você será redirecionado...")
                    setTimeout(() => {
                        // SetVisibleInfoBet(false)
                        // history.push("/");
                    }, 4000);

                }

            } catch (error) {
                // setVisibleLoading(false);

                if (!error.response) {
                    // return setErrorConnection(true);
                }

                return console.log({
                    status: error.response.statusText,
                    error: error.response.data.user_message,
                    message: "Falha na autenticação"
                })
            }
        }
    }

    function removeItemCart(indexRemove: number) {
        let newCart = cart.filter((item, index, object) => {
            return index !== indexRemove
        })
        dispatch(removeCart(indexRemove))
        setCart(newCart)
        // console.log("result no remove:", result)
    }

    return (
        <>
            <TouchableOpacityIconClose onPress={() => props.navigation.closeDrawer()}>
                <MaterialCommunityIcons
                    name={"close"}
                    size={35}
                    color={"#B5C401"}
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacityIconClose>
            {
                cart.length > 0 &&
                <ViewBoxCartTitle>
                    <MaterialCommunityIcons
                        name={"cart-minus"}
                        size={35}
                        color={"#B5C401"}
                        style={{ marginRight: 10 }}
                    />
                    <TextCartTitle>Cart</TextCartTitle>
                </ViewBoxCartTitle>
            }
            <DrawerContentScrollView {...props} style={{ width: "100%", }}>
                {/* <DrawerItemList {...props} /> */}

                {
                    cart.length === 0 ?
                        <ViewTextInformationCartEmpty>
                            <TextInformationCartEmpty>Sem itens no cart</TextInformationCartEmpty>
                        </ViewTextInformationCartEmpty>
                        :
                        <View style={{}}>

                            {
                                cart.map((item, index, object) => {
                                    return (
                                        <CartItem
                                            key={index}
                                            numbers={item.numbers}
                                            type={item.type}
                                            color={item.color}
                                            index={index}
                                            removeItemCart={(e: number) => { removeItemCart(e) }}
                                        />
                                    )
                                })
                            }
                        </View>
                }

            </DrawerContentScrollView>
            {
                cart.length > 0 &&
                <>
                    <ViewCartTotal>
                        <TextCartTotal>cart <TextTotal>TOTAL: </TextTotal>
                        </TextCartTotal>
                        <TextValueTotal>R$ {cartValue().toFixed(2)
                            .replace(".", ",")
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</TextValueTotal>
                    </ViewCartTotal>
                    <TouchableOpacitySaveButton onPress={() => { saveCart() }}>
                        <TextSaveButton>Save
                        </TextSaveButton>
                        <FontAwesome5
                            name={"arrow-right"}
                            size={35}
                            color={"#B5C401"}
                            style={{ marginLeft: 20 }}
                        />
                    </TouchableOpacitySaveButton>
                </>
            }
        </>
    );
}

export default Cart;
