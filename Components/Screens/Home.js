import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";

const list = [
  {
    name: "Timer",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Timer application",
    ui_name: "Timer",
  },
  {
    name: "Quiz",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Quiz application",
    ui_name: "Quiz",
  },
];

export class StyleGuide extends Component {
  _displayUi(ui_name) {
    this.props.navigation.navigate(ui_name);
  }

  render() {
    return (
      <View style={styles.container}>
        {list.map((item, index) => (
          <ListItem
            key={index}
            title={item.name}
            subtitle={item.subtitle}
            bottomDivider
            chevron
            onPress={() => {
              this._displayUi(item.ui_name);
            }}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default StyleGuide;
