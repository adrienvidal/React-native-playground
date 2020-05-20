import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const RowItem = ({ onPress = () => {}, name, color }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.row, { backgroundColor: color }]}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#36b1f0",
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 1,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
