import React from "react";
import Navigator from "./navigator";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.navigateToHome = this.navigateToHome.bind(this);
    }

    navigateToHome() {
        this.props.navigation.navigate("Home");
    }
    render() {
        const screenProps = {
            navigateToHome: this.navigateToHome
        };
        return <Navigator screenProps={screenProps} />;
    }
}
