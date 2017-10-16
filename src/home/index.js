import React from "react";
import { View, Text } from "native-base";
import Navigator from "./navigator";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToAuth = this.navigateToAuth.bind(this);
    }

    navigateToAuth() {
        this.props.navigation.navigate("Auth");
    }
    render() {
        const screenProps = { navigateToAuth: this.navigateToAuth };
        return <Navigator />;
    }
}
