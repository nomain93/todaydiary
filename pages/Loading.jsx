import React from "react";
import { StyleSheet, Image } from "react-native";
import { Container, Content, Text, Thumbnail } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
const LoadingImage = require("../assets/gg.gif");
export default function Loading() {
  return (
    <Container style={styles.container}>
      <Content contentContainerStyle={styles.content}>
        <Image
          style={styles.Image}
          resizeMode="contain"
          source={LoadingImage}
        />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3DAE2",
  },
  content: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  Image: {
    width: 500,
    height: 1000,
  },
});
