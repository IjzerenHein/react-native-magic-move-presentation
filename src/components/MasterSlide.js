// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

interface PropsType {
  children: any;
  title: ?string;
}

export class MasterSlide extends Component<PropsType> {
  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}
