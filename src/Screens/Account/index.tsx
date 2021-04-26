import React, { useEffect, useState } from "react";
import { ScrollView, KeyboardAvoidingView, Platform, Alert, View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';
import { FontAwesome5 } from "@expo/vector-icons/";
import {
    Wrapper,
    TextAuthenticationTitle,
    ViewCardLogin,
    TextInputEmailCardLogin,
    TextInputPasswordCardLogin,
    ViewBoxLogIn,
    TextTitleButtonLogIn,
    TouchableOpacitySave,
    BoxLogo,
    ViewLineLogo,
} from "./style"
import validateAccount from "./validate";
import Header from "../../Components/Header";
import api from "../../Services/api";
import { ItemsValidate, User, NavigationType } from "./types"

function Account(navigation: NavigationType) {
    const [spinner, setSpinner] = useState(false)

    // const [error, setError] = useState<User>()
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [showHideRegister, setShowHideRegister] = useState({
        icon: 'eye-slash',
        password: true,
    });

    useEffect(() => {
        getUser()
    }, [])

    const handleSubmit = () => {

        let item: ItemsValidate = {
            fullName: fullName.trim(),
            email: email.trim(),
            password: password.trim(),
            changeError: changeError,
            check_email: check_email,
        }
        // return console.log("User:", item)
        return validateAccount(item)
    }

    function changeError(error: User) {
        if (error.fullName.length > 0 && error.email.length > 0 && error.password.length > 0) {
            updateUser()

        } else {
            error?.fullName !== "" && alert(error?.fullName)
            error?.email !== "" && alert(error?.email)
            error?.password !== "" && alert(error?.password)
        }
    }


    function check_email(val: string) {
        if (!val.match(/\S+@\S+\.\S+/)) {
            return false;
        }
        if (val.indexOf(' ') != -1 || val.indexOf('..') != -1) {
            return false;
        }
        return true;
    }

    const handleChangeFullName = (e: string) => {
        setFullName(e)
    }
    const handleChangeEmail = (e: string) => {
        setEmail(e)
    }
    const handleChangePassword = (e: string) => {
        setPassword(e)
    }

    async function getUser() {
        try {
            const response = await api.get("/show-user");
            setFullName(response.data.user.full_name)
            setEmail(response.data.user.email)

        } catch (error) {
            // if (!error.response) {
            //     return history.replace("/login")
            // }
            return console.log({
                error: error,
                message: "Falha na autenticação",
                status: error.response.data.error
            })
        }

    }

    async function updateUser() {
        setSpinner(true);
        try {
            const response = await api.put("/update-user", {
                full_name: fullName,
                email: email,
                password: password,
            });

            if (response.data.user_message === "Usuário atualizado com sucesso.") {
                setSpinner(false);
                setPassword("");
                return Alert.alert("Atenção!", response.data.user_message)
            }
            else if (response.data.user_message === "Senha obrigatória.") {
                setSpinner(false);
                setPassword("");
                return Alert.alert("Atenção!", response.data.user_message)
            } else {
                setSpinner(false);
                return Alert.alert("Atenção!", response.data.user_message)
            }


        } catch (error) {
            setSpinner(false);
            // setVisibleLoading(false);
            // if (!error.response) {
            //     return history.replace("/login")
            // }

            // setMessageUser(error.data)

            return console.log({
                error: error,
                message: "Falha na autenticação",
                status: error.response.data.error
            })

        }
    }

    function showHideInputRegister() {
        setShowHideRegister({
            icon: showHideRegister.icon === 'eye' ? 'eye-slash' : 'eye',
            password: showHideRegister.password === false ? true : false,
        });
    }

    return (
        <>
            <Header navigation={navigation.navigation} state={false} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <Spinner
                    visible={spinner}
                    textContent={'Loading...'}
                />
                <Wrapper>
                    <ScrollView>
                        <BoxLogo>
                            <TextAuthenticationTitle>Account Update</TextAuthenticationTitle>
                        </BoxLogo>
                        <ViewCardLogin>
                            <TextInputEmailCardLogin placeholder="Name"
                                value={fullName}
                                onChangeText={(e) => handleChangeFullName(e)}
                            />
                            <ViewLineLogo style={{
                                width: "100%",
                                height: 2,
                                backgroundColor: "#EBEBEB"
                            }} />
                            <TextInputEmailCardLogin placeholder="Email"
                                value={email}
                                onChangeText={(e) => handleChangeEmail(e)}
                            />
                            <ViewLineLogo style={{
                                width: "100%",
                                height: 2,
                                backgroundColor: "#EBEBEB"
                            }} />
                            <View>
                                <FontAwesome5
                                    name={showHideRegister.icon}
                                    onPress={showHideInputRegister}
                                    size={20}
                                    style={{ position: "absolute", marginTop: 25, right: 20 }}
                                />
                                <TextInputPasswordCardLogin placeholder="Password"
                                    secureTextEntry={showHideRegister.password}
                                    value={password}
                                    onChangeText={(e) => handleChangePassword(e)}
                                />
                            </View>
                            <ViewLineLogo style={{
                                width: "100%",
                                height: 2,
                                backgroundColor: "#EBEBEB"
                            }} />
                            <ViewBoxLogIn>

                                <TouchableOpacitySave onPress={() => handleSubmit()} >
                                    <TextTitleButtonLogIn>Save</TextTitleButtonLogIn>
                                    <FontAwesome5
                                        name="arrow-right"
                                        size={24}
                                        color="#B5C401"
                                    />
                                </TouchableOpacitySave>
                            </ViewBoxLogIn>
                        </ViewCardLogin>

                    </ScrollView>

                </Wrapper>
            </KeyboardAvoidingView>
        </>
    )
}

export default Account;