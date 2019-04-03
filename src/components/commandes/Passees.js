import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import CardPassee from "./CardPassee";
import colors from "../../themes/colors";
import metrics from "../../themes/metrics";

export default class Passees extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Detail")}
          >
            <CardPassee />
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
