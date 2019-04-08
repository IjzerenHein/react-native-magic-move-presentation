// @flow
import React from "react";
import * as MagicMove from "react-native-magic-move";
import * as Animatable from "react-native-animatable";
import { TransitionProps } from "./Animation";

export interface ImageProps {
  id?: string;
}

export const Image = (props: ImageProps) => {
  const { id, ...otherProps } = props;
  return id ? (
    <MagicMove.Image id={id} {...TransitionProps} {...otherProps} />
  ) : (
    <Animatable.Image {...otherProps} />
  );
};
