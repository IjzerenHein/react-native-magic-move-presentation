// @flow
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from "../styles";
import * as MagicMove from "react-native-magic-move";
import * as Animatable from "react-native-animatable";
import { TransitionProps } from "./Animation";

const baseFont = {
  // TODO
};

const styles = StyleSheet.create({
  heading1: {
    ...baseFont,
    fontSize: 60
  },
  heading2: {
    ...baseFont,
    fontSize: 40
  },
  heading3: {
    ...baseFont,
    fontSize: 30
  },
  caption: {
    ...baseFont,
    fontSize: 28,
    color: Colors.gray
  }
});

export interface TextProps extends Text.propTypes {
  id?: string;
  light?: boolean;
  margins?: boolean;
  color?: string;
}

function createTextComponent(baseStyle: any) {
  return (props: TextProps) => {
    const {
      children,
      id,
      animation,
      style,
      color,
      margins,
      ...otherProps
    } = props;

    const fullStyle = [baseStyle, color ? { color } : undefined, style];

    if (id) {
      return (
        <MagicMove.Text
          id={id}
          style={fullStyle}
          {...TransitionProps}
          {...otherProps}
        >
          {children}
        </MagicMove.Text>
      );
    } else if (animation) {
      return (
        <Animatable.Text
          style={fullStyle}
          animation={animation}
          {...otherProps}
        >
          {children}
        </Animatable.Text>
      );
    } else {
      return (
        <Text style={fullStyle} {...otherProps}>
          {children}
        </Text>
      );
    }
  };
}

export const Heading1 = createTextComponent(styles.heading1);
export const Heading2 = createTextComponent(styles.heading2);
export const Heading3 = createTextComponent(styles.heading3);
export const Caption = createTextComponent(styles.caption);
