// @flow
import React from "react";
import { Slide, Heading1, Caption, Image } from "../components";

export default () => (
  <Slide enabled showHeader>
    <Image
      source={require("../assets/logo.png")}
      animation="fadeInUp"
      duration={1000}
    />
    <Heading1 animation="fadeIn">Hein Rutjes</Heading1>
    <Caption animation="fadeIn">github/IjzerenHein</Caption>
  </Slide>
);
