import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Expo from "expo";
import MApp from "./src/App";
export default class App extends React.Component {
    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
    }

    render() {
        return <MApp />;
    }
}
