import React from "react";

import { Header, View, Text } from "native-base";

export default class FindHeader extends React.Component {
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
