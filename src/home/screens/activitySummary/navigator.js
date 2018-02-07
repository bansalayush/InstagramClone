import { TabNavigator } from "react-navigation";
import OthersActivity from "./screens/othersActivity";
import MyActivity from "./screens/myActivity";
export default TabNavigator(
    {
        OthersActivity: { screen: OthersActivity },
        MyActivity: { screen: MyActivity }
    },
    {
        tabBarPosition: "top",
        swipeEnabled: false
    }
);
