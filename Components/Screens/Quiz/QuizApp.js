import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ButtonContainer } from "./components/Button";
import { Alert } from "./components/Alert";

export class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctCount: 0,
      totalCount: this.props.route.params.questions.length,
      activeQuestionIndex: 0,
      answerCorrect: false,
      answerd: false,
    };
  }

  _answer(correct) {
    this.setState(
      () => {
        const nextState = {
          answerd: true,
        };

        if (correct) {
          nextState.correctCount = this.state.correctCount + 1;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => {
          this._nextQuestion();
        }, 750);
      }
    );
  }

  _nextQuestion() {
    this.setState(() => {
      let nextIndex = this.state.activeQuestionIndex + 1;

      if (nextIndex >= this.state.totalCount) {
        nextIndex = 0;
      }

      return {
        activeQuestionIndex: nextIndex,
        answerd: false,
      };
    });
  }

  render() {
    // console.log("Quiz", this.state);
    const question = this.props.route.params.questions[
      this.state.activeQuestionIndex
    ];
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.props.route.params.color },
        ]}
      >
        <View>
          <Text style={styles.text}> {question.question} </Text>

          <ButtonContainer>
            {question.answers.map((answer) => (
              <Button
                text={answer.text}
                onPress={() => {
                  this._answer(answer.correct);
                }}
                key={answer.id}
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>
          {`${this.state.correctCount}/${this.state.totalCount}`}
        </Text>

        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answerd}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36B1F0",
    paddingVertical: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
});

export default Quiz;
