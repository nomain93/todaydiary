import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, CardItem } from "native-base";

export default function CardComponent({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailPage");
      }}
      style={styles.container}>
      <Card style={styles.card} transparent>
        <CardItem style={{ marginTop: -10, backgroundColor: "pink" }}>
          <Text numberOfLines={1} style={styles.title}>
            오늘의 일기
          </Text>
          <Text style={[styles.grey, styles.writer]}>2021.00.00</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", alignSelf: "center" },
  card: {
    width: 400,
    height: 600,
    alignSelf: "center",
  },
  image: { height: 200, width: "100%", borderRadius: 10 },
  grey: { color: "grey" },
  writer: { fontSize: 12, color: "grey", marginLeft: 20 },
  title: { fontWeight: "700", fontSize: 15, marginLeft: 50 },
});
