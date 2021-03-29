import React, { useEffect } from "react";
import { StyleSheet, View, Alert, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Content,
  Footer,
  Text,
  Label,
  Button,
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import CardComponent from "../components/CardComponent";

const bImage = require("../assets/ride.png");

export default function MainPage({ navigation }) {
  useEffect(() => {
    const unsubscrbie = navigation.addListener("focus", (e) => {});
    return unsubscrbie;
  }, [navigation]);
  return (
    <Container style={styles.container}>
      <ImageBackground source={bImage} style={styles.backgroundImage}>
        <Content>
          <Text style={styles.title}>
            <Text style={styles.highlite}>오늘, </Text>기록
          </Text>
        </Content>
        <CardComponent />
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    margin: 20,
    borderRadius: 20,
  },
  title: {
    marginTop: 50,
    fontSize: 25,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  highlite: {
    fontSize: 25,
    fontWeight: "700",
    color: "#DC83D6",
  },
  label: {
    color: "#fff",
  },
});
