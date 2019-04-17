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
  sourceScaleTransition,
  MagicMove
} from "../components";

export default [
  // Slide 0
  <Slide key="image0">
    <Heading2>Images</Heading2>
    <Caption>Move & scale</Caption>
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
    <Heading2>Images</Heading2>
    <Caption>Move & scale</Caption>
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
    <Heading2>Images</Heading2>
    <Caption>Move, scale & dissolve</Caption>
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
          transition={MagicMove.Transition.morph}
        />
      </Phone>
    </Column>
  </Slide>,
  // Slide 1
  <Slide key="image3">
    <Heading2>Images</Heading2>
    <Caption>Move, scale & dissolve</Caption>
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
          transition={MagicMove.Transition.morph}
        />
        <Flex />
      </Phone>
    </Column>
  </Slide>,
  /////////////////////////////////////
  // Resize mode correction
  ///////////////////////////////////////
  <Slide key="image4">
    <Heading2>Images</Heading2>
    <Caption>Resize-mode correction</Caption>
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
    <Heading2>Images</Heading2>
    <Caption>Resize-mode correction</Caption>
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
    <Heading2>Images</Heading2>
    <Caption>Border-radius correction</Caption>
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
    <Heading2>Images</Heading2>
    <Caption>Border-radius correction</Caption>
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
  </Slide>
];
