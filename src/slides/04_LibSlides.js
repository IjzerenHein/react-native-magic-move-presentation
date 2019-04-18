// @flow
import React from "react";
import { Slide, Heading1, Heading2, List, Image } from "../components";

export default [
  <Slide key="lib1">
    <Heading1 margins>react-native-magic-move</Heading1>
    <List>
      <Heading2 margins>🐰 generic solution</Heading2>
      <Heading2 margins>✨ react-navigation</Heading2>
      <Heading2 margins>🎩 uses overlays</Heading2>
      <Heading2 margins>🏎️ native optimisations</Heading2>
    </List>
  </Slide>,
  <Slide key="lib2">
    <Heading1 margins>Disclaimer!</Heading1>
    <Image source={require("../assets/break.gif")} />
  </Slide>
];
