// @flow
import React from "react";
import { Slide, ZoomContainer, Slide1, Slide2, DummySlide } from "./components";

export const howSlides = [
  <Slide key={"how1"}>
    <Slide1 />
  </Slide>,
  <ZoomContainer key={"how2"}>
    <Slide1 />
  </ZoomContainer>,
  <ZoomContainer key={"how3"}>
    <DummySlide />
    <Slide1 />
    <Slide2 animation="fadeIn" />
  </ZoomContainer>,
  <ZoomContainer key={"how4"}>
    <Slide1 />
    <Slide2 />
    <DummySlide />
  </ZoomContainer>,
  <ZoomContainer key={"how5"}>
    <DummySlide />
    <Slide1 />
    <Slide2 />
  </ZoomContainer>
];
