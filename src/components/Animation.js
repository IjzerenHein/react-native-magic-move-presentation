// @flow
import { Easing } from "react-native";

const easeInOut = Easing.bezier(0.42, 0, 0.58, 1);
const easeElastic = Easing.elastic(1);

export const TransitionProps = {
  easing: easeInOut,
  duration: 700
};
