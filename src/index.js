// @flow
import React from "react";
import { Slide1, Slide2 } from "./slides";
import { Presentation } from "./components";

export const App = () => (
  <Presentation>
    <Slide1 />
    <Slide2 />
  </Presentation>
);
