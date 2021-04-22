import React from "react"
import { View, ScrollView, Text } from "react-native"
import { useEffect, useState } from "react";
import { useNavigation, CommonActions } from '@react-navigation/native';

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

import { Game, GameResults } from "./types";

function Home() {
    const navigation = useNavigation();

    const [openMenu, setOpenMenu] = useState(false);
    const [games, setGames] = useState<Game[]>([]);
    const [loadGames, setLoadGames] = useState(true)
    const [gamesResults, setGamesResults] = useState<GameResults[]>([]);
    const [itemsGamesResults, setItemsGamesResults] = useState<GameResults[]>([]);

    const [activeId, setActiveId] = useState(0)

    useEffect(() => {
        listGames()
        showBets()
    }, [])

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

    async function listGames() {
        try {
            const listGames = await api.get("/list-games?page=1&limit=3");

            setGames(listGames.data.data.data)
            setLoadGames(false)

        } catch (error) {
            if (!error.response) {
                // return history.replace("/login")
            }
            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
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
                message: "Falha na autenticação"
            })
        }
    }

    function formatDate(date: string) {
        return dayjs(date).locale('pt').format('DD-MM-YYYY')
    }

    return (
        <>
            <Header />
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
                                    <Text>Não há apostas realizadas!</Text>
                                </>
                        }
                    </ScrollView>
                </ViewBetsScrollList>
                {/* <Footer /> */}

            </Wrapper>
        </>
    )
}

export default Home;