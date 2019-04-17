// @flow
import React, { Component } from "react";
import { View } from "react-native";

interface PropsType {
  style?: View.propTypes.style;
  duration?: number;
  children: any;
  onTransitionEnd: ((key: string) => void) | void;
}

interface StateType {}

export class TransitionView extends Component<PropsType, StateType> {
  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    if (this.props.onTransitionEnd) {
      this._startTimer();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const { style, children } = this.props;
    return <View style={style}>{children}</View>;
  }

  componentDidUpdate(prevProps: PropsType) {
    if (this.props.onTransitionEnd && !prevProps.onTransitionEnd) {
      this._startTimer();
    }
  }

  _startTimer() {
    setTimeout(() => {
      const { onTransitionEnd, children } = this.props;
      const child = React.Children.only(children);
      if (this._mounted && onTransitionEnd) {
        onTransitionEnd(child.key);
      }
    }, this.props.duration || 100);
  }
}
