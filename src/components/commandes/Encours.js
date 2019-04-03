import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import CardEncours from "./CardEncours";
import colors from "../../themes/colors";
import metrics from "../../themes/metrics";

export default class Encours extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { navigate } = this.props.navigate;
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate("Detail")}
          >
            <CardEncours />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    alignContent: "center",
    alignItems: "center",
    width: metrics.width,
    height: metrics.height
  }
});
