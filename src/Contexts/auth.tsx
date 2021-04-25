import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../Services/api";
import { Alert } from "react-native";

interface AuthContextData {
    signed: boolean;
    user: string | null;
    signIn(): Promise<void>;
    signUp(): Promise<void>;
    email: string;
    setEmail: Function
    password: string;
    setPassword: Function;
    loading: boolean;
}

interface UserData {
    data: {
        user: {
            name: string
        }
    }
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [loading, setLoading] = useState(true);
    // const [spinner, setSpinner] = useState(false)
    const [user, setUser] = useState<string | null>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        async function loadStorageData() {
            const userToken = await AsyncStorage.getItem("auth:token");

            if (userToken) {
                setUser(userToken);
                setLoading(false)

                setEmail("")
                setPassword("")
            }
        }

        loadStorageData();
    }, [])

    async function signIn() {
        try {
            const response = await api.post("/auth", {
                email: email,
                password: password,
            }
            )

            const token = response.data.data.token

            setUser(response.data.data.token)
            await AsyncStorage.setItem("auth:token", token);

            if (response.data.user_message === "Acesse sua caixa de emails e confirme seu usuário.") {
                //   setVisibleLoading(false);
                Alert.alert("Aviso!", "Acesse sua caixa de emails e confirme seu usuário.");
                //   return setVisibleInfoUserConfirmed(response.data.user_message)
            }

            setEmail("")
            setPassword("")

        } catch (error) {
            if (error.response.data.user_message) {
                Alert.alert("Aviso!", "usuário ou senha invalido(s)!");
            }
            return console.log({
                status: error.response.statusText,
                data: error,
                error: error.response.data.user_message,
                message: "Falha na autenticação"
            })
        }

    }

    async function signUp() {
        try {

            await AsyncStorage.clear();
            setUser(null)

        } catch (error) {
            return console.log({
                // status: error.response.statusText,
                data: error,
                // error: error.response.data.user_message,
                // message: "Falha na autenticação"
            })
        }

    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signUp, email: email, setEmail: setEmail, password, setPassword, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;