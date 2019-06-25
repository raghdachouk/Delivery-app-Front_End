import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import colors from "../../themes/colors";
import BarSearch from "../recherche/BarSearch";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
export default class Title extends React.Component {
  static propTypes = {
    navigate: PropTypes.object.isRequired,
    title: PropTypes.string
  };
  goBack = () => {
    this.props.navigate.goBack();
  };
  render() {
    return (
      <View style={Styles.container}>
        <View>
          <Icon name="arrow-left" size={scale(28)} onPress={this.goBack} />
        </View>
        <View>
          <Text style={Styles.textStyle}>{this.props.title}</Text>
        </View>
        <BarSearch />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginLeft: metrics.largeMrgin,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: metrics.baseMargin,
    alignItems: "center"
  },
  textStyle: {
    fontSize: scale(19),
    color: colors.grey,
    fontFamily: "proximaNovaBold"
  }
});
