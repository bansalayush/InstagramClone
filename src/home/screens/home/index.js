import React from "react";
import { StatusBar } from "react-native";
import { Container, Content, View, Text } from "native-base";
import PostList from "../../components/postlist";
import Header from "./component/header";
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <PostList />
                </Content>
            </Container>
        );
    }
}
