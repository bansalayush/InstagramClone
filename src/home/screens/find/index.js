import React from "react";
import { Container, Content, View, Text } from "native-base";
import Header from "./component/header";
import PostList from "../../components/postlist";
export default class Find extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header />
                <View>
                    <Text style={{ color: "#f00" }}>
                        {this.constructor.name}
                    </Text>
                </View>
                <PostList />
            </Container>
        );
    }
}
