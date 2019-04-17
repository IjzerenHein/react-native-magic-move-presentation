// @flow
import React from "react";
import slides from "./slides";
import { Presentation } from "./components";
import * as MagicMove from "react-native-magic-move";

export const App = () => (
  <MagicMove.Provider>
    <Presentation>{slides}</Presentation>
  </MagicMove.Provider>
);
