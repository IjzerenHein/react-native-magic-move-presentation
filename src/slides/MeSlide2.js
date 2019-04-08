// @flow
import React from "react";
import { View, StyleSheet } from "react-native";
import { Slide, Heading1, Caption, Row, Column } from "../components";

export const MeSlide2 = () => (
  <Slide title={"Slide 2"}>
    <Row>
      <Column>
        <Heading1 id="title">Hein Rutjes</Heading1>
        <Caption id="caption">Freelance App developer</Caption>
      </Column>
      <Column>
        <Heading1 id="title2">IjzerenHein</Heading1>
        <Caption id="caption2">github/IjzerenHein</Caption>
      </Column>
    </Row>
  </Slide>
);
