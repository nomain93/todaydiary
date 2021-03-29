import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import Loading from "./pages/Loading";

export default function App() {
  const [ready, setReady] = useState(false);

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({});
      await setReady(true);
    }, 2000);
  };

  useEffect(() => {
    loadFont();
  }, []);

  return ready ? (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  ) : (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
