import React from "react";
import { View, Text } from "native-base";
import Navigator from "./navigator";
export default class ActivitySummary extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Navigator />;
    }
}
