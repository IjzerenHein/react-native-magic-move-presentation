// @flow
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  NativeEventEmitter,
  NativeModules
} from "react-native";
import { MasterSlide } from "./MasterSlide";
import { Transition } from "./Transition";
import StatusBar from "@react-native-community/status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  slide: {
    flex: 1
  },
  navContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  navButton: {
    width: 100
  }
});

interface PropsType {
  children: any;
}
interface StateType {
  slideIndex: number;
}

export class Presentation extends Component<PropsType, StateType> {
  state = {
    slideIndex: 0
  };

  componentDidMount() {
    const keyEventEmitter = new NativeEventEmitter(
      NativeModules.KeyEventModule
    );
    keyEventEmitter.addListener("keyEvent", event => {
      switch (event) {
        case "LeftArrow":
          this.onPressPrev();
          break;
        case "RightArrow":
          this.onPressNext();
          break;
      }
    });
  }

  render() {
    const { children } = this.props;
    const { slideIndex } = this.state;
    const slide = React.Children.toArray(children)[slideIndex];
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Transition style={styles.slide}>{slide}</Transition>
        <View style={styles.navContainer}>
          <TouchableWithoutFeedback onPress={this.onPressPrev}>
            <View style={styles.navButton} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPressNext}>
            <View style={styles.navButton} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }

  onPressPrev = () => {
    const { slideIndex } = this.state;
    if (slideIndex > 0) {
      this.setState({
        slideIndex: slideIndex - 1
      });
    }
  };

  onPressNext = () => {
    const { slideIndex } = this.state;
    if (slideIndex < React.Children.count(this.props.children) - 1) {
      this.setState({
        slideIndex: slideIndex + 1
      });
    }
  };
}
