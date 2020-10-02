import React, { useRef, useEffect } from "react";
import { Text, Animated, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function FadeIn() {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const fadeAnimSlower = useRef(new Animated.Value(0)).current;
  const fadeAnimSide = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => fadeAnim.setValue(0);
  }, [fadeAnim, isFocused]);

  useEffect(() => {
    Animated.timing(fadeAnimSlower, {
      toValue: 1,
      duration: 1500,
      delay: 1000,
      useNativeDriver: true,
    }).start();

    return () => fadeAnimSlower.setValue(0);
  }, [fadeAnimSlower, isFocused]);

  useEffect(() => {
    Animated.timing(fadeAnimSide, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      useNativeDriver: true,
    }).start();

    return () => fadeAnimSide.setValue(0);
  }, [fadeAnimSide, isFocused]);

  return (
    <View 
      style={{ 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center",
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#292929',
        }}>
      <Animated.View
        style={{
          flex: 3,
          width: 350,
          borderRadius: 10,
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],
              }),
            },
          ],
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "left",
            margin: 10,
            fontSize: 100,
            fontWeight: "bold",
          }}
        >
          This.
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          flex: 1,
          width: 350,
          borderRadius: 10,
          opacity: fadeAnimSlower,
          transform: [
            {
              translateY: fadeAnimSlower.interpolate({
                inputRange: [0, 1],
                outputRange: [300, 0],
              }),
            },
          ],
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "left",
            margin: 10,
            fontSize: 20,
            fontWeight: "200",
            textTransform: "uppercase",
            letterSpacing: 20,

          }}
        >
          Makes text.
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          flex: 10,
          width: 350,
          borderRadius: 10,
          opacity: fadeAnimSide,
          transform: [
            {
              translateX: fadeAnimSide.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "left",
            margin: 10,
            fontSize: 18,
            lineHeight: 30,
            fontWeight: "300",
          }}
        >
          Way more impactful. Some might go as far as saying a little extra. Apple does this all the time though and they make lots of money so I don't see the issue.
        </Text>
      </Animated.View>
    </View>
  );
}

export default FadeIn;
