import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function CardComponent({ navigation, content }) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailPage", { content: content });
      }}
      style={styles.container}>
      <Card style={styles.card} transparent>
        <CardItem style={{ marginTop: -10, backgroundColor: "pink" }}>
          <Text numberOfLines={1} style={styles.title}>
            {content.title}
          </Text>
          <Text style={[styles.grey, styles.writer]}>{content.author}</Text>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", alignSelf: "center" },
  card: {
    width: 400,
    height: 60,
    alignSelf: "center",
  },
  image: { height: 200, width: "100%", borderRadius: 10 },
  grey: { color: "grey" },
  writer: { fontSize: 12, color: "grey", marginLeft: 20 },
  title: { fontWeight: "700", fontSize: 15, marginLeft: 50 },
});
