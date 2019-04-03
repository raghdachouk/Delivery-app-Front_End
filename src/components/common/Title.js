import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import colors from "../../themes/colors";
export default class Title extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <Icon name="navicon" size={scale(25)} color={colors.lightGrey2} />
        <Text style={Styles.textStyle}>Commandes</Text>
        <Icon name="sliders" size={scale(25)} color={colors.lightGrey2} />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: metrics.baseMargin
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: scale(19),
    color: colors.grey
  }
});
