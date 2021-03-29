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
import { ScrollView } from "react-native-gesture-handler";
const data = require("../data.json");

const bImage = require("../assets/ss.gif");

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
            <Text style={styles.highlite}>오늘,</Text>기록
          </Text>
        </Content>
        {data.diary.map((content, i) => {
          return (
            <CardComponent content={content} key={i} navigation={navigation} />
          );
        })}
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
    color: "#BEEDA4",
  },
  label: {
    color: "#fff",
  },
});
