import React, { Component } from "react";
import {
    View,
    Text,
    Dimensions,
    TouchableHighlight,
    Alert
} from "react-native";
import {
    Container,
    Content,
    Body,
    Button,
    Icon,
    Segment,
    Left,
    Right,
    Item,
    Input,
    Footer,
    FooterTab
} from "native-base";
import Seg1 from "./segment1";
import Seg2 from "./segment2";
import styles from "./styles";
export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        console.log("WWWWWWWWWWWWW", this.props);
        this.state = {
            segment: 0
        };
    }
    setSegmentSelected(val) {
        console.log("segment -> " + val);
        this.setState({
            segment: val
        });
    }
    render() {
        return (
            <Container style={{ backgroundColor: "#fff" }}>
                <Content>
                    <Body>
                        <View style={styles.iconContainer}>
                            <Body>
                                <Icon
                                    name="md-person"
                                    style={styles.iconStyle}
                                />
                            </Body>
                        </View>
                    </Body>
                    <Segment style={styles.segmentContainer}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => {
                                this.setSegmentSelected(0);
                            }}
                            style={{
                                ...styles.segmentTabs,
                                ...{
                                    borderBottomColor:
                                        this.state.segment === 0
                                            ? "#000"
                                            : "#DEDEDE"
                                }
                            }}
                        >
                            <Text
                                style={{
                                    color:
                                        this.state.segment === 0
                                            ? "#000"
                                            : "#DEDEDE",
                                    fontSize: 15
                                }}
                            >
                                PHONE
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => {
                                this.setSegmentSelected(1);
                            }}
                            style={{
                                ...styles.segmentTabs,
                                ...{
                                    borderBottomColor:
                                        this.state.segment === 1
                                            ? "#000"
                                            : "#DEDEDE"
                                }
                            }}
                        >
                            <Text
                                style={{
                                    color:
                                        this.state.segment === 1
                                            ? "#000"
                                            : "#DEDEDE",
                                    fontSize: 15
                                }}
                            >
                                EMAIL
                            </Text>
                        </TouchableHighlight>
                    </Segment>
                    {this.state.segment === 0 ? <Seg1 /> : <Seg2 />}
                </Content>

                <Footer
                    style={{
                        backgroundColor: "#fff",
                        borderWidth: 1
                    }}
                >
                    <FooterTab
                        style={{
                            backgroundColor: "#fff"
                        }}
                    >
                        <Button
                            onPress={() => this.props.navigation.goBack()}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Text style={{ color: "#000" }}>
                                Already have an account? Log In
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
