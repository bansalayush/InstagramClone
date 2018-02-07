import React from "react";
import { Header, View, Text } from "native-base";
export default class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header style={{ marginTop: 18 }}>
                <Text>
                    {this.constructor.name}
                </Text>
            </Header>
        );
    }
}
