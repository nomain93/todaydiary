import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigations/StackNavigator";

import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import apiKeys from "./config/key";

import Loading from "./pages/Loading";
import * as firebase from "firebase";

export default function App() {
  console.disableYellowBox = true;
  const [ready, setReady] = useState(false);

  if (!firebase.apps.length) {
    console.log("Connected with Firebase");
    firebase.initializeApp(apiKeys.firebaseConfig);
  }

  const loadFont = () => {
    setTimeout(async () => {
      await Font.loadAsync({
        BMJUA: require("./assets/fonts/BMJUA.ttf"),
        NanumPen: require("./assets/fonts/NanumPen.ttf"),
        HiMelody: require("./assets/fonts/HiMelody-Regular.ttf"),
      });
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
