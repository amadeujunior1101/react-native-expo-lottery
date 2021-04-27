import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import { Dispatch } from "redux";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import api from "../../Services/api";
import AuthContext from '../../Contexts/auth';
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

import { ArrayObjects, CartProp, ItemCart } from "./types";

function Cart(props: DrawerContentComponentProps) {

    const { minimumBetAmount } = useContext(AuthContext);

    const result = useSelector((state: ArrayObjects) => state.cart);

    const dispatch: Dispatch = useDispatch();

    const [cart, setCart] = useState<CartProp[]>(result)
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([])
    const [spinner, setSpinner] = useState(false);


    useEffect(() => {
        // console.log("Result length current:", result.length)
        setCart(result)
    }, [cart])

    function cartValue() {
        let total;
        if (result.length === 0) {
            total = 0

        } else {
            total = result.reduce((accumulator: any, currentValue) => {
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
        if (cartValue() < Number(minimumBetAmount)) {

            // SetVisibleInfoBet(true)
            Alert.alert("Atenção!", `O valor mínimo das apostas é ${Number(minimumBetAmount).toFixed(2)
                .replace(".", ",")
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`)
        } else {
            // setVisibleLoading(true);
            try {
                setSpinner(true)
                const betSave = await api.post("/create-bet", {
                    date: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    games: itemCart.cart
                });

                if (betSave.status === 200) {
                    // SetVisibleInfoBet(false)
                    setCart([]);
                    // setVisibleLoading(false);

                    // SetVisibleInfoBet(true)
                    setSpinner(false)
                    Alert.alert("Atenção!", "Aposta registrada, você foi redirecionado...");
                    props.navigation.navigate("Home");

                }

            } catch (error) {
                setSpinner(false)

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
        dispatch(removeCart(indexRemove))
    }

    // async function listGames() {
    //     try {
    //         const listGames = await api.get("/list-games?page=1&limit=3");

    //         let listNumbers: [Item] = listGames.data.data.data;

    //         setSelectedGame(listNumbers[0])

    //     } catch (error) {

    //         // if (!error.response) {
    //         //     return history.replace("/login")
    //         // }
    //         return console.log({
    //             status: error.response.statusText,
    //             error: error.response.data.user_message,
    //             message: "Falha na autenticação"
    //         })
    //     }
    // }

    return (
        <>
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
            // textStyle={}
            />
            <TouchableOpacityIconClose onPress={() => props.navigation.closeDrawer()}>
                <MaterialCommunityIcons
                    name={"close"}
                    size={35}
                    color={"#B5C401"}
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacityIconClose>
            {
                result.length > 0 &&
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
                    result.length === 0 ?
                        <ViewTextInformationCartEmpty>
                            <TextInformationCartEmpty>Sem itens no cart</TextInformationCartEmpty>
                        </ViewTextInformationCartEmpty>
                        :
                        <View style={{}}>

                            {
                                result.map((item, index, object) => {
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
                result.length > 0 &&
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
