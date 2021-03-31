import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import { Icon, Text, Card, CardItem } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default function CardComponent({ navigation, content }) {
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

    const days = ['일', '월', '화', '수', '목', '금', '토'];
    let dairyday = days[date.getDay()] + '요일';

    return year + "-" + month + "-" + day +'  '+ '/' +'  '+dairyday;
  }

  
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailPage", { content: content });
      }}
      style={styles.container}>
      <Card style={styles.card} transparent>
        <CardItem
          style={{
            marginTop: 10,
            backgroundColor: "#FFFBC4",
            borderColor: "pink",
            borderWidth: 2.5,
            borderRadius: 30,
          }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: "BMJUA",
              fontSize: 15,
              marginLeft: 15,
            }}>
            {content.title}
          </Text>
          <Text style={styles.grey, styles.date}>
            {dateFormat(content.date)}
          </Text>
        </CardItem>
        
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", alignSelf: "center" },
  card: {
    width: 400,
    height: 100,
    alignSelf: "center",
  },
  image: { height: 200, width: "100%", borderRadius: 10 },
  grey: { color: "grey" },
  date: { fontSize: 12, color: "grey", marginLeft: 20, fontFamily:'BMJUA' },
  title: {
    fontWeight: "700",
    fontSize: 15,
    marginLeft: 50,
    fontFamily: "BMJUA",
  },
});
