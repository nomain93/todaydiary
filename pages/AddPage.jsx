import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ImageBackground,
  Alert,
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
const loading = require("../assets/load.gif");
const data = require("../data.json");
import DateTimePicker from "@react-native-community/datetimepicker";
import * as firebase from "firebase";
import "firebase/firestore";

import { addDiary } from "../config/firebaseFunctions";

export default function AddPage({ navigation }) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [content, setContent] = useState("");
  const [contentError, setContentError] = useState("");

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const [progress, setProgress] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const upload = async () => {
    if (title == "") {
      Alert.alert("제목을 입력해주세요");
      return false;
    }

    if (content == "") {
      Alert.alert("내용을 입력해주세요");
      return false;
    }
    await setProgress(true);
    let data = {
      title: title,
      desc: content,
      date: date.getTime(),
    };

    let result = await addDiary(data);
    if (result) {
      await Alert.alert("오늘 기록 완료!");
      setTitle("");
      setContent("");
      setProgress(false);
      navigation.push("TabNavigator");
    }
  };

  return (
    <Container>
      <ImageBackground source={background} style={styles.background}>
        {progress == false ? null : (
          <Thumbnail Circular large source={loading} style={styles.progress} />
        )}
        <Text style={styles.addtitle}>{`오늘,쓰다`}</Text>
        <Content contentContainerStyle={styles.Container}>
          <Button
            style={{
              borderWidth: 1,
              alignSelf: "center",
              width: 250,
              borderRadius: 30,
              textAlign: "center",
              backgroundColor: "blue",
              fontWeight: "700",
            }}
            onPress={showDatepicker}
            title="Day">
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: "BMJUA",
                fontSize: 20,
              }}>
              DAY
            </Text>
          </Button>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <Item regular style={styles.title}>
            <Input
              placeholder="제목"
              placeholderTextColor="white"
              style={{ fontSize: 18, color: "white" }}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </Item>
          <Form style={styles.contentLayout}>
            <Textarea
              rowSpan={15}
              bordered
              placeholder="오늘 하루는 어땠나요?"
              placeholderTextColor="white"
              value={content}
              style={styles.content}
              onChangeText={(text) => setContent(text)}
            />
          </Form>
          <Button full style={styles.uploadButton} onPress={() => upload()}>
            <Text style={{ fontFamily: "BMJUA", fontSize: 15 }}>등록</Text>
          </Button>
        </Content>
      </ImageBackground>
    </Container>
  );
}

const styles = StyleSheet.create({
  addtitle: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    marginTop: 70,
    fontFamily: "BMJUA",
  },
  Container: {
    flex: 1,
    marginTop: "20%",
  },
  background: {
    width: "100%",
    height: "100%",
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
    backgroundColor: "blue",
  },

  progress: {
    position: "absolute",
    top: "50%",
    alignSelf: "center",
    zIndex: 2,
  },
});
