import React, { Component } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { metrics, colors } from "../themes";
import { scale } from "../helpers/functions";

export default class LivraisonChezVous extends Component {
  render() {
    return (
      <View style={{ marginHorizontal: scale(45) }}>
        <TextInput
          style={styles.txtInput}
          underlineColorAndroid="transparent"
          placeholder=" Numéro d'appartemet, suite ou étage"
          placeholderTextColor={colors.dimGrey2}
        />
        <View style={styles.trait} />
        <TextInput
          style={styles.txtInput}
          underlineColorAndroid="transparent"
          placeholder=" Nom de l'entreprise"
          placeholderTextColor={colors.dimGrey2}
        />
        <View style={styles.trait} />
        <TextInput
          style={styles.txtInput}
          underlineColorAndroid="transparent"
          placeholder=" Ajouter des instruction pour la livraison"
          placeholderTextColor={colors.dimGrey2}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  trait: {
    borderWidth: 1,
    borderColor: colors.dimGrey2
  },
  txtInput: {
    fontFamily: "proximaNovaReg",
    margin: metrics.smallMargin,
    height: metrics.doubleBaseMargin
  }
});
