// @flow
import React, { Component } from "react";
import { MasterSlide } from "./MasterSlide";
import * as MagicMove from "react-native-magic-move";

interface PropsType {
  children: any;
  hideHeader?: boolean;
}

export class Slide extends Component<PropsType> {
  render() {
    return (
      <MagicMove.Scene>
        <MasterSlide {...this.props} />
      </MagicMove.Scene>
    );
  }
}
