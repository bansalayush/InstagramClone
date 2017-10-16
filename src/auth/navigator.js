import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "./login";
import Signup from "./signup";

export default StackNavigator(
    {
        Login: { screen: Login },
        Signup: { screen: Signup }
    },
    {
        index: 0,
        initialRouteName: "Login",
        headerMode: "none"
    }
);
