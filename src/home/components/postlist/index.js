import React from "react";
import { View, Text } from "native-base";
import Post from "../singlepost";
export default class PostList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text style={{ color: "#f00" }}>
                    {this.constructor.name}
                </Text>
                <Post />
            </View>
        );
    }
}
