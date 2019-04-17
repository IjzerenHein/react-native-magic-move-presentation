// @flow
import React from "react";
import {
  SlideContainer,
  SlideZoomContainer,
  Slide1,
  Slide2,
  DummySlide
} from "./components";

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
  <SlideContainer key={"how14"}>
    <Slide1 imageEnabled titleEnabled />
  </SlideContainer>,
  <SlideContainer key={"how15"}>
    <Slide2 imageEnabled titleEnabled textEnabled />
  </SlideContainer>
];
