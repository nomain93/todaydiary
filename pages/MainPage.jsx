import React, { useEffect, useState } from "react";
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
import { getData } from "../config/firebaseFunctions";
const data = require("../data.json");

const backImage = require("../assets/ss.gif");

export default function MainPage({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
    readyData();
  }, []);
  const readyData = async () => {
    const data = await getData();
    setData(data);
  };

  return (
    <Container style={styles.container}>
      <ImageBackground source={backImage} style={styles.backgroundImage}>
        <Content>
          <Text
            style={{
              marginTop: 50,
              fontSize: 50,
              color: "#fff",
              textAlign: "center",
              fontFamily: "HiMelody",
            }}>
            <Text style={styles.highlite}>오늘,</Text>기록
          </Text>
        </Content>
        <ScrollView style={styles.scroll}>
          {data.map((content, i) => {
            return (
              <CardComponent
                content={content}
                key={i}
                navigation={navigation}
              />
            );
          })}
        </ScrollView>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  scroll: {
    height: 420,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 50,
    fontFamily: "HiMelody",
    color: "#BEEDA4",
  },
  label: {
    color: "#fff",
  },
});
