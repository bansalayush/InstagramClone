import React from "react";
import { Text } from "react-native";
import Store from "../store";
import { Spinner, View, Container, Content } from "native-base";
import { observer } from "mobx-react";
@observer
export default class SessionValidator extends React.Component {
    constructor(props) {
        super(props);
        // this.navigateToLogin = this.navigateToLogin.bind(this);
        this.navigateToHome = this.navigateToHome.bind(this);
        this.tokenExists = this.tokenExists.bind(this);
        this.tokenNotExists = this.tokenNotExists.bind(this);
    }

    navigateToHome() {
        this.props.screenProps.navigateToHome();
    }

    tokenExists() {
        this.navigateToHome();
    }
    tokenNotExists() {
        this.props.navigation.navigate("Login");
    }
    componentDidMount() {
        Store.check(this.tokenExists, this.tokenNotExists);
    }
    render() {
        if (Store.isChecking)
            return (
                <Container>
                    <Content
                        contentContainerStyle={{
                            flex: 1
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Spinner color="red" />
                            <Text>Please wait ...</Text>
                        </View>
                    </Content>
                </Container>
            );

        return null;
    }
}
