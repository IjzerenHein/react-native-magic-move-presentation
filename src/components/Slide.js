// @flow
import React, { Component } from "react";
import { MasterSlide } from "./MasterSlide";
import * as MagicMove from "react-native-magic-move";

export class Slide extends Component<any> {
  render() {
    return (
      <MagicMove.Scene>
        <MasterSlide {...this.props} />
      </MagicMove.Scene>
    );
  }
}
