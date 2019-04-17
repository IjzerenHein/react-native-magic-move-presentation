// @flow
import React from "react";
import { View, ImageBackground } from "react-native";
import {
  Slide,
  Heading1,
  Heading3,
  Caption,
  Image,
  Row,
  Column
} from "../components";
import * as MagicMove from "react-native-magic-move";

export default () => (
  <Slide>
    <Caption style={{ alignSelf: "flex-end" }}>April 18, Eindhoven.js</Caption>
    <Column style={{ justifyContent: "flex-end" }}>
      <Heading1 id="presentation-title">react-native-magic-move</Heading1>
      <Caption id="presentation-subtitle">
        Create magical move transitions between scenes in react-native 🐰🎩✨
      </Caption>
    </Column>
    <Column style={{ justifyContent: "flex-start" }}>
      <View
        style={{
          flexDirection: "row",
          height: 300,
          padding: 20,
          paddingBottom: 0
        }}
      >
        <ImageBackground
          source={require("../assets/react_native_logo.png")}
          style={{ flex: 1.3 }}
          resizeMode="contain"
        />
        <ImageBackground
          source={require("../assets/wizard.jpg")}
          style={{ flex: 1 }}
          resizeMode="contain"
        />
      </View>
    </Column>
  </Slide>
);
