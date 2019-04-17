// @flow
import React from "react";
import StartSlide from "./00_StartSlide";
import MeSlide from "./01_MeSlide";
import whatSlides from "./02_WhatSlides";
import whySlides from "./03_WhySlides";
import libSlides from "./04_LibSlides";
import howSlides from "./05_how";
import apiSlides from "./06_APISlides";
import imageSlides from "./08_ImageSlides";

export default [
  <StartSlide key={0} />,
  <MeSlide key={1} />,
  ...whatSlides,
  ...whySlides,
  ...libSlides,
  ...howSlides,
  ...apiSlides,
  ...imageSlides
];
