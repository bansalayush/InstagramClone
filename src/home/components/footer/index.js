import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Footer, FooterTab, Button, Body, Icon, Input } from "native-base";

export default class NavigationFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { active: "Home" };
    }

    render() {
        return (
            <Footer>
                <FooterTab style={styles.footerStyle}>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("Home");
                            this.setState({ active: "Home" });
                        }}
                    >
                        <Icon
                            style={{
                                color:
                                    this.state.active === "Home"
                                        ? "#000"
                                        : "#ccc"
                            }}
                            name="home"
                        />
                    </Button>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("Find");
                            this.setState({ active: "Find" });
                        }}
                    >
                        <Icon
                            style={{
                                color:
                                    this.state.active === "Find"
                                        ? "#000"
                                        : "#ccc"
                            }}
                            name="search"
                        />
                    </Button>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("Add");
                            this.setState({ active: "Add" });
                        }}
                    >
                        <Icon
                            style={{
                                color:
                                    this.state.active === "Add"
                                        ? "#000"
                                        : "#ccc"
                            }}
                            name="add"
                        />
                    </Button>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("Activity");
                            this.setState({ active: "Activity" });
                        }}
                    >
                        <Icon
                            style={{
                                color:
                                    this.state.active === "Activity"
                                        ? "#000"
                                        : "#ccc"
                            }}
                            name="heart"
                        />
                    </Button>

                    <Button
                        onPress={() => {
                            this.props.navigation.navigate("Profile");
                            this.setState({ active: "Profile" });
                        }}
                    >
                        <Icon
                            style={{
                                color:
                                    this.state.active === "Profile"
                                        ? "#000"
                                        : "#ccc"
                            }}
                            name="person"
                        />
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

const styles = StyleSheet.flatten({
    footerStyle: {
        backgroundColor: "#fff",
        justifyContent: "space-between"
    }
});
