// @flow
import React from "react";
import {
  Slide,
  Heading1,
  Heading2,
  Caption,
  Image,
  Column,
  Flex,
  Phone,
  MagicMove
} from "../components";
import { sourceScaleTransition } from "../transitions";
import Video from "react-native-video";

export default [
  // Slide 0
  <Slide key="image0">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Flex />
        <Image
          id="image1"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 5
          }}
          resizeMode="cover"
          transition={sourceScaleTransition}
        />
      </Phone>
    </Column>
  </Slide>,
  // Slide 1
  <Slide key="image1">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Image
          id="image1"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 2
          }}
          resizeMode="cover"
          transition={sourceScaleTransition}
        />
        <Flex />
      </Phone>
    </Column>
  </Slide>,
  /////////////////////////////////////
  // Scale, move & Dissolve
  ///////////////////////////////////////
  <Slide key="image2">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Flex />
        <Image
          id="image2"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 5
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.dissolve}
        />
      </Phone>
    </Column>
  </Slide>,
  // Slide 1
  <Slide key="image3">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Image
          id="image2"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 2
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.dissolve}
        />
        <Flex />
      </Phone>
    </Column>
  </Slide>,
  /////////////////////////////////////
  // Resize mode correction
  ///////////////////////////////////////
  <Slide key="image4">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Flex />
        <Image
          id="image3"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 5
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.move}
        />
      </Phone>
    </Column>
  </Slide>,
  <Slide key="image5">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Image
          id="image3"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 2
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.move}
        />
        <Flex />
      </Phone>
    </Column>
  </Slide>,
  /////////////////////////////////////
  // Border-radius correction
  ///////////////////////////////////////
  <Slide key="image6">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Flex />
        <Image
          id="image4"
          source={require("../assets/cycle.jpg")}
          style={{
            marginLeft: Phone.WIDTH * 0.2,
            marginBottom: Phone.WIDTH * 0.2,
            width: Phone.WIDTH * 0.6,
            height: Phone.WIDTH * 0.6,
            borderRadius: Phone.WIDTH * 0.3
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.move}
        />
      </Phone>
    </Column>
  </Slide>,
  <Slide key="image7">
    <Heading1>Image transitions</Heading1>
    <Column>
      <Phone>
        <Image
          id="image4"
          source={require("../assets/cycle.jpg")}
          style={{
            width: Phone.WIDTH,
            height: Phone.HEIGHT / 2
          }}
          resizeMode="cover"
          transition={MagicMove.Transition.move}
        />
        <Flex />
      </Phone>
    </Column>
  </Slide>,
  <Slide key="image8">
    <Video
      source={require("../assets/vickyparking.mp4")}
      repeat
      style={{ width: 324, height: 700 }}
    />
  </Slide>
];

// 828 × 1792
