import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from "native-base";
export default function DetailPage({ navigation, route }) {
  function dateFormat(d) {
    let date = new Date(d);
    let year = date.getFullYear();

    let month = date.getMonth() + 1;
    if (month < 10) month = "0" + month;

    let day = date.getDate();
    if (day < 10) day = "0" + day;

    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;

    let min = date.getMinutes();
    if (min < 10) min = "0" + min;

    let sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;

    return year + "-" + month + "-" + day;
  }

  useEffect(() => {
    navigation.setOptions({
      title: "오늘,일기",
      headerTitleStyle: {
        textAlign: "center",
        fontWeight: "700",
      },
      headerStyle: {
        backgroundColor: "#fff",
        shadowColor: "#fff",
      },
      headerTintColor: "gray",
      headerShown: true,
      headerBackTitleVisible: false,
    });
  }, []);
  const content = route.params.content;
  const dairyImage = require("../assets/to.gif");
  return (
    <Container>
      <ImageBackground source={dairyImage} style={styles.backgroundImage}>
        <Content
          contentContainerStyle={{
            alignItems: "center",
            marginTop: 150,
          }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
              color: "#333",
              alignSelf: "center",
              marginLeft: 25,
              marginTop: 20,
            }}>
            {dateFormat(content.date)}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "700",
              color: "#333",
              alignSelf: "center",
              marginLeft: 25,
              marginTop: 20,
            }}>
            {content.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "grey",
              alignSelf: "center",
              marginLeft: 25,
              marginTop: 20,
            }}>
            {content.desc}
          </Text>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
});
