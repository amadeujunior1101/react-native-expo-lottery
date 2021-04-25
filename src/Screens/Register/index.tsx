import React, { useState } from "react";
import { TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, View, Alert } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons/";
import Spinner from 'react-native-loading-spinner-overlay';
import api from "../../Services/api"
import {
    Wrapper,
    TextLogoTitle,
    TextAuthenticationTitle,
    ViewCardLogin,
    TextInputEmailCardLogin,
    TextInputPasswordCardLogin,
    ViewBoxLogIn,
    TextTitleButtonLogIn,
    ButtonSignUp,
    TextTitleButtonSignUp,
    BoxLogo,
    ViewLineLogo,
    TextTitleFooter,
} from "./style";
import { NavigationType, User, UserRegister } from "./types";
import validateUser from "./validate";

function Register({ navigation }: NavigationType) {
    const [spinner, setSpinner] = useState(false)
    const [fullName, setFullName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showHideRegister, setShowHideRegister] = useState({
        icon: 'eye-slash',
        password: true,
    });

    function showHideInputRegister() {
        setShowHideRegister({
            icon: showHideRegister.icon === 'eye' ? 'eye-slash' : 'eye',
            password: showHideRegister.password === false ? true : false,
        });
    }

    const handleRegister = () => {

        let item: User = {
            fullName: fullName,
            email: email,
            password: password,
            changeError: changeError,
            check_email: check_email,
        }
        return validateUser(item)
    }

    function changeError(error: UserRegister) {
        if (error.fullName.length > 0 && error.email.length > 0 && error.password.length > 0) {
            addNewRegister()

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

    async function addNewRegister() {
        setSpinner(true);
        try {
            const response = await api.post("/create-user", {
                full_name: fullName,
                email: email,
                password: password,
            }
            )

            setSpinner(false)

            if (response.data.user_message === "E-mail já cadastrado.") {
                Alert.alert("Aviso!", response.data.user_message)
                // return setInfoRegister(response.data.user_message)
            }

            // if (response.data.user_message === "Acesse seu email e confirme seu usuário.") {
            //     console.log("response=>", response)
            //     navigation.goBack();
            //     Alert.alert("Aviso!", response.data.user_message)
            //     // return setInfoRegister(response.data.user_message)
            // }
            // history.push("/login");

        } catch (error) {

            // setVisibleLoading(false);

            // if (!error.response) {
            //     return history.replace("/login")
            // }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha ao registrar novo usuário."
            })
        }
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

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Spinner
                visible={spinner}
                textContent={'Loading...'}
            />
            <Wrapper>
                <BoxLogo>
                    <TextLogoTitle>TGL</TextLogoTitle>
                    <ViewLineLogo />
                    <TextAuthenticationTitle>Registration</TextAuthenticationTitle>
                </BoxLogo>
                <ScrollView>
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

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }} onPress={() => handleRegister()} >
                                <TextTitleButtonLogIn>Register</TextTitleButtonLogIn>
                                <FontAwesome5
                                    name="arrow-right"
                                    size={24}
                                    color="#B5C401"
                                />
                            </TouchableOpacity>
                        </ViewBoxLogIn>
                    </ViewCardLogin>

                    <ButtonSignUp onPress={() => navigation.goBack()}>
                        <FontAwesome5
                            name="arrow-left"
                            size={24}
                            color="#707070"
                        />
                        <TextTitleButtonSignUp>Back</TextTitleButtonSignUp>
                    </ButtonSignUp>
                </ScrollView>

            </Wrapper>
            <>
                <TextTitleFooter>Copyright 2021 Luby Software</TextTitleFooter>
            </>
        </KeyboardAvoidingView>
    )
}

export default Register;