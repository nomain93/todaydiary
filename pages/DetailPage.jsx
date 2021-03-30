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
  useEffect(() => {
    navigation.setOptions({
      title: "오늘, 일기",
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
