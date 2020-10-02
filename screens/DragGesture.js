import React, { useRef, useEffect } from "react";
import { Text, Animated, View, StyleSheet, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";

// ********* THIS WOULD BE IDEAL WITH FOR EACH LOOP UNFORTUNATELY I COULDN'T GET IT TO WORK SO HERE IT IS THE LONG NOT AS GOOD WAY :(

export default DragGesture = () => {
  const position = useRef(new Animated.ValueXY()).current;
  const position2 = useRef(new Animated.ValueXY()).current;
  const position3 = useRef(new Animated.ValueXY()).current;
  const isFocused = useIsFocused();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position.x, dy: position.y },
    ]),
    onPanResponderGrant: () => {
      position.setOffset({
        x: position.x._value,
        y: position.y._value,
      });
    },

    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        // useNativeDriver: true,
      }).start();
    },
  });

  const panResponder2 = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position2.x, dy: position2.y },
    ]),
    onPanResponderGrant: () => {
      position.setOffset({
        x: position2.x._value,
        y: position2.y._value,
      });
    },
    onPanResponderRelease: () => {
      Animated.spring(position2, {
        toValue: { x: 0, y: 0 },
      }).start();
    },
  });

  const panResponder3 = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      { dx: position3.x, dy: position3.y },
    ]),
    onPanResponderGrant: () => {
      position.setOffset({
        x: position3.x._value,
        y: position3.y._value,
      });
    },
    onPanResponderRelease: () => {
      Animated.spring(position3, {
        toValue: { x: 0, y: 0 },
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.ball, position.getLayout()]}
        {...panResponder.panHandlers}
      />
      <Animated.View
        style={[styles.ball2, position2.getLayout()]}
        {...panResponder2.panHandlers}
      />
      <Animated.View
        style={[styles.ball3, position3.getLayout()]}
        {...panResponder3.panHandlers}
      />
      <View style={styles.cone}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#292929',
  },
  ball: {
    backgroundColor: "#abf5de",
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  ball2: {
    backgroundColor: "#8f6856",
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  ball3: {
    backgroundColor: "#ffb3dd",
    height: 110,
    width: 110,
    borderRadius: 70,
  },
  cone: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderTopWidth: 200,
    borderTopColor: "#e0b151",

  }
});
