import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import computersQuestions from "./data/computers";
import spaceQuestions from "./data/space";
import westernsQuestions from "./data/westerns";

import { RowItem } from "./components/RowItem";

export class QuizHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* this.props.navigation.navigate("QuizApp"); */}
        <RowItem
          name="Computers"
          color="#36b1f0"
          onPress={() => {
            this.props.navigation.navigate("QuizApp", {
              questions: computersQuestions,
              color: "#36b1f0",
            });
          }}
        />
        <RowItem
          name="Space"
          color="#799496"
          onPress={() => {
            this.props.navigation.navigate("QuizApp", {
              questions: spaceQuestions,
              color: "#799496",
            });
          }}
        />
        <RowItem
          name="Westerns"
          color="#49475b"
          onPress={() => {
            this.props.navigation.navigate("QuizApp", {
              questions: westernsQuestions,
              color: "#49475b",
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
});

export default QuizHome;
