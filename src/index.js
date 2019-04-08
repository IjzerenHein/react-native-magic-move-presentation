// @flow
import React from "react";
import { Slide1, Slide2, MeSlide, MeSlide2, howSlides } from "./slides";
import { Presentation } from "./components";
import * as MagicMove from "react-native-magic-move";

export const App = () => (
  <MagicMove.Provider>
    <Presentation>
      {howSlides}
      <Slide1 />
      <MeSlide />
      <Slide2 />
    </Presentation>
  </MagicMove.Provider>
);
