import React from "react";
import { Text, View, Alert } from "react-native";
import {
    Container,
    Content,
    Button,
    Body,
    Icon,
    Input,
    Item,
    Footer,
    FooterTab,
    Spinner
} from "native-base";
import { observer } from "mobx-react";
import Store from "../store";
import styles from "./styles";
@observer
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        console.log("this.propsQQQQQQ", this.props);
    }

    loginSuccess() {
        this.props.screenProps.navigateToHome();
    }

    loginFailure() {}
    render() {
        return (
            <Container style={{ backgroundColor: "#fff" }}>
                <Content>
                    <Body>
                        <Text style={styles.headerText}>INSTAGRAM</Text>

                        <Item
                            style={{
                                ...styles.credentials,
                                ...{ marginTop: 30 }
                            }}
                            regular
                        >
                            <Input
                                onChangeText={username =>
                                    this.setState({ username })}
                                placeholder="username"
                                placeholderTextColor="#c4c4c4"
                            />
                        </Item>

                        <Item style={styles.credentials} regular>
                            <Input
                                onChangeText={password =>
                                    this.setState({ password })}
                                placeholder="password"
                                placeholderTextColor="#c4c4c4"
                            />
                        </Item>

                        <Button
                            onPress={() =>
                                Store.login(
                                    this.loginSuccess.bind(this),
                                    this.loginFailure.bind(this)
                                )}
                            style={styles.login}
                            full
                        >
                            {Store.isLogging
                                ? <Spinner color="red" />
                                : <Text style={{ color: "#fff" }}>
                                      Sign In
                                  </Text>}
                        </Button>

                        <View style={styles.footerSignInProlem}>
                            <Text
                                style={[styles.footertext, styles.footertext1]}
                            >
                                Forgot your login details?
                            </Text>
                            <Text
                                style={[styles.footertext, styles.footertext2]}
                            >
                                Get help signing in
                            </Text>
                        </View>

                        <View style={styles.logInSeperator}>
                            <View
                                style={{
                                    height: 1,
                                    flex: 2,
                                    backgroundColor: "#DEDEDE"
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 15,
                                    color: "#000",
                                    marginTop: -5,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    justifyContent: "center"
                                }}
                            >
                                OR
                            </Text>
                            <View
                                style={{
                                    height: 1,
                                    flex: 2,
                                    backgroundColor: "#DEDEDE"
                                }}
                            />
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 25
                            }}
                        >
                            <Icon
                                name="logo-facebook"
                                style={{
                                    fontSize: 27,
                                    color: "#356FFF",
                                    marginTop: 10,
                                    marginLeft: 11,
                                    marginRight: 4
                                }}
                            />
                            <Button transparent>
                                <Text
                                    style={{
                                        color: "#358BFF",
                                        fontWeight: "bold"
                                    }}
                                >
                                    Log in with Facebook
                                </Text>
                            </Button>
                        </View>
                    </Body>
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
                            onPress={() =>
                                this.props.navigation.navigate("Signup")}
                            style={{ backgroundColor: "transparent" }}
                        >
                            <Text style={{ color: "#000" }}>
                                Don't have an account? Sign up.
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
