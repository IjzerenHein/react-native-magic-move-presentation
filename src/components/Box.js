// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MasterSlide } from "./MasterSlide";
import * as MagicMove from "react-native-magic-move";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 16
  },
  smallSize: {
    width: 100,
    height: 50
  },
  largeSize: {
    width: 200,
    height: 100
  },
  roundSize: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
});

export class Box extends Component<any> {
  render() {
    const { style, id, size, color, ...otherProps } = this.props;
    return (
      <MagicMove.View
        id={id}
        style={[
          styles.container,
          color ? { backgroundColor: color } : undefined,
          size ? styles[`${size}Size`] : undefined,
          style
        ]}
        useNativeClone={false}
        {...otherProps}
      />
    );
  }
}
