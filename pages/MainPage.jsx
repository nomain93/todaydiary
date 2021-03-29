import React, { useEffect } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

export default function MainPage({ navigation }) {
  useEffect(() => {
    const unsubscrbie = navigation.addListener("focus", (e) => {});
    return unsubscrbie;
  }, [navigation]);
  return (
    <View style={styles.contianer}>
      <Text> MainPage </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
