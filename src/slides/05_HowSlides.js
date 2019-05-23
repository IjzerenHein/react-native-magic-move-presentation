// @flow
import React from "react";
import {
  SlideContainer,
  SlideZoomContainer,
  Slide1,
  Slide2,
  DummySlide
} from "./support/components";
import {
  Slide,
  Code,
  MagicMove,
  Heading1,
  Heading2,
  Box,
  Column,
  Row,
  Flex
} from "../components";
import { Colors } from "../styles";
import { experimentalTransition } from "../transitions";

export default [
  <SlideContainer key={"how1"}>
    <Slide1 imageEnabled titleEnabled textEnabled />
  </SlideContainer>,
  <SlideContainer key={"how2"}>
    <Slide2 imageEnabled titleEnabled textEnabled />
  </SlideContainer>,
  <SlideZoomContainer key={"how6"}>
    <DummySlide />
    <Slide1 />
    <Slide2 />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how7"} title="Identify">
    <DummySlide />
    <Slide1 highlight />
    <Slide2 highlight />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how7.5"} title="Measure">
    <DummySlide />
    <Slide1 highlight="measure" />
    <Slide2 highlight="measure" />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how8"} title="Hide target">
    <DummySlide />
    <Slide1 />
    <Slide2 hidden highlight />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how9"} title="Hide source">
    <DummySlide />
    <Slide1 highlight hidden />
    <Slide2 hidden />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how10"} title="Render clone">
    <DummySlide />
    <Slide1 highlight="clone" />
    <Slide2 hidden />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how11"} title="Animate clone">
    <Slide1 highlight="clone" />
    <Slide2 highlight="clone" />
    <DummySlide />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how11.1"} title="Hide clone">
    <Slide1 />
    <Slide2 highlight="clone" hidden />
    <DummySlide />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how11.2"} title="Show original target">
    <Slide1 />
    <Slide2 />
    <DummySlide />
  </SlideZoomContainer>,
  <SlideContainer key={"how12"}>
    <Slide1 imageEnabled titleEnabled />
  </SlideContainer>,
  <SlideContainer key={"how13"}>
    <Slide2 imageEnabled titleEnabled textEnabled />
  </SlideContainer>,
  <Slide key={"how14"}>
    <Code>{`

// Add package & import
import * as MagicMove from 'react-native-magic-move';


// Wrap App in <MagicMove.Provider>
// Provider draws overlay on top of your app
<MagicMove.Provider>
  <App />
  // overlay is rendered here
</MagicMove.Provider>


// Wrap your screen in <MagicMove.Scene>
// Trigger transitions and measure relative position
<MagicMove.Scene>
  <View>
    ...
  </View>
</MagicMove.Scene>
`}</Code>
  </Slide>,
  <Slide key={"how15"}>
    <Code>{`

// Replace image & Text
<Image
  style={styles.image}
  source={require('./relativity.jpg')} />
<Text style={styles.heading1}>Relativity</Text>


// With MagicMove prefix and provide shared "id"
<MagicMove.Image
  id='relativityImage'
  style={styles.image}
  source={require('./relativity.jpg')} />
<MagicMove.Text
  id='relativityTitle'
  style={styles.heading1}>


// On both screens
`}</Code>
  </Slide>,
  <Slide key={"how15.2"}>
    <Code>{`

// Use animatable to show enter animations
import * as Animatable from 'react-native-animatable';


// Replace
<Text>
  Relativity is a lithograph print by the Dutch
  artist M. C. Escher, first printed in December
  1953. The first version of this work was a
  woodcut earlier that same year.
</Text>


// With
<Animatable.Text animation='fadeInUp'>
  ...
</Animatable.Text>

`}</Code>
  </Slide>,

  <Slide key={"how16"}>
    <Code>{`

// Props
<MagicMove.{View|Image|Text|...}
  id='sharedId'
  transition={MagicMove.Transition.move}
  duration={400}
  delay={0}
  easing={Easing.inOut(Easing.ease)}
  zIndex={0}
  disabled={false}
  debug={true}
  ... />

// Create custom components
const MMFastImage = MagicMove.createMagicMoveComponent(
  FastImage, {
    ComponentType: 'image'
  }
);  

`}</Code>
  </Slide>,
  <Slide key="how17.1">
    <Heading1 id="title" margins>
      Transitions
    </Heading1>
    <Heading2 id="move">Move</Heading2>
    <Heading2 id="morph">Morph</Heading2>
    <Heading2 id="dissolve">Dissolve</Heading2>
    <Heading2 id="flip">Flip X/Y</Heading2>
    <Heading2 id="squash">Squash & Stretch</Heading2>
    <Heading2 id="shrink" margins>
      Shrink & Grow
    </Heading2>
    <Heading2 id="custom">or create your own..</Heading2>
  </Slide>,
  <Slide key="how17.2">
    <Heading1 id="title" margins>
      Transitions
    </Heading1>
    <Row>
      <Row>
        <Heading2 id="move">Move</Heading2>
      </Row>
      <Row>
        <Box id="moveObject" size="small" color={Colors.blue} />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="morph">Morph</Heading2>
      </Row>
      <Row>
        <Box
          id="morphObject"
          size="small"
          color={Colors.yellow}
          transition={MagicMove.Transition.morph}
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="dissolve">Dissolve</Heading2>
      </Row>
      <Row>
        <Box
          id="dissolveObject"
          size="small"
          color={Colors.green}
          transition={MagicMove.Transition.dissolve}
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="flip">Flip X/Y</Heading2>
      </Row>
      <Row>
        <Box
          id="flipObject"
          size="small"
          color={Colors.pink}
          transition={MagicMove.Transition.flip.y}
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="squash">Squash & Stretch</Heading2>
      </Row>
      <Row>
        <Box
          id="squashObject"
          size="small"
          color={Colors.red}
          transition={MagicMove.Transition.squashAndStretch}
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="exprimental">Experimental</Heading2>
      </Row>
      <Row>
        <Box
          id="experimentalObject"
          size="small"
          color={Colors.orange}
          transition={experimentalTransition}
          useNativeClone
        />
      </Row>
      <Row />
    </Row>
  </Slide>,
  <Slide key="how17.3">
    <Heading1 margins>Transitions</Heading1>
    <Row>
      <Row>
        <Heading2 id="move">Move</Heading2>
      </Row>
      <Row />
      <Row>
        <Box id="moveObject" size="large" color={Colors.blue} />
      </Row>
    </Row>
    <Row>
      <Row>
        <Heading2 id="morph">Morph</Heading2>
      </Row>
      <Row />
      <Row>
        <Box
          id="morphObject"
          size="round"
          color={Colors.pink}
          transition={MagicMove.Transition.morph}
        />
      </Row>
    </Row>
    <Row>
      <Row>
        <Heading2 id="dissolve">Dissolve</Heading2>
      </Row>
      <Row />
      <Row>
        <Box
          id="dissolveObject"
          size="round"
          color={Colors.yellow}
          transition={MagicMove.Transition.dissolve}
        />
      </Row>
    </Row>
    <Row>
      <Row>
        <Heading2 id="flip">Flip X/Y</Heading2>
      </Row>
      <Row />
      <Row>
        <Box
          id="flipObject"
          size="large"
          color={Colors.green}
          transition={MagicMove.Transition.flip.x}
        />
      </Row>
    </Row>
    <Row>
      <Row>
        <Heading2 id="squash">Squash & Stretch</Heading2>
      </Row>
      <Row />
      <Row>
        <Box
          id="squashObject"
          size="large"
          color={Colors.red}
          transition={MagicMove.Transition.squashAndStretch}
        />
      </Row>
    </Row>
    <Row>
      <Row>
        <Heading2 id="exprimental">Experimental</Heading2>
      </Row>
      <Row />
      <Row>
        <Box
          id="experimentalObject"
          size="large"
          color={Colors.orange}
          transition={experimentalTransition}
          useNativeClone
        />
      </Row>
    </Row>
  </Slide>,
  <Slide key="how17.4">
    <Heading1 id="title" margins>
      debug = true
    </Heading1>
    <Row>
      <Row>
        <Heading2 id="move">Move</Heading2>
      </Row>
      <Row>
        <Box id="moveObject" size="small" color={Colors.blue} debug />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="morph">Morph</Heading2>
      </Row>
      <Row>
        <Box
          id="morphObject"
          size="small"
          color={Colors.yellow}
          transition={MagicMove.Transition.morph}
          debug
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="dissolve">Dissolve</Heading2>
      </Row>
      <Row>
        <Box
          id="dissolveObject"
          size="small"
          color={Colors.green}
          transition={MagicMove.Transition.dissolve}
          debug
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="flip">Flip X/Y</Heading2>
      </Row>
      <Row>
        <Box
          id="flipObject"
          size="small"
          color={Colors.pink}
          transition={MagicMove.Transition.flip.y}
          debug
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="squash">Squash & Stretch</Heading2>
      </Row>
      <Row>
        <Box
          id="squashObject"
          size="small"
          color={Colors.red}
          transition={MagicMove.Transition.squashAndStretch}
          debug
        />
      </Row>
      <Row />
    </Row>
    <Row>
      <Row>
        <Heading2 id="exprimental">Experimental</Heading2>
      </Row>
      <Row>
        <Box
          id="experimentalObject"
          size="small"
          color={Colors.orange}
          transition={experimentalTransition}
          useNativeClone
          debug
        />
      </Row>
      <Row />
    </Row>
  </Slide>
];
