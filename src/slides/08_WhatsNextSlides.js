// @flow
import React from "react";
import { StyleSheet } from "react-native";
import {
  Slide,
  Heading1,
  Heading2,
  Row,
  Column,
  MagicMove,
  List
} from "../components";
import Video from "react-native-video";

const styles = StyleSheet.create({
  light: {
    opacity: 0.5
  }
});

const Li = (props: any) => {
  const { highlight, ...otherProps } = props;
  if (highlight) {
    return <Heading1 margins {...otherProps} />;
  } else {
    return <Heading2 margins {...otherProps} />;
  }
};

export default [
  <Slide key="next1">
    <Heading1 id="whatsnext">What's next</Heading1>
    <Heading1 />
    <List>
      <Li id="sync">👯‍♀️Synchronized transitions</Li>
      <Li id="enter">🛷 Enter / leave animations</Li>
      <Li id="scene">🔍 Scene effects</Li>
      <Li id="glitch">🧡 Optimisations</Li>
    </List>
  </Slide>
];
