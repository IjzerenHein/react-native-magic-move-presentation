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
      But, it's kinda tricky to do
    </Heading1>
    <List>
      <Heading2
        id="listItem1"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        💃 Complex router & view interplay
      </Heading2>
      <Heading2
        id="listItem2"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        ⏰ Timing sensitive
      </Heading2>
      <Heading2
        id="listItem3"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        🤯 Keep sanity writing views
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
        🐰 standalone solution using overlays
      </Heading2>
      <Heading2
        id="listItem2"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        ✨ react-navigation binding
      </Heading2>
      <Heading2
        id="listItem3"
        margins
        transition={MagicMove.Transition.dissolve}
      >
        🎩 variety transition effects
      </Heading2>
      <Heading2 margins animation="fadeInUp">
        🏎️ optional native optimisations
      </Heading2>
    </List>
  </Slide>,
  <Slide key="lib2">
    <Heading1 margins>Disclaimer!</Heading1>
    <Image source={require("../assets/break.gif")} />
  </Slide>
];
