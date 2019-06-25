import React, { Component } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import colors from "../../themes/colors";
import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import images from "../../themes/images";

const width = metrics.width;
const height = metrics.height;

export default class InteractionResto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <View style={styles.textWithIcon}>
            <Icon
              name="fiber-manual-record"
              size={scale(20)}
              color={colors.darkGreen}
            />
            <Text style={styles.textStyle1}>
              Commande en cours de préparation{" "}
            </Text>
          </View>
          <Image
            source={{ uri: images.restoImage }}
            style={styles.styleImage}
          />
        </View>
        <View style={{ paddingTop: metrics.bigMargin }}>
          <Text style={styles.textStyle}>SELECTIONNEZ UN PROBLEME {"\n"}</Text>
        </View>
        {/* <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.yellowbutton}>
            J'ai un problème avec une commande en cours
          </Text>
        </TouchableOpacity>
        <Text>{"\n"}</Text>
        <TouchableOpacity activeOpacity={0.8}>
					<Text numberOfLines={2} style={styles.yellowbutton}>
						J'ai eu un problème avec une commande terminée
					</Text>
				</TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    alignContent: "center",
    alignItems: "center",
    width: width,
    height: height,
    paddingTop: metrics.baseMargin
  },
  yellowbutton: {
    width: width - metrics.doubleBaseMargin,
    backgroundColor: colors.yellow,
    borderRadius: scale(5),
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.xsmallMargin,
    textAlign: "center",
    alignItems: "center"
  },
  containerTop: {
    borderRadius: scale(15),
    backgroundColor: colors.white,
    width: width - metrics.doubleBaseMargin,
    height: scale(210)
  },
  textWithIcon: {
    flexDirection: "row",
    padding: metrics.mediumMargin
  },
  styleImage: {
    height: scale(160),
    width: width - metrics.doubleBaseMargin,
    borderRadius: metrics.mediumMargin,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  textStyle: {
    color: colors.darkGrey,
    fontWeight: "bold"
  },
  textStyle1: {
    color: colors.darkGrey,
    fontWeight: "bold",
    fontSize: scale(14)
  }
});
