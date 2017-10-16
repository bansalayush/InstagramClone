import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Alert,
  Platform
} from "react-native";
import { Button, Item, Input, Footer, FooterTab } from "native-base";
export default class Segment1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Item style={styles.phoneItem}>
          <Text
            onPress={() => {
              Alert.alert("Yippe");
            }}
            style={{
              ...styles.phoneText,
              ...{ marginTop: Platform.OS === "ios" ? 15 : 9 }
            }}
          >
            IN +91
          </Text>
          <Input
            placeholder="Phone"
            placeholderTextColor="#606060"
            style={{ paddingLeft: 15, fontSize: 15 }}
          />
        </Item>

        <Text style={styles.bottomText}>
          You may recieve SMS updates from this.clone and can opt out at an time
        </Text>
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
  phoneItem: {
    backgroundColor: "#FAFAFA",
    borderColor: "#DEDEDE",
    borderRadius: 3,
    borderWidth: 1
  },
  phoneText: {
    textAlignVertical: "center",
    textAlign: "center",
    alignSelf: "stretch",
    backgroundColor: "#FAFAFA",
    borderRightColor: "#DEDEDE",
    borderRightWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 1,
    marginBottom: 9,
    color: "#606060"
  },
  bottomText: {
    marginTop: 15,
    fontSize: 13,
    textAlignVertical: "center",
    textAlign: "center",
    alignSelf: "stretch",
    color: "#DEDEDE",
    fontWeight: "bold"
  }
});
