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
    <Heading1 id="magicmove">Magic Move?</Heading1>
  </Slide>,
  <Slide key="what1">
    <Heading1 id="magicmove">Magic Move?</Heading1>
    <Heading1 />
    <Heading1 animation="fadeIn">===</Heading1>
    <Heading1 />
    <Heading1 animation="fadeIn">Shared element transition</Heading1>
  </Slide>,
  <Slide key="what2">
    <MagicMove.View id="video1">
      <Video
        source={require("../assets/ContactsAnim.mp4")}
        repeat
        style={{ width: 400, height: 600 }}
      />
    </MagicMove.View>
  </Slide>
];
