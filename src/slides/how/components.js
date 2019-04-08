// @flow
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Slide as BaseSlide,
  Heading1,
  Heading2,
  TransitionProps
} from "../../components";
import { Colors } from "../../styles";
import * as MagicMove from "react-native-magic-move";
import * as Animatable from "react-native-animatable";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    alignItems: undefined,
    flexDirection: "row"
  },
  leftOverlay: {
    position: "absolute",
    left: 0,
    top: HEIGHT * 0.2,
    bottom: HEIGHT * 0.2,
    width: WIDTH * 0.35,
    //backgroundColor: "#00000030"
    borderRightWidth: 1,
    borderColor: "green"
  },
  rightOverlay: {
    position: "absolute",
    right: 0,
    top: HEIGHT * 0.2,
    bottom: HEIGHT * 0.2,
    width: WIDTH * 0.35,
    borderLeftWidth: 1,
    borderColor: "green"
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: WIDTH * 0.2,
    right: WIDTH * 0.2,
    height: HEIGHT * 0.35,
    borderBottomWidth: 1,
    borderColor: "green"
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: WIDTH * 0.2,
    right: WIDTH * 0.2,
    height: HEIGHT * 0.35,
    borderTopWidth: 1,
    borderColor: "green"
  },
  content: {
    transform: [{ scale: 0.3 }],
    flexDirection: "row",
    width: WIDTH * 3,
    justifyContent: "center"
  },
  slideContainer: {
    width: WIDTH
  },
  slideContent: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center"
  }
});

export const DummySlide = () => <View style={styles.slideContainer} />;

export const Slide1 = (props: any) => (
  <MagicMove.View id="howslide1" style={styles.slideContainer}>
    <Animatable.View style={styles.slideContent} {...props}>
      <Heading1>Slide 1</Heading1>
    </Animatable.View>
  </MagicMove.View>
);

export const Slide2 = (props: any) => (
  <MagicMove.View id="howslide2" style={styles.slideContainer}>
    <Animatable.View style={styles.slideContent} {...props}>
      <Heading1>Slide 2</Heading1>
    </Animatable.View>
  </MagicMove.View>
);

export const Slide = (props: any) => (
  <BaseSlide style={styles.container} {...props} />
);

export const ZoomContainer = (props: any) => (
  <Slide>
    <View style={styles.content}>{props.children}</View>
    <View style={styles.leftOverlay} />
    <View style={styles.rightOverlay} />
    <View style={styles.topOverlay} />
    <View style={styles.bottomOverlay} />
  </Slide>
);
