// @flow
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Heading3 } from "./Text";
import { Colors } from "../styles";
import * as MagicMove from "react-native-magic-move";
import { TransitionProps } from "./Animation";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
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
  showHeader?: boolean;
  enabled?: boolean;
  style: any;
  id?: string;
}

export class MasterSlide extends Component<PropsType> {
  render() {
    const { children, style, showHeader, id, enabled } = this.props;

    const content = (
      <React.Fragment>
        {children}
        {showHeader ? (
          <View style={styles.header}>
            <Heading3
              id="presentation-title"
              color={Colors.gray}
              disabled={!enabled}
            >
              react-native-magic-move
            </Heading3>
            <Heading3
              id="presentation-subtitle"
              disabled={!enabled}
              transition={MagicMove.Transition.shrinkAndGrow}
            >
              🐰🎩✨
            </Heading3>
          </View>
        ) : (
          undefined
        )}
      </React.Fragment>
    );

    return id ? (
      <MagicMove.View
        style={[styles.container, style]}
        id={id}
        {...TransitionProps}
      >
        {content}
      </MagicMove.View>
    ) : (
      <View style={[styles.container, style]}>{content}</View>
    );
  }
}
