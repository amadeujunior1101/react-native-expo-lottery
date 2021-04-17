import React, { useState } from "react";
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
} from "./style";

import { NavigationType, User, UserPassword } from "./types";
import validateUser from "./validate";

function ResetPassword({ navigation }: NavigationType) {
    const [email, setEmail] = useState<string>("")

    const handleResetPassword = () => {

        let item: User = {
            email: email,
            changeError: changeError,
            check_email: check_email,
        }
        return validateUser(item)
    }

    function changeError(error: UserPassword) {

        if (error.email === "ok") {
            sendResetPassword()

        } else {
            error?.email !== "" && alert(error?.email)
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

    const handleChangeEmail = (e: string) => {
        setEmail(e)
    }

    function sendResetPassword() {
        console.log("Validate...")
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
                    <TextAuthenticationTitle>Reset Password</TextAuthenticationTitle>
                </BoxLogo>
                <ScrollView>
                    <ViewCardLogin>
                        <TextInputEmailCardLogin placeholder="Email"
                            value={email}
                            onChangeText={(e) => handleChangeEmail(e)}
                        />
                        <ViewLineLogo style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: "#EBEBEB"
                        }} />

                        <ViewBoxLogIn>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", }} onPress={() => handleResetPassword()}>
                                <TextTitleButtonLogIn>Send Link</TextTitleButtonLogIn>
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

export default ResetPassword;