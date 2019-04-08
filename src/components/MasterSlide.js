// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Heading3 } from "./Text";
import { Colors } from "../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    position: "absolute",
    left: 20,
    top: 8,
    right: 0,
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center"
  }
});

interface PropsType {
  children: any;
  hideHeader?: boolean;
}

export class MasterSlide extends Component<PropsType> {
  render() {
    const { children, hideHeader } = this.props;
    return (
      <View style={styles.container}>
        {children}
        {!hideHeader ? (
          <View style={styles.header}>
            <Heading3 id="presentation-title" color={Colors.gray}>
              react-native-magic-move
            </Heading3>
            <Heading3 id="presentation-subtitle">🐰🎩✨</Heading3>
          </View>
        ) : (
          undefined
        )}
      </View>
    );
  }
}
