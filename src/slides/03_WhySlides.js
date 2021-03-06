// @flow
import React from "react";
import {
  Slide,
  Heading1,
  Heading2,
  Column,
  List,
  Row,
  Flex,
  MagicMove
} from "../components";
import { sourceScaleTransition } from "../transitions";
import Video from "react-native-video";

export default [
  <Slide key="why1">
    <Row>
      <MagicMove.View id="video1" transition={sourceScaleTransition}>
        <Video
          source={require("../assets/ContactsAnim.mp4")}
          repeat
          style={{ width: 400, height: 600 }}
        />
      </MagicMove.View>
      <Column>
        <Heading1 id="meaning">Communicate context</Heading1>
      </Column>
    </Row>
  </Slide>,
  <Slide key="why2">
    <Row>
      <Video
        source={require("../assets/ContactsAnim.mp4")}
        repeat
        style={{ width: 400, height: 600 }}
      />
      <Column>
        <Heading1 id="meaning">Communicate context</Heading1>
        <Heading1 />
        <Heading1 animation="fadeInUp">Sense of delight</Heading1>
      </Column>
    </Row>
  </Slide>
];
