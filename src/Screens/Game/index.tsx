import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import ButtonChooseBet from "../../Components/ButtonChooseBet";
import BallBet from "../../Components/Ball"
import api from "../../Services/api";
import { GameType, Item, Cart } from "./types";
import ActionButtons from "../../Components/ActionButtons";

import {
    Wrapper,
    TextTypeGame,
    TextChooseGame,
    ViewButtonsChoose,
    TextDescriptionGame,
    ViewBoxBottomBar,
    ViewBottomBar,
    ViewContainerBalls,
} from "./style";

interface FunctionButtons {
    // completeGame: Function;
    clearGame: Function;
    // addCart: Function;
}

function Game() {
    const [games, setGames] = useState<GameType[]>([]);
    const [selectedGame, setSelectedGame] = useState<Item>();
    const [selectedBalls, setSelectedBalls] = useState<Array<number>>([]);
    const [loadGames, setLoadGames] = useState(true);
    const [visibleInfoValueQuantityBalls, SetVisibleInfoValueQuantityBalls] = useState(false);
    const [cart, setCart] = useState<Cart[]>([]);
    const [cartTemporary, setCartTemporary] = useState<Array<string>>([]);

    const [activeId, setActiveId] = useState(1);

    useEffect(() => {
        listGames()
    }, [])

    async function listGames() {
        try {
            const listGames = await api.get("/list-games?page=1&limit=3");

            setGames(listGames.data.data.data)
            let listNumbers: [Item] = listGames.data.data.data;

            let results = listNumbers.filter(el => {
                return el.type
            })

            changeState(1, results[0].type)
            setSelectedGame(listNumbers[0])

        } catch (error) {
            console.log(error)
            // if (!error.response) {
            //     return history.replace("/login")
            // }
            // return console.log({
            //     status: error.response.statusText,
            //     error: error.response.data.user_message,
            //     message: "Falha na autenticação"
            // })
        }
    }

    function selectedNumber(id: number) {

        let existBall = selectedBalls.some(function (item, index, object) {
            return item === id
        });

        if (existBall === true) setSelectedBalls(selectedBalls.filter(function (item, index, object) {
            return item !== id
        }))

        if (selectedBalls.length > Number(selectedGame?.max_number) - 1) return;

        if (existBall === false) {
            setSelectedBalls([...selectedBalls, id])
        }

    }


    function changeState(id: number, item: string) {
        setActiveId(id)
        let results = games.filter(el => {
            return el.type === item
        })


        setSelectedGame(results[0]);
        setSelectedBalls([])
        setLoadGames(false)
    }

    function verifyColor(number: number) {
        return selectedBalls.filter(el => {
            return el === number + 1
        })
    }

    function completeGame() {
        while (selectedBalls.length < Number(selectedGame?.max_number)) {
            let number = Math.floor(Math.random() * Number(selectedGame?.range) + 1);
            const found = selectedBalls.some((element) => element === Number(number));
            if (!found) {
                selectedNumber(number);
                selectedBalls.push(number);
            }
        }
    }

    function cleanGame() {
        setSelectedBalls([])
    }

    function addToCart() {
        if (selectedBalls.length < Number(selectedGame?.max_number)) {
            SetVisibleInfoValueQuantityBalls(true);
            setTimeout(() => {
                SetVisibleInfoValueQuantityBalls(false);
            }, 4000);
            return
        }

        let sortSelectedBalls = selectedBalls.sort(function (a, b) {
            return a - b;
        })
        sortSelectedBalls.map(item => {
            let newNumber: string = "";
            item < 10
                ? (newNumber = `${"0" + String(item)}`)
                : (newNumber = String(item));
            cartTemporary.push(newNumber)
        })

        cart?.push({
            type: String(selectedGame?.type),
            price: Number(selectedGame?.price),
            game_id: selectedGame?.id,
            date: getDate(),
            numbers: cartTemporary,
            color: String(selectedGame?.color),
        });
        console.log("Itens no carinho:", cart);

        setCartTemporary([])
        setSelectedBalls([])
    }

    function getDate() {
        const date = new Date();

        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        let modifiedDay: string = "";
        day < 10
            ? (modifiedDay = `${"0" + String(day)}`)
            : (modifiedDay = String(day));

        let modifiedMonth: string = "";
        month < 10
            ? (modifiedMonth = `${"0" + String(month)}`)
            : (modifiedMonth = String(month));

        return String(`${modifiedDay}/${modifiedMonth}/${year}`)
    }

    function loadBalls() {
        return Array.apply(0, Array(selectedGame?.range)).map(function (x, i) {
            return (
                <BallBet
                    key={i}
                    numberBall={i}
                    color={verifyColor(i).length !== 0 ? String(selectedGame?.color) : "#adc0c4"}
                    selectedNumber={(e: number) => { selectedNumber(e) }}
                    arrBalls={selectedBalls}
                />
            )
        })
    }

    return (
        <Wrapper>
            <TextTypeGame>New bet for {selectedGame?.type}</TextTypeGame>
            <TextChooseGame>Choose a game</TextChooseGame>
            <View>
                <ScrollView horizontal >
                    <ViewButtonsChoose>
                        {
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
                    </ViewButtonsChoose>
                </ScrollView>
            </View>

            {
                selectedBalls.length > 0 ?
                    <>
                        <ViewContainerBalls style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center", marginTop: 0, marginBottom: 0, }}>
                            <ScrollView horizontal>
                                {selectedBalls.map(item => {
                                    return (
                                        <View style={{ marginRight: 10, }} key={item}>
                                            <Text style={{ position: "absolute", marginTop: 3, right: 15, zIndex: 2, color: "#FFF", fontWeight: "bold", }}>x</Text>
                                            <BallBet
                                                key={item}
                                                numberBall={item - 1}
                                                color={String(selectedGame?.color)}
                                                selectedNumber={(e: number) => { selectedNumber(e) }}
                                                arrBalls={selectedBalls}
                                            />
                                        </View>
                                    )
                                })
                                }
                            </ScrollView>
                        </ViewContainerBalls>
                        <View style={{ marginTop: 10 }}>
                            <ScrollView horizontal>
                                <ActionButtons
                                    completeGame={completeGame}
                                    clearGame={cleanGame}
                                    addCart={addToCart}
                                />
                            </ScrollView>
                        </View>
                    </>
                    :
                    <>
                        <Text>Fill your bet</Text>
                        <TextDescriptionGame>{selectedGame?.description}</TextDescriptionGame>
                    </>
            }

            <ViewBoxBottomBar>
                <ViewBottomBar />
            </ViewBoxBottomBar>

            <ScrollView>
                <ViewContainerBalls>
                    {
                        loadGames === false ?
                            loadBalls()
                            : null
                    }
                </ViewContainerBalls>
            </ScrollView>

        </Wrapper>
    );
}

export default Game;