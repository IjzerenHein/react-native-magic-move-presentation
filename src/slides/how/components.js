// @flow
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Slide as BaseSlide,
  Heading1,
  Heading2,
  TransitionProps,
  Image
} from "../../components";
import { Colors } from "../../styles";
import * as MagicMove from "react-native-magic-move";
import * as Animatable from "react-native-animatable";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ZOOM = 0.3;

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
    width: WIDTH * ((1 - ZOOM) / 2),
    //backgroundColor: "#00000030"
    borderRightWidth: 1,
    borderColor: "green"
  },
  rightOverlay: {
    position: "absolute",
    right: 0,
    top: HEIGHT * 0.2,
    bottom: HEIGHT * 0.2,
    width: WIDTH * ((1 - ZOOM) / 2),
    borderLeftWidth: 1,
    borderColor: "green"
  },
  topOverlay: {
    position: "absolute",
    top: 0,
    left: WIDTH * 0.2,
    right: WIDTH * 0.2,
    height: HEIGHT * ((1 - ZOOM) / 2),
    borderBottomWidth: 1,
    borderColor: "green"
  },
  bottomOverlay: {
    position: "absolute",
    bottom: 0,
    left: WIDTH * 0.2,
    right: WIDTH * 0.2,
    height: HEIGHT * ((1 - ZOOM) / 2),
    borderTopWidth: 1,
    borderColor: "green"
  },
  slideZoomContainer: {
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

export const ZoomedSlide = (props: any) => {
  const { style, id, parentScaleHint, children, ...otherProps } = props;
  return (
    <MagicMove.View
      id={id}
      style={[styles.slideContainer, style]}
      useNativeClone={false}
      parentScaleHint={parentScaleHint}
      {...TransitionProps}
    >
      {children ? (
        <Animatable.View style={styles.slideContent} {...otherProps}>
          {children}
        </Animatable.View>
      ) : (
        undefined
      )}
    </MagicMove.View>
  );
};

export const DummySlide = (props: any) => <ZoomedSlide id="dummy" {...props} />;

export const Slide1 = (props: any) => (
  <ZoomedSlide {...props} id="howslide1">
    <Heading1>Slide 1</Heading1>
    <Image source={require("../../assets/logo.png")} />
  </ZoomedSlide>
);

export const Slide2 = (props: any) => (
  <ZoomedSlide {...props} id="howslide2">
    <Heading1>Slide 2</Heading1>
  </ZoomedSlide>
);

export const Slide = (props: any) => (
  <BaseSlide style={styles.container} {...props} />
);

export const SlideZoomContainer = (props: any) => (
  <Slide>
    <View style={styles.slideZoomContainer}>
      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          parentScaleHint: ZOOM
        });
      })}
    </View>
    <View style={styles.leftOverlay} />
    <View style={styles.rightOverlay} />
    <View style={styles.topOverlay} />
    <View style={styles.bottomOverlay} />
  </Slide>
);
