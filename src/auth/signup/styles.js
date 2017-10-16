import React, { Component } from "react";
import { StyleSheet, Dimensions } from "react-native";
export default StyleSheet.flatten({
  iconContainer: {
    marginTop: 50,
    width: 200,
    height: 200,
    borderRadius: 95,
    borderWidth: 2,
    borderColor: "#000"
  },
  iconStyle: {
    fontSize: 150,
    marginTop: 30
  },
  segmentContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20
  },
  segmentTabs: {
    width: Dimensions.get("window").width / 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderWidth: 2
  }
});
