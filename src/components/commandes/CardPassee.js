import React, { Component } from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
import images from "../../themes/images";
const width = metrics.width;

export default class CardPassee extends Component {
  render() {
    return (
      <View style={styles.cardStyle}>
        <View style={styles.containerImage}>
          <Image
            source={{ uri: images.cardImage2 }}
            style={styles.styleImage}
          />
        </View>
        <View style={styles.containerText}>
          <Text style={styles.styleTextYellow}>Lasagne</Text>
          <Text style={styles.styleTextGrey2}>original </Text>
          <Text style={styles.styleTextGrey}>DETAILS</Text>
        </View>
        <View style={styles.prixPos}>
          <Text style={styles.containerPrix}>15,30 €</Text>
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
    fontWeight: "bold",
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
    marginLeft: -scale(60)
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
    fontWeight: "bold",
    color: colors.green
  },
  styleTextYellow: {
    fontWeight: "bold",
    color: colors.yellow
  },
  styleTextGrey: {
    fontWeight: "bold",
    color: colors.grey
  },
  styleTextGrey2: {
    fontWeight: "bold",
    color: colors.lightGrey2
  }
});
