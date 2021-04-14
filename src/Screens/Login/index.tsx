import React from "react";
import {
    Wrapper,
    TextLogoTitle,
    TextAuthenticationTitle,
    ViewCardLogin,
    TextInputEmailCardLogin,
    TextInputPasswordCardLogin,
    ButtonLogIn,
    TextTitleButtonLogIn,
    ButtonSignUp,
    TextTitleButtonSignUp,
    BoxLogo,
    ViewLineLogo,
    TextTitleButtonLogInForgot,
} from "./style"

interface ItemsValidate {
    email: string;
    password: string;
    changeError: Function;
    check_email: Function;
}

function Login() {

    return (
        <Wrapper>
            <BoxLogo>
                <TextLogoTitle>TGL</TextLogoTitle>
                <ViewLineLogo />
                <TextAuthenticationTitle>Authentication</TextAuthenticationTitle>
            </BoxLogo>
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
                <ButtonLogIn>
                    <TextTitleButtonLogInForgot>I forget my password</TextTitleButtonLogInForgot>

                    <TextTitleButtonLogIn>Log In</TextTitleButtonLogIn>
                </ButtonLogIn>
            </ViewCardLogin>

            <ButtonSignUp>
                <TextTitleButtonSignUp>Sign Up</TextTitleButtonSignUp>
            </ButtonSignUp>

            {/*  <ContainerFluid>
                <BoxGeneral>
                    <DivBoxLeft>
                        <ContainerBoxLeft>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <DivTitleOne>
                                    <SpanTitleOne>The Geatest App</SpanTitleOne>
                                </DivTitleOne>
                            </div>
                            <DivButtonFor>
                                <SpanButtonFor>for</SpanButtonFor>
                            </DivButtonFor>
                            <div>
                                <SpanLotery>Lottery</SpanLotery>
                            </div>
                        </ContainerBoxLeft>
                    </DivBoxLeft>
                    <DivBoxRight>
                        <ContainerBoxRight>
                            <div>
                                <SpanTitleAuthentication>
                                    Authentication
                        </SpanTitleAuthentication>
                            </div>
                            <FormLogin onSubmit={handleSubmit}>
                                <div style={{ boxShadow: "0px 3px 25px #00000014", borderRadius: 14 }}>

                                    <DivInputEmail >
                                        <InputLogin
                                            type="text"
                                            placeholder="Email"
                                            value={email}
                                            onChange={handleChangeEmail}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.email}</span>
                                    </DivInputEmail>
                                    <DivInputPassword>
                                        <InputLogin
                                            type="password"
                                            placeholder="Password"
                                            autoComplete="on"
                                            security="true"
                                            value={password}
                                            onChange={handleChangePassword}
                                        />
                                        <span style={{ display: "flex", position: "absolute", marginTop: 60, color: "#dc3545" }}>{error?.password}</span>
                                    </DivInputPassword>
                                    <DivButtonLogin>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <DivForgot>
                                                <ButtonForgot>
                                                    <SpanForgot><Link to="/reset-password" style={{ textDecoration: "none", color: "#707070" }}>I forget my password</Link></SpanForgot>
                                                </ButtonForgot>
                                            </DivForgot>
                                        </div>
                                        <div>
                                            <ButtonLogin onClick={handleLogin}>
                                                <SpanLogin >Log In <i className="fas fa-arrow-right"></i></SpanLogin>
                                            </ButtonLogin>
                                        </div>
                                    </DivButtonLogin>
                                </div>
                                {
                                    visibleInfoLogin ?
                                        <Alert title={infoLogin} color={"#f8d7da"} />
                                        : null
                                }
                                {
                                    visibleInfoUserConfirmed !== "" ?
                                        <Alert title={visibleInfoUserConfirmed} color={"#d4edda"} />
                                        : null
                                }

                            </FormLogin>
                            <ButtonSigUp>
                                <SpanSigUp>
                                    <Link to="/register" style={{ textDecoration: "none", color: "#707070" }}>Sign Up </Link>
                                    <i className="fas fa-arrow-right"></i></SpanSigUp>
                            </ButtonSigUp>
                        </ContainerBoxRight>

                    </DivBoxRight>
                </BoxGeneral>
            </ContainerFluid>
            <Footer>
                <span>Copyright 2020 Luby Software</span>
            </Footer> */}
        </Wrapper>
    )
}

export default Login;