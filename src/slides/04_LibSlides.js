// @flow
import React from "react";
import {
  Slide,
  Heading1,
  Heading2,
  List,
  Image,
  MagicMove
} from "../components";

export default [
  <Slide key="lib0">
    <Heading1
      id="slideTitle"
      margins
      transition={MagicMove.Transition.dissolve}
    >
      Challenges
    </Heading1>
    <List>
      <Heading2
        id="listItem1"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        💃 Router & view interplay
      </Heading2>
      <Heading2
        id="listItem2"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        🍕 Shared element ownership
      </Heading2>
      <Heading2
        id="listItem3"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        ⛵️ Seamless transitions
      </Heading2>
    </List>
  </Slide>,
  <Slide key="lib1">
    <Heading1
      id="slideTitle"
      margins
      transition={MagicMove.Transition.dissolve}
    >
      react-native-magic-move
    </Heading1>
    <List>
      <Heading2 id="listItem1" margins transition={MagicMove.Transition.flip.x}>
        🐰 Standalone solution using clones
      </Heading2>
      <Heading2
        id="listItem2"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        🎩 Variety transition effects
      </Heading2>
      <Heading2
        id="listItem3"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        🏎️ Optional native optimisations
      </Heading2>
      <Heading2 animation="fadeInUp" margins>
        ✨ react-navigation binding
      </Heading2>
    </List>
  </Slide>,
  <Slide key="lib2">
    <Heading1 margins>Disclaimer!</Heading1>
    <Image source={require("../assets/break.gif")} />
  </Slide>
];
