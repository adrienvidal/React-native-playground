import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

//Styleguide
import Home from "../Screens/Home";

// components
import Timer from "../Screens/Timer/Timer";
import Quiz from "../Screens/Quiz/Quiz";
import QuizApp from "../Screens/Quiz/QuizApp";

const Stack = createStackNavigator();
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "React-Native-Playground" }}
      />
      <Stack.Screen
        name="Timer"
        component={Timer}
        options={{ title: "Timer" }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ title: "Quiz" }}
      />
      <Stack.Screen
        name="QuizApp"
        component={QuizApp}
        options={{ title: "QuizApp" }}
      />
    </Stack.Navigator>
  );
}


export default HomeStackNavigator;
