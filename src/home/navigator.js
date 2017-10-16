import React from "react";
import { TabNavigator } from "react-navigation";
import Home from "./screens/home";
import Find from "./screens/find";
import Add from "./screens/add";
import Activity from "./screens/activitySummary";
import Profile from "./screens/profile";
export default TabNavigator(
    {
        Home: { screen: Home },
        Find: { screen: Find },
        Add: { screen: Add },
        Activity: { screen: Activity },
        Profile: { screen: Profile }
    },
    {
        tabBarPosition: "bottom",
        swipeEnabled: false
    }
);
