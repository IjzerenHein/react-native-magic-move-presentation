// @flow
import React from "react";
import { Text, StyleSheet } from "react-native";
import * as MagicMove from "react-native-magic-move";

const baseFont = {
  // TODO
};

const styles = StyleSheet.create({
  heading1: {
    ...baseFont,
    fontSize: 60,
    textAlign: "center"
  },
  caption: {
    ...baseFont,
    fontSize: 28,
    color: "#808080",
    textAlign: "center"
  }
});

export interface TextProps extends Text.propTypes {
  light?: boolean;
  margins?: boolean;
  color?: string;
}

export const Heading1 = (props: TextProps) => {
  const { children, style, color, margins, ...otherProps } = props;
  return (
    <MagicMove.Text
      style={[styles.heading1, color ? { color } : undefined, style]}
      {...otherProps}
    >
      {children}
    </MagicMove.Text>
  );
};

export const Caption = (props: TextProps) => {
  const { children, style, color, margins, ...otherProps } = props;
  return (
    <MagicMove.Text
      style={[styles.caption, color ? { color } : undefined, style]}
      {...otherProps}
    >
      {children}
    </MagicMove.Text>
  );
};
