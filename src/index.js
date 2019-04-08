// @flow
import React from "react";
import { Slide1, Slide2 } from "./slides";
import { Presentation } from "./components";
import * as MagicMove from "react-native-magic-move";

export const App = () => (
  <MagicMove.Provider>
    <Presentation>
      <Slide1 />
      <Slide2 />
    </Presentation>
  </MagicMove.Provider>
);
