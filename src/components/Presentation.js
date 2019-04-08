// @flow
import React, { Component } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MasterSlide } from "./MasterSlide";
import StatusBar from "@react-native-community/status-bar";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textInput: {
    // nop
  },
  slide: {
    ...StyleSheet.absoluteFillObject
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

  render() {
    const { children } = this.props;
    const { slideIndex } = this.state;
    const slide = React.Children.toArray(children)[slideIndex];
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TextInput style={styles.textInput} onKeyPress={this.onKeyPress} />
        <View style={styles.slide}>{slide}</View>
      </View>
    );
  }

  onKeyPress = event => {
    // TODO
    console.log("onKeyPress:", event.nativeEvent.key);
  };
}
