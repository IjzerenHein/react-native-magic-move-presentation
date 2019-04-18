// @flow
import React from "react";
import {
  SlideContainer,
  SlideZoomContainer,
  Slide1,
  Slide2,
  DummySlide
} from "./components";
import { Slide, Code, MagicMove } from "../../components";

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
  <SlideZoomContainer key={"how7"} title="Measure">
    <DummySlide />
    <Slide1 highlight />
    <Slide2 highlight />
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
    <Slide1 highlight />
    <Slide2 hidden />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how11"} title="Animate">
    <Slide1 highlight />
    <Slide2 highlight />
    <DummySlide />
  </SlideZoomContainer>,
  <SlideContainer key={"how12"}>
    <Slide1 imageEnabled />
  </SlideContainer>,
  <SlideContainer key={"how13"}>
    <Slide2 imageEnabled titleEnabled />
  </SlideContainer>,
  <Slide key={"how14"}>
    <Code>{`

import * as MagicMove from 'react-native-magic-move';



// Wrap App in <MagicMove.Provider>
// Provider draws overlay on top of your app
<MagicMove.Provider>
  <App />
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


// Replace image
<Image
  style={styles.image}
  source={require('./relativity.jpg')} />



// With MagicMove.Image and provide shared "id"
<MagicMove.Image
  id='relativityImage'
  style={styles.image}
  source={require('./relativity.jpg')} />



// On both screens
`}</Code>
  </Slide>,
  <SlideContainer key={"how14"}>
    <Slide1 imageEnabled titleEnabled />
  </SlideContainer>,
  <SlideContainer key={"how15"}>
    <Slide2 imageEnabled titleEnabled />
  </SlideContainer>,
  <Slide key={"how16"}>
    <Code>{`



// Replace text
<Text style={styles.heading1} />




// With MagicMove.Text and provide shared "id"
<MagicMove.Text
  id='relativityTitle'
  style={styles.heading1} />



// On both screens
`}</Code>
  </Slide>,
  <Slide key={"how17"}>
    <Code>{`



// Customize transition

<MagicMove.{View|Image|Text}
  id='sharedId'
  transition={move|flip|morph|dissolve|etc..}
  duration={400}
  delay={0}
  easing={Easing.inOut(Easing.ease)}
  zIndex={0}
  disabled={false}
  debug={true} />

`}</Code>
  </Slide>,
  <SlideContainer key={"how18.3"}>
    <Slide1 imageEnabled titleEnabled debug />
  </SlideContainer>,
  <SlideContainer key={"how19"}>
    <Slide2 imageEnabled titleEnabled debug />
  </SlideContainer>,
  <Slide key={"how20"}>
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
  <SlideContainer key={"how21"}>
    <Slide1 imageEnabled titleEnabled textEnabled />
  </SlideContainer>,
  <SlideContainer key={"how22"}>
    <Slide2 imageEnabled titleEnabled textEnabled />
  </SlideContainer>
];
