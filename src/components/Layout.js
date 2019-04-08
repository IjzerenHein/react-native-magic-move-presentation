// @flow
import React from "react";
import { View, StyleSheet } from "react-native";

interface PropsType {
  style?: any;
}

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export const Column = (props: PropsType) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.column, style]} {...otherProps} />;
};

export const Row = (props: PropsType) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.row, style]} {...otherProps} />;
};
