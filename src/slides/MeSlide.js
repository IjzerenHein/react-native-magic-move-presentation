// @flow
import React from "react";
import { Slide, Heading1, Caption, Image } from "../components";

export const MeSlide = () => (
  <Slide>
    <Image source={require("../assets/logo.png")} animation="slideInUp" />
    <Heading1 animation="fadeIn">Hein Rutjes</Heading1>
    <Caption animation="fadeIn">github/IjzerenHein</Caption>
  </Slide>
);
