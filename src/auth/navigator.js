import React from "react";
import { StackNavigator } from "react-navigation";
import Login from "./login";
import Signup from "./signup";
import SessionValidator from "./sessionValidator";

export default StackNavigator(
    {
        Login: { screen: Login },
        Signup: { screen: Signup },
        SessionValidator: { screen: SessionValidator }
    },
    {
        index: 0,
        initialRouteName: "SessionValidator",
        headerMode: "none"
    }
);
