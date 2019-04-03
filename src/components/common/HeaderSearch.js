import { View, StyleSheet } from "react-native";
import Ion from "react-native-vector-icons/FontAwesome";
import React from "react";
import BarSearch from "../recherche/BarSearch";
import colors from "../../themes/colors";
import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
export default class HeaderSearch extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Ion name="navicon" size={scale(25)} color={colors.lightGrey2} />

        <BarSearch />

        <Ion name="sliders" size={scale(25)} color={colors.lightGrey2} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: metrics.baseMargin
  }
});
