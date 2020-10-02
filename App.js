import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import FadeIn from "./screens/FadeIn";
import DragGesture from "./screens/DragGesture";

const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "#ff73ea",
        inactiveTintColor: "#6e6e6e",
        style: {
          backgroundColor: '#000000',
          borderTopColor: '#000000',
          paddingTop: 10,
       }
      }
    }
    >
      <RootTab.Screen
        name="FadeIn"
        component={FadeIn}
        options={{
          title: "Fade In",
          tabBarIcon: ({ focused }) => (
            <AntDesign name="meho" size={24} color={focused ? "#ff73ea" : "#6e6e6e"} />
          ),
        }}
      />
      <RootTab.Screen
        name="DragGesture"
        component={DragGesture}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign name="meh" size={24} color={focused ? "#ff73ea" : "#6e6e6e"} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <RootTabNavigator></RootTabNavigator>
    </NavigationContainer>
  );
}
