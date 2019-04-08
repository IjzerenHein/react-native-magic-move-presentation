// @flow
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TransitionView } from "./TransitionView";

interface PropsType {
  style?: View.propTypes.style;
  children: any;
}

interface StateType {
  child: any;
  prevChildren: Array<any>;
}

export class Transition extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      child: React.Children.only(props.children),
      prevChildren: []
    };
  }

  static getDerivedStateFromProps(props: PropsType, state: StateType) {
    let newState: any = null;

    const child = React.Children.count(props.children)
      ? React.Children.only(props.children)
      : undefined;
    if (!child && state.child) {
      newState = newState || {};
      newState.child = undefined;
      newState.prevChildren = [...state.prevChildren, state.child];
    } else if (!state.child && child) {
      newState = newState || {};
      newState.child = child;
    } else if (state.child && child && state.child.key !== child.key) {
      newState = newState || {};
      newState.child = child;
      newState.prevChildren = [...state.prevChildren, state.child];
    }

    return newState;
  }

  render() {
    const { style, ...otherProps } = this.props;
    const { child, prevChildren } = this.state;
    const children = child ? [...prevChildren, child] : prevChildren;
    return (
      <View style={style} {...otherProps}>
        {React.Children.map(children, child => {
          const isHiding = child !== this.state.child;
          return (
            <TransitionView
              key={child.key}
              style={StyleSheet.absoluteFill}
              onTransitionEnd={isHiding ? this.onTransitionEnd : undefined}
            >
              {child}
            </TransitionView>
          );
        })}
      </View>
    );
  }

  onTransitionEnd = (key: string) => {
    console.log("onTransitionEnd: ", key);
    if (this.state.prevChildren.length) {
      this.setState({
        prevChildren: []
      });
    }
  };
}
