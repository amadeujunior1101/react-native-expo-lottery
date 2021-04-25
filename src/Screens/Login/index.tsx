import React, { useState, useContext } from "react";
import { TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons/";
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../../Services/api";
import validateUser from "./validate";
import { UserLogin, User, NavigationType } from "./types";
// import Routes from "../../Routes";
import AuthContext from "../../Contexts/auth";
// import { AppStack } from "../../Routes";
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
    TextTitleButtonLogInForgot,
    ViewBoxForgot,
    TextTitleFooter,
} from "./style";

function Login({ navigation }: NavigationType) {

    const { signed, signIn, email, setEmail, password, setPassword } = useContext(AuthContext);

    const [spinner, setSpinner] = useState(false)
    // const [errorUser, setErrorUser] = useState<UserLogin>()
    const [showHideLogin, setShowHideLogin] = useState({
        icon: 'eye-slash',
        password: true,
    });

    function showHideInputLogin() {
        setShowHideLogin({
            icon: showHideLogin.icon === 'eye' ? 'eye-slash' : 'eye',
            password: showHideLogin.password === false ? true : false,
        });
    }

    const handleLogin = () => {

        let item: User = {
            email: email,
            password: password,
            changeError: changeError,
            check_email: check_email,
        }
        return validateUser(item)
    }

    function changeError(error: UserLogin) {
        // setErrorUser(error)
        // return console.log("Error", error)
        if (error.email.length > 0 && error.password.length > 0) {
            // setErrorUser({
            //     email: "",
            //     password: ""
            // })
            auth()


        } else {
            // console.log("else")
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

    function auth() {
        setSpinner(true);
        try {
            signIn()
       
            setSpinner(false);
            // navigation.navigate("ResetPassword");
            // return AppStack()
            // console.log("response...=>", response)

        } catch (error) {
            // setVisibleLoading(false);

            // if (!error.response) {
            //     setVisibleInfoLogin(true);
            //     setInfoLogin("Houve uma falha na conexão cokm o servidor!");
            //     setTimeout(() => {
            //         setVisibleInfoLogin(false);
            //     }, 4000);
            //     return;
            // }

            // if (error.response.statusText) {
            //     setVisibleInfoLogin(true);
            //     setInfoLogin("Login ou senha invalidos.");
            //     setTimeout(() => {
            //         setVisibleInfoLogin(false);
            //     }, 4000);

            // } else {
            //     setVisibleInfoLogin(false);
            //     setEmail("")
            //     setPassword("")
            // }

            return console.log({
                status: error.response.statusText,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
            })
        }

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
            <Wrapper>
                <Spinner
                    visible={spinner}
                    textContent={'Loading...'}
                // textStyle={}
                />
                <BoxLogo>
                    <TextLogoTitle>TGL</TextLogoTitle>
                    <ViewLineLogo style={{
                        width: "30%",
                        height: 5,
                        backgroundColor: "#B5C401"
                    }} />
                    <TextAuthenticationTitle>Authentication</TextAuthenticationTitle>
                </BoxLogo>
                <ScrollView>
                    <ViewCardLogin>
                        <TextInputEmailCardLogin placeholder="Email"
                            value={email}
                            onChangeText={(e) => handleChangeEmail(e)}
                        />
                        {/* <Text style={{ display: "flex", position: "absolute", marginTop: 45, color: "#dc3545" }}>{errorUser?.email}</Text> */}
                        <ViewLineLogo />
                        <View>
                            <FontAwesome5
                                name={showHideLogin.icon}
                                onPress={showHideInputLogin}
                                size={20}
                                style={{ position: "absolute", marginTop: 25, right: 20 }}
                            />
                            <TextInputPasswordCardLogin
                                placeholder="Password"
                                secureTextEntry={showHideLogin.password}
                                value={password}
                                onChangeText={(e) => handleChangePassword(e)}
                            />
                        </View>
                        <ViewLineLogo />
                        <ViewBoxLogIn>
                            <ViewBoxForgot>
                                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                                    <TextTitleButtonLogInForgot>I forget my password</TextTitleButtonLogInForgot>
                                </TouchableOpacity>
                            </ViewBoxForgot>
                            {/* <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }} onPress={() => navigation.navigate("AppTabs")}> */}
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }} onPress={() => handleLogin()}>
                                <TextTitleButtonLogIn>Log In</TextTitleButtonLogIn>
                                <FontAwesome5
                                    name="arrow-right"
                                    size={24}
                                    color="#B5C401"
                                />
                            </TouchableOpacity>
                        </ViewBoxLogIn>
                    </ViewCardLogin>

                    <ButtonSignUp onPress={() => navigation.navigate('Register')}>
                        <TextTitleButtonSignUp>Sign Up</TextTitleButtonSignUp>
                        <FontAwesome5
                            name="arrow-right"
                            size={24}
                            color="#707070"
                        />
                    </ButtonSignUp>
                </ScrollView>

            </Wrapper>
            <>
                <TextTitleFooter>Copyright 2021 Luby Software</TextTitleFooter>
            </>
        </KeyboardAvoidingView>
    )
}

export default Login;