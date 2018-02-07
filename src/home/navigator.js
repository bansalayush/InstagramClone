import React from "react";
import { TabNavigator } from "react-navigation";
import Home from "./screens/home";
import Find from "./screens/find";
import Add from "./screens/add";
import Activity from "./screens/activitySummary";
import Profile from "./screens/profile";
import NavigationFooter from "./components/footer";
export default TabNavigator(
    {
        Home: { screen: Home },
        Find: { screen: Find },
        Add: { screen: Add },
        Activity: { screen: Activity },
        Profile: { screen: Profile }
    },
    {
        tabBarComponent: props => {
            return <NavigationFooter {...props} />;
        },
        tabBarPosition: "bottom",
        swipeEnabled: false
    }
);
