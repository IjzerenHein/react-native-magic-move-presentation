// @flow
import React from "react";
import { Slide, Heading1, Heading2, Heading3, List } from "../components";
import { Colors } from "../styles";

export default [
  <Slide key="thx1">
    <Heading1 />
    <Heading1 />
    <Heading1 />
    <Heading1 />
    <Heading1>Thank you 🐰</Heading1>
    <Heading2 margins color={Colors.blue}>
      github.com/IjzerenHein/react-native-magic-move
    </Heading2>
    <Heading1 />
    <Heading1 />
    <Heading2 color={Colors.gray}>Presentation source</Heading2>
    <Heading3 margins color={Colors.blue}>
      github.com/IjzerenHein/react-native-magic-move-presentation
    </Heading3>
  </Slide>
];
