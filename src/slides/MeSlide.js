// @flow
import React from "react";
import { Image } from "react-native";
import { Slide, Heading1, Caption } from "../components";

export const MeSlide = () => (
  <Slide>
    <Image source={require("../assets/logo.png")} />
    <Heading1 id="title">Hein Rutjes</Heading1>
    <Caption id="caption">github/IjzerenHein</Caption>
  </Slide>
);
