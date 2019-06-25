import React, { Component } from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import colors from "../../themes/colors";
const width = metrics.width;

export default class CardEncours extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    image: PropTypes.string,
    name: PropTypes.string,
    prix: PropTypes.number
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image source={{ uri: this.props.image }} style={styles.styleImage} />
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.styleTextYellow} numberOfLines={1}>
            {this.props.name}
          </Text>
          <Text style={styles.styleTextGrey2}>original </Text>
          <Text style={styles.styleTextGrey}>DETAILS</Text>
        </View>
        <View style={styles.containerPrix}>
          <Text style={styles.prix}>{this.props.prix} €</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: width - metrics.doubleBaseMargin,
    alignContent: "center",
    height: scale(120),
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: metrics.baseMargin
  },
  containerImage: {
    justifyContent: "space-around",
    marginLeft: -metrics.baseMargin
  },
  styleImage: {
    width: metrics.largeMrgin,
    height: metrics.largeMrgin
  },
  textStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: -scale(60),
    maxWidth: 80
  },
  prix: {
    fontFamily: "proximaNovaBold",
    color: colors.green
  },
  containerPrix: {
    marginTop: metrics.smallMargin,
    marginRight: -metrics.baseMargin
  },
  styleTextYellow: {
    fontFamily: "proximaNovaBold",
    color: colors.yellow
  },
  styleTextGrey: {
    fontFamily: "proximaNovaBold",
    color: colors.grey
  },
  styleTextGrey2: {
    fontFamily: "proximaNovaBold",
    color: colors.lightGrey2
  }
});
