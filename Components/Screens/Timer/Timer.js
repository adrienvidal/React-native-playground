import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { Picker } from "@react-native-community/picker";

const screen = Dimensions.get("window");

// Utils
// 3 => 03, 10 => 10
const formatNumber = (number) => `0${number}`.slice(-2);
const getRemaining = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return {
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};
const createArray = (length) => {
  let arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const AVAILABLE_MINUTES = createArray(10);
const AVAILABLE_SECONDS = createArray(60);

export class TimerApp extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      remainingSeconds: 5,
      isRunning: false,
      selectedMinutes: "0",
      selectedSeconds: "5",
    };
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
      this._stop();
    }
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  _renderPicker() {
    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedMinutes}
          onValueChange={(itemValue) => {
            this.setState({
              selectedMinutes: itemValue,
            });
          }}
          mode="dropdown"
        >
          {AVAILABLE_MINUTES.map((min, i) => {
            return <Picker.Item key={i} label={min} value={min} />;
          })}
        </Picker>
        <Text style={styles.pickerItem}>minutes</Text>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedSeconds}
          onValueChange={(itemValue) => {
            this.setState({
              selectedSeconds: itemValue,
            });
          }}
          mode="dropdown"
        >
          {AVAILABLE_SECONDS.map((min, i) => {
            return <Picker.Item key={i} label={min} value={min} />;
          })}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>
    );
  }

  _start() {
    this.setState({
      remainingSeconds:
        parseInt(this.state.selectedMinutes, 10) * 60 +
        parseInt(this.state.selectedSeconds, 10),
      isRunning: true,
    });

    this.interval = setInterval(() => {
      this.setState({
        remainingSeconds: this.state.remainingSeconds - 1,
      });
    }, 1000);
  }

  _stop() {
    clearInterval(this.interval);
    this.interval = null;

    this.setState({
      remainingSeconds: 5,
      isRunning: false,
    });
  }

  render() {
    const { minutes, seconds } = getRemaining(this.state.remainingSeconds);

    return (
      <View style={styles.container}>
        {this.state.isRunning ? (
          <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
        ) : (
          this._renderPicker()
        )}

        {this.state.isRunning ? (
          <TouchableOpacity
            onPress={() => this._stop()}
            style={[styles.button, styles.buttonStop]}
          >
            <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => this._start()} style={styles.button}>
            <Text style={styles.buttonText}> Start </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#07121B",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  picker: {
    width: 50,
    ...Platform.select({
      android: {
        color: "#fff",
        backgroundColor: "#07121B",
        marginLeft: 10,
      },
    }),
  },
  pickerItem: {
    color: "#fff",
    fontSize: 20,
  },
  timerText: {
    color: "#fff",
    fontSize: 90,
  },
  button: {
    borderWidth: 10,
    borderColor: "#89AAFF",
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 45,
    color: "#89AAFF",
  },
  buttonStop: {
    borderColor: "#FF851B",
  },
  buttonTextStop: {
    color: "#FF851B",
  },
});

export default TimerApp;
