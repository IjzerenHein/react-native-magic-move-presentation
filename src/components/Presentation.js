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
  _keyboardString = "";
  _timer = undefined;

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
        default:
          this.onAddKeyPress(event);
          break;
      }
    });
  }

  onAddKeyPress(key: string) {
    this._keyboardString = this._keyboardString + key;
    if (this._timer) {
      clearTimeout(this._timer);
    }
    this._timer = setTimeout(() => {
      this._timer = undefined;
      let index = parseInt(this._keyboardString);
      if (index >= React.Children.count(this.props.children)) {
        index = React.Children.count(this.props.children) - 1;
      }
      this._keyboardString = "";
      if (index >= 0) {
        this.setState({
          slideIndex: index
        });
      }
    }, 500);
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
