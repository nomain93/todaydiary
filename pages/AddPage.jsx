import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Text,
  Button,
  Thumbnail,
  Item,
  Input,
  Form,
  Textarea,
} from "native-base";
const background = require("../assets/ride.png");
const data = require("../data.json");
const imageWidth = Dimensions.get("window").width / 3;

export default function AddPage() {
  return (
    <Container>
      <ImageBackground source={background} style={styles.background}>
        <Text style={styles.addtitle}>{`오늘,   쓰다`}</Text>
        <Content contentContainerStyle={styles.Container}>
          <Item regular style={styles.title}>
            <Input
              placeholder="날짜"
              placeholderTextColor="white"
              style={{ fontSize: 18, color: "white" }}
            />
          </Item>
          <Form style={styles.contentLayout}>
            <Textarea
              rowSpan={15}
              bordered
              placeholder="오늘 하루은 어떤 하루 였나요?"
              placeholderTextColor="white"
              style={styles.content}
            />
          </Form>
          <Button full style={styles.uploadButton}>
            <Text>등록</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  addtitle: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 15,
  },
  Container: {
    flex: 1,
    marginTop: "40%",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  imageUpload: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "grey",
    borderStyle: "dashed",
    width: "90%",
    height: 200,
    marginTop: 20,
    alignSelf: "center",
    alignItems: "center",
  },
  imageUploadPlus: {
    textAlign: "center",
    width: "100%",
    fontSize: 90,
    fontWeight: "300",
    color: "grey",
  },
  title: {
    marginTop: "100",
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  contentLayout: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  content: { borderRadius: 10, fontSize: 18, color: "white" },
  uploadButton: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    backgroundColor: "hotpink",
  },
});
