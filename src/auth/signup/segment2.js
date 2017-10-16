import React, { Component } from "react";
import {
  StyleSheet,
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
export default class Segment2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Item style={styles.emailItem}>
          <Input
            placeholder="Email"
            placeholderTextColor="#606060"
            style={{ paddingLeft: 15, fontSize: 15 }}
          />
        </Item>
        <Button
          full
          style={{
            borderRadius: 3,
            marginTop: 20,
            backgroundColor: "#3397F4"
          }}
        >
          <Text style={{ color: "#fff" }}>Next</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.flatten({
  container: {
    width: Dimensions.get("window").width,
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20
  },
  emailItem: {
    backgroundColor: "#FAFAFA",
    borderColor: "#DEDEDE",
    borderRadius: 3,
    borderWidth: 1
  }
});
