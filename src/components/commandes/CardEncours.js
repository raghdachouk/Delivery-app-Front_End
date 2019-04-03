import React, { Component } from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import metrics from "../../themes/metrics";
import functions, { scale } from "../../helpers/functions";
import colors from "../../themes/colors";
import images from "../../themes/images";
const width = metrics.width;

export default class CardEncours extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <Image
            source={{ uri: images.cardImage1 }}
            style={styles.styleImage}
          />
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.styleTextYellow}>Lasagne</Text>
          <Text style={styles.styleTextGrey2}>original </Text>
          <Text style={styles.styleTextGrey}>DETAILS</Text>
        </View>
        <View style={styles.containerPrix}>
          <Text style={styles.prix}>15,30 €</Text>
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
    marginLeft: -scale(60)
  },
  prix: {
    fontWeight: "bold",
    color: colors.green
  },
  containerPrix: {
    marginTop: metrics.smallMargin,
    marginRight: -metrics.baseMargin
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
