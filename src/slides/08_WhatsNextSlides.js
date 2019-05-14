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
    return <Heading2 margins style={styles.light} {...otherProps} />;
  }
};

export default [
  <Slide key="next1">
    <Heading1 id="whatsnext">What's next</Heading1>
    <Heading1 />
    <List>
      <Li id="sync" highlight>
        👯‍♀️Synchronized animations
      </Li>
      <Li id="gesture">👋 Gesture tracking</Li>
      <Li id="enter">🛷 Enter / leave animations</Li>
      <Li id="glitch">🐞 Glitch free</Li>
    </List>
  </Slide>,
  <Slide key="next2">
    <Heading1 id="whatsnext">What's next</Heading1>
    <Heading1 />
    <List>
      <Li id="sync">👯‍♀️Synchronized animations</Li>
      <Li id="gesture" highlight>
        👋 Gesture tracking
      </Li>
      <Li id="enter">🛷 Enter / leave animations</Li>
      <Li id="glitch">🐞 Glitch free</Li>
    </List>
  </Slide>,
  <Slide key="next3">
    <Heading1 id="whatsnext">What's next</Heading1>
    <Heading1 />
    <List>
      <Li id="sync">👯‍♀️Synchronized animations</Li>
      <Li id="gesture">👋 Gesture tracking</Li>
      <Li id="enter" highlight>
        🛷 Enter / leave animations
      </Li>
      <Li id="glitch">🐞 Glitch free</Li>
    </List>
  </Slide>,
  <Slide key="next4">
    <Heading1 id="whatsnext">What's next</Heading1>
    <Heading1 />
    <List>
      <Li id="sync">👯‍♀️Synchronized animations</Li>
      <Li id="gesture">👋 Gesture tracking</Li>
      <Li id="enter">🛷 Enter / leave animations</Li>
      <Li id="glitch" highlight>
        🐞 Glitch free
      </Li>
    </List>
  </Slide>
];
