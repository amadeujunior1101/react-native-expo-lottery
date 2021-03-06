import React, { useState, useEffect, useContext } from "react"
import { View, ScrollView, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-native-loading-spinner-overlay';
import AuthContext from '../../Contexts/auth';

import dayjs from 'dayjs';
import api from "../../Services/api";

import ButtonChooseBet from "../../Components/ButtonChooseBet";
import Header from "../../Components/Header";

import {
    Wrapper,
    TextTitle,
    TextSubTitle,
    ViewBoxButtonsChoose,
    ViewBetsScrollList,
    ViewListGames,
    ViewDivisorElement,
    ViewGameDescription,
    TextNumberList,
    TextInfos,
    TextType,
} from "./style";

import { Game, GameResults, NavigationType, ArrayObjects } from "./types";

function Home(navigation: NavigationType) {

    const { setMinimumBetAmount } = useContext(AuthContext);
    const result = useSelector((state: ArrayObjects) => state.cart);

    const [spinner, setSpinner] = useState(true)
    const [games, setGames] = useState<Game[]>([]);
    const [loadGames, setLoadGames] = useState(true)
    const [gamesResults, setGamesResults] = useState<GameResults[]>([]);
    const [itemsGamesResults, setItemsGamesResults] = useState<GameResults[]>([]);

    const [activeId, setActiveId] = useState(0)

    useEffect(() => {
        listGames()
        showBets()
    }, [result])

    function changeState(id: number, type: string) {
        if (activeId === id) {
            setActiveId(0)
            setGamesResults(itemsGamesResults)
        } else {
            setActiveId(id)
            setGamesResults(
                itemsGamesResults.filter(el => {
                    return el.type === type
                })
            )
        }
    }

    interface Item {
        id: number;
        type: string;
        color: string;
        description: string;
        max_number: number;
        range: number;
        price: number;
        min_cart_value: number;
    }

    async function listGames() {
        try {
            const listGames = await api.get("/list-games?page=1&limit=3");

            setGames(listGames.data.data.data)
            setLoadGames(false)

            let listNumbers: [Item] = listGames.data.data.data;

            setMinimumBetAmount(listNumbers[0].min_cart_value)
            setSpinner(false);

        } catch (error) {
            if (!error.response) {
                // return history.replace("/login")
            }
            setSpinner(false);
            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autentica????o"
            })
        }
    }

    async function showBets() {
        try {
            const bets = await api.get("/show-bet");

            setGamesResults(bets.data.data)
            setItemsGamesResults(bets.data.data)

        } catch (error) {
            if (!error.response) {
                // return history.replace("/login")
            }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autentica????o"
            })
        }
    }

    function formatDate(date: string) {
        return dayjs(date).locale('pt').format('DD-MM-YYYY')
    }

    return (
        <>
            <Header navigation={navigation.navigation} state={false} />
            <Wrapper>
                <TextTitle>Recent Games</TextTitle>
                <TextSubTitle>Filters</TextSubTitle>
                <ViewBoxButtonsChoose>
                    <ScrollView horizontal >
                        {
                            loadGames !== true &&
                            games.map((item, index, object) => {
                                index += 1;
                                return (
                                    <ButtonChooseBet
                                        key={item.type}
                                        item={item}
                                        id={index.toString()}
                                        func={(e: number) => changeState(e, item.type)}
                                        active={activeId}
                                    />
                                )
                            })
                        }
                    </ScrollView>
                </ViewBoxButtonsChoose>

                <ViewBetsScrollList>
                    <Spinner
                        visible={spinner}
                        textContent={'Loading...'}
                    />
                    <ScrollView style={{ marginBottom: 1 }}>
                        {
                            gamesResults.length > 0 ?
                                gamesResults.map((item, index: number) => {
                                    return (
                                        <ViewListGames key={index}>
                                            <ViewDivisorElement color={item.color}>
                                            </ViewDivisorElement>
                                            <ViewGameDescription>
                                                <TextNumberList>{[(item.numbers)].join(",").replace(/,/g, ", ")}</TextNumberList>
                                                <View style={{ width: "100%", }}>
                                                    <TextInfos>{formatDate(item.date)} - (R$ {(item.price).toFixed(2)
                                                        .replace(".", ",")
                                                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                                                    })
                                                </TextInfos>
                                                    <TextType color={item.color}>{item.type}</TextType>
                                                </View>
                                            </ViewGameDescription>
                                        </ViewListGames>
                                    )
                                }) :
                                <>
                                    <Text>N??o h?? apostas realizadas!</Text>
                                </>
                        }
                    </ScrollView>
                </ViewBetsScrollList>

            </Wrapper>
        </>
    )
}

export default Home;