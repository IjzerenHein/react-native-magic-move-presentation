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
  },
  flex: {
    flex: 1
  },
  list: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
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

export const Flex = (props: PropsType) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.flex, style]} {...otherProps} />;
};

export const List = (props: PropsType) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.list, style]} {...otherProps} />;
};
