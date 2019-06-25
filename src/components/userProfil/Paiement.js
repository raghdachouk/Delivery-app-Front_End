import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { colors, metrics } from "../../themes";
import { scale } from "../../helpers/functions";

export default class Paiement extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  valider = () => {
    this.props.navigation.goBack();
  };
  onPay = () => {
    this.props.navigation.navigate("payer");
  };

  render() {
    const { number } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text2}>Paiement </Text>
          {number != null && (
            <Text style={styles.text3}>
              le numéro de crédit card : {number}
            </Text>
          )}
          <TouchableOpacity activeOpacity={0.8} onPress={this.onPay}>
            <Text style={styles.text}>Ajouter paiement</Text>
          </TouchableOpacity>
          <View style={styles.trait} />
        </View>

        <View>
          <TouchableOpacity activeOpacity={0.8} onPress={this.valider}>
            <Text style={styles.yellowbutton}> VALIDER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    height: metrics.height,
    width: metrics.width,
    backgroundColor: colors.white,
    //padding: metrics.baseMargin,
    paddingTop: 0
  },
  text: {
    //fontWeight: '500',
    fontSize: scale(17),
    margin: metrics.smallMargin,
    color: colors.white,
    padding: metrics.mediumMargin,
    backgroundColor: colors.grey4,
    fontFamily: "proximaNovaBold",
    borderRadius: scale(5),
    textAlign: "center"
  },
  text2: {
    fontSize: scale(20),
    color: colors.grey,
    padding: metrics.mediumMargin,
    fontFamily: "proximaNovaBold"
  },
  text3: {
    fontFamily: "proximaNovaBold"
  },
  yellowbutton: {
    width: metrics.width,
    backgroundColor: colors.yellow,
    color: colors.white,
    fontSize: scale(18),
    padding: scale(17),
    textAlign: "center",
    alignItems: "center",
    fontFamily: "proximaNovaBold"
  },
  trait: {
    borderWidth: 1,
    borderColor: colors.dimGrey2,
    marginTop: metrics.mediumMargin
  }
});
