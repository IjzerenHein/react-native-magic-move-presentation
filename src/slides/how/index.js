// @flow
import React from "react";
import {
  Slide,
  SlideZoomContainer,
  Slide1,
  Slide2,
  DummySlide
} from "./components";

export const howSlides = [
  <Slide key={"how1"}>
    <Slide1 />
  </Slide>,
  <SlideZoomContainer key={"how2"}>
    <Slide1 />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how3"}>
    <DummySlide />
    <Slide1 />
    <Slide2 animation="fadeIn" />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how4"}>
    <Slide1 />
    <Slide2 />
    <DummySlide />
  </SlideZoomContainer>,
  <SlideZoomContainer key={"how5"}>
    <DummySlide />
    <Slide1 />
    <Slide2 />
  </SlideZoomContainer>
];
