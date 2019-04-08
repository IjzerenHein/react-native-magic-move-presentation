// @flow
import React from "react";
import { Slide, Heading1, Caption } from "../components";
import * as MagicMove from "react-native-magic-move";

export const Slide1 = () => (
  <Slide hideHeader>
    <Heading1 id="presentation-title" transition={MagicMove.Transition.flip}>
      react-native-magic-move
    </Heading1>
    <Caption id="presentation-subtitle">
      Create magical move transitions between scenes in react-native 🐰🎩✨
    </Caption>
  </Slide>
);
