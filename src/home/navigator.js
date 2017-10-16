import React from "react";
import { StackNavigator } from "react-navigation";
import Home from "./screens";
export default StackNavigator(
    {
        Home: { screen: Home }
    },
    {
        index: 0,
        initialRouteName: "Home",
        headerMode: "none"
    }
);
