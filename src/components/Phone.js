// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles";

interface PropsType {
  style?: any;
}

const WIDTH = 300;
const HEIGHT = 600;

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT,
    borderWidth: 1,
    borderColor: Colors.blue,
    backgroundColor: Colors.lightBlue,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export const Phone = (props: PropsType) => {
  const { style, ...otherProps } = props;
  return <View style={[styles.container, style]} {...otherProps} />;
};

Phone.WIDTH = WIDTH;
Phone.HEIGHT = HEIGHT;
