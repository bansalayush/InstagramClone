import React from "react";
import { View, Text } from "native-base";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={{ color: "#f00" }}>
                    {this.constructor.name}
                </Text>
            </View>
        );
    }
}
