// @flow
import React from "react";
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

export default [
  <Slide key="what0">
    <Heading2>
      Animation is a method in which pictures are manipulated to appear as
      moving images
    </Heading2>
    <List>
      <Heading2>Shared element transition</Heading2>
      <Heading2>• react-navigation</Heading2>
      <Heading2>• shape-shift</Heading2>
    </List>
  </Slide>,
  <Slide key="what1">
    <Video
      source={require("../assets/ContactsAnim.mp4")}
      repeat
      style={{ width: 400, height: 600 }}
    />
  </Slide>,
  <Slide key="what2">
    <MagicMove.View id="video1">
      <Video
        source={require("../assets/ContactsAnim.mp4")}
        repeat
        paused
        style={{ width: 400, height: 600 }}
      />
    </MagicMove.View>
  </Slide>
];
