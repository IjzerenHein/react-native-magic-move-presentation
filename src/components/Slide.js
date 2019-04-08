// @flow
import React, { Component } from "react";
import { MasterSlide } from "./MasterSlide";

interface PropsType {
  title?: string;
}

export class Slide extends Component<PropsType> {
  render() {
    return <MasterSlide {...this.props} />;
  }
}
