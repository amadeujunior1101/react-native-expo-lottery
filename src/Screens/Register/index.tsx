import React, { useState } from "react";
import { TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons/";
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
} from "./style"

interface ItemsValidate {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

type NavigationType = {
    navigation: { goBack: Function }
};

function Register({ navigation }: NavigationType) {
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

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <BoxLogo>
                    <TextLogoTitle>TGL</TextLogoTitle>
                    <ViewLineLogo />
                    <TextAuthenticationTitle>Registration</TextAuthenticationTitle>
                </BoxLogo>
                <ScrollView>
                    <ViewCardLogin>
                        <TextInputEmailCardLogin placeholder="Name" />
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />
                        <TextInputEmailCardLogin placeholder="Email" />
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />
                        <View>
                            <FontAwesome5
                                name={showHideLogin.icon}
                                onPress={showHideInputLogin}
                                size={20}
                                style={{ position: "absolute", marginTop: 25, right: 20 }}
                            />
                            <TextInputPasswordCardLogin placeholder="Password"
                                secureTextEntry={showHideLogin.password}
                            />
                        </View>
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />
                        <ViewBoxLogIn>
                            {/* <ViewBoxForgot>
                            <TouchableOpacity>
                                <TextTitleButtonLogInForgot>I forget my password</TextTitleButtonLogInForgot>
                            </TouchableOpacity>
                        </ViewBoxForgot> */}
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }}>
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
                <TextTitleFooter>Copyright 2020 Luby Software</TextTitleFooter>
            </>
        </KeyboardAvoidingView>
    )
}

export default Register;