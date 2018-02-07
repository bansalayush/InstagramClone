import React from "react";
import { View, Text } from "native-base";

export default class MyActivity extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ marginTop: 200 }}>
                <Text style={{ color: "#f00" }}>
                    {this.constructor.name}
                </Text>
            </View>
        );
    }
}
