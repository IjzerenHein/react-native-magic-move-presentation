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
  MagicMove,
  sourceScaleTransition
} from "../components";
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
        <Heading1 id="meaning">Contextual meaning</Heading1>
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
        <Heading1 id="meaning">Contextual meaning</Heading1>
        <Heading1 />
        <Heading1 id="delight">Delightful</Heading1>
      </Column>
    </Row>
  </Slide>,
  <Slide key="why3">
    <Row>
      <Video
        source={require("../assets/ContactsAnim.mp4")}
        repeat
        style={{ width: 400, height: 600 }}
      />
      <Column>
        <Heading1 id="meaning">Contextual meaning</Heading1>
        <Heading1 />
        <Heading1 id="delight">Delightful</Heading1>
        <Heading1 />
        <Heading1>Sense of activity</Heading1>
      </Column>
    </Row>
  </Slide>,
  <Slide key="why4">
    <Heading1 margins>But, it's hard to do</Heading1>
    <List>
      <Heading2 margins>💃 Router & view interplay</Heading2>
      <Heading2 margins>🤯 Keep sanity writing views</Heading2>
    </List>
  </Slide>
];
