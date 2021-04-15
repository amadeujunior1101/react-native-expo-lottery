import React from "react";
import { TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
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
    navigation: { navigate: Function }
};

function Login({ navigation }: NavigationType) {

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <Wrapper>
                <BoxLogo>
                    <TextLogoTitle>TGL</TextLogoTitle>
                    <ViewLineLogo />
                    <TextAuthenticationTitle>Authentication</TextAuthenticationTitle>
                </BoxLogo>
                <ScrollView>
                    <ViewCardLogin>
                        <TextInputEmailCardLogin placeholder="Email" />
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />
                        <TextInputPasswordCardLogin placeholder="Password" />
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />
                        <ViewBoxLogIn>
                            <ViewBoxForgot>
                                <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                                    <TextTitleButtonLogInForgot>I forget my password</TextTitleButtonLogInForgot>
                                </TouchableOpacity>
                            </ViewBoxForgot>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }}>
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
                <TextTitleFooter>Copyright 2020 Luby Software</TextTitleFooter>
            </>
        </KeyboardAvoidingView>
    )
}

export default Login;