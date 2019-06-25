import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";

const width = metrics.width;

export default class CardPassee extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    image: PropTypes.string,
    name: PropTypes.string,
    prix: PropTypes.number
  };
  render() {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.containerImage}>
          <Image source={{ uri: this.props.image }} style={styles.styleImage} />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.styleTextYellow} numberOfLines={1}>
            {this.props.name}
          </Text>
          <Text style={styles.styleTextGrey2}>original </Text>
          <Text style={styles.styleTextGrey}>DETAILS</Text>
        </View>
        <View style={styles.prixPos}>
          <Text style={styles.containerPrix}>{this.props.prix} €</Text>
        </View>
        <View style={styles.buttonPos}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.yellowbutton}> RECOMMANDER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  yellowbutton: {
    width: scale(110),
    backgroundColor: colors.yellow,
    borderRadius: 2,
    color: colors.white,
    fontSize: scale(11),
    fontFamily: "proximaNovaBold",
    padding: metrics.smallMargin,
    textAlign: "center",
    alignItems: "center"
  },
  cardStyle: {
    backgroundColor: colors.white,
    width: width - metrics.doubleBaseMargin,
    alignContent: "center",
    height: scale(120),
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    margin: metrics.baseMargin
  },
  containerText: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: -scale(60),
    maxWidth: 80
  },
  buttonPos: {
    position: "absolute",
    right: scale(7),
    bottom: scale(7)
  },
  prixPos: {
    position: "relative",
    right: -metrics.mediumMargin,
    bottom: metrics.doubleBaseMargin,
    justifyContent: "space-around"
  },
  containerImage: {
    justifyContent: "space-around",
    marginLeft: -metrics.baseMargin
  },
  styleImage: {
    width: metrics.largeMrgin,
    height: metrics.largeMrgin
  },
  containerPrix: {
    fontFamily: "proximaNovaBold",
    color: colors.green
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
