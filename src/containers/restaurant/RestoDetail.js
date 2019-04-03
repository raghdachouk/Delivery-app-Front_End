import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements";
import colors from "../../themes/colors";
import metrics from "../../themes/metrics";

export default class RestoDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.navigation.getParam("title", "NO-Category");
    const type = this.props.navigation.getParam("type", "NO-Category");
    const image = this.props.navigation.getParam("image", "NO-Category");
    const place = this.props.navigation.getParam("place", "NO-Category");
    const note = this.props.navigation.getParam("note", "NO-Category");
    const status = this.props.navigation.getParam("status", "NO-Category");

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Image
            source={{ uri: image }}
            style={{ width: "90%", height: 220, justifyContent: "center" }}
          />
          <Avatar
            containerStyle={{ position: "absolute", right: 30, top: 200 }}
            overlayContainerStyle={{ backgroundColor: "#04B404" }}
            size="large"
            rounded
            title={note}
          />

          <View style={{ margin: 10, justifyContent: "space-around" }}>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", color: "#6E6E6E" }}
            >
              {title}
            </Text>
            <Text style={{ fontSize: 16, color: "#6E6E6E" }}>{type}</Text>
            <Text>
              {status} <Text> . {place} </Text>
            </Text>
            <Text style={{ color: "#6E6E6E", fontSize: 15 }}>
              Notre terrasse vous accueille cette annéedès le 1er mars et
              jusqu'au 31 octobre, c'est tellement plus agréable! Pour votre
              confort, elle sera chauffée lors des soirées fraîches.
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: 20
              }}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  backgroundColor: "#fff"
                }}
              >
                <IconIcon name="access-time" size={25} color="#BDBDBD" />
                <Text>{"\n"}8:00 - 22:00</Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  backgroundColor: "#fff"
                }}
              >
                <Icon name="location-arrow" size={25} color="#BDBDBD" />
                <Text>{"\n"}Localistaion</Text>
              </View>
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignItems: "center",
                  backgroundColor: "#fff"
                }}
              >
                <IconIcon name="phone" size={25} color="#BDBDBD" />
                <Text>{"\n"}Appeler</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    paddingTop: metrics.mediumMargin,
    alignItems: "center",
    height: metrics.height
  }
});
