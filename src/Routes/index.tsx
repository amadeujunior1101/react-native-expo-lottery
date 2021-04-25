import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthContext from "../Contexts/auth";
import AuthRoutes from "./auth";
import AppRoutes from "./app";

const Routes = () => {

    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator size="large" color={"#999"} />
        </View>
    }

    return signed ? <AuthRoutes /> : <AppRoutes />
}

export default Routes