// @flow
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Slide as BaseSlide,
  Heading1,
  Heading2,
  Caption,
  Body,
  TransitionProps,
  Image,
  Column,
  Row,
  MagicMove,
  Flex
} from "../../components";
import { Colors } from "../../styles";
import * as Animatable from "react-native-animatable";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ZOOM = 0.3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    alignItems: undefined,
    flexDirection: "row",
    padding: 0
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
    alignItems: "center",
    padding: 20
  },
  title: {
    position: "absolute",
    left: 0,
    top: 20,
    right: 0,
    color: Colors.white,
    textAlign: "center"
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
    <Heading1
      margins
      id={props.titleEnabled ? "relativityTitle" : undefined}
      debug={props.debug}
    >
      Relativity
    </Heading1>
    <View style={{ width: 500, height: 500 }}>
      <Image
        id={props.imageEnabled ? "relativity" : undefined}
        //useNativeClone={false}
        //parentScaleHint={ZOOM}
        source={require("../../assets/relativity.jpg")}
        style={{ width: 500, height: 500, opacity: props.hidden ? 0 : 1 }}
        resizeMode="contain"
        debug={props.debug}
      />
      <View
        style={[
          StyleSheet.absoluteFill,
          props.highlight ? { backgroundColor: Colors.green } : undefined
        ]}
      />
    </View>
  </ZoomedSlide>
);

export const Slide2 = (props: any) => (
  <ZoomedSlide {...props} id="howslide2">
    <Row style={{ alignItems: "flex-start", margin: 40 }}>
      <View style={{ width: 200, height: 200 }}>
        <Image
          id={props.imageEnabled ? "relativity" : undefined}
          source={require("../../assets/relativity.jpg")}
          style={{ width: 200, height: 200, opacity: props.hidden ? 0 : 1 }}
          resizeMode="contain"
          zIndex={props.imageEnabled ? 10 : undefined}
          debug={props.debug}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            props.highlight ? { backgroundColor: Colors.yellow } : undefined
          ]}
        />
      </View>
      <Column style={{ marginLeft: 40, alignItems: "flex-start" }}>
        <Heading2
          id={props.titleEnabled ? "relativityTitle" : undefined}
          debug={props.debug}
        >
          Relativity
        </Heading2>
        <Caption margins animation={props.textEnabled ? "fadeInUp" : undefined}>
          M. C. Escher - 1953
        </Caption>
        <Body margins animation={props.textEnabled ? "fadeInUp" : undefined}>
          Relativity is a lithograph print by the Dutch artist M. C. Escher,
          first printed in December 1953. The first version of this work was a
          woodcut earlier that same year.
        </Body>
        <Body margins animation={props.textEnabled ? "fadeInUp" : undefined}>
          It depicts a world in which the normal laws of gravity do not apply.
          The architectural structure seems to be the centre of an idyllic
          community, with most of its inhabitants casually going about their
          ordinary business, such as dining. There are windows and doorways
          leading to park-like outdoor settings. All of the figures are dressed
          in identical attire and have featureless bulb-shaped heads. Identical
          characters such as these can be found in many other Escher works.
        </Body>
        <Body margins animation={props.textEnabled ? "fadeInUp" : undefined}>
          In the world of Relativity, there are three sources of gravity, each
          being orthogonal to the two others. Each inhabitant lives in one of
          the gravity wells, where normal physical laws apply. There are sixteen
          characters, spread between each gravity source, six in one and five
          each in the other two. The apparent confusion of the lithograph print
          comes from the fact that the three gravity sources are depicted in the
          same space.
        </Body>
      </Column>
    </Row>
  </ZoomedSlide>
);

export const SlideContainer = (props: any) => (
  <BaseSlide style={styles.container} {...props} />
);

export const SlideZoomContainer = (props: any) => (
  <SlideContainer>
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
    {props.title ? (
      <Heading2 style={styles.title}>{props.title}</Heading2>
    ) : (
      undefined
    )}
  </SlideContainer>
);
