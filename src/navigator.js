import React from "react";
import { StackNavigator } from "react-navigation";
import Auth from "./auth";
import Home from "./home";

export default StackNavigator(
    {
        Auth: { screen: Auth },
        Home: { screen: Home }
    },
    {
        index: 0,
        initialRouteName: "Auth",
        headerMode: "none"
    }
);
