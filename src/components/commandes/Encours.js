import React, { Component } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import CardEncours from "./CardEncours";
import colors from "../../themes/colors";
import metrics from "../../themes/metrics";

const data = {
  image:
    "http://www.ledillens.be/wp-content/uploads/2016/06/Le-plat-du-jour-Tonkatsu-Don-Escalope-de-porc-pan%C3%A9....jpg",
  name: "Litle Formule: Le big Fernand",
  prix: 5.3,
  desp:
    "Notre politique est de travailler de manière raisonnée, pour vous proposer une carte de qualité."
};
export default class Encours extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
  }
  onNavigate = () => {
    this.props.navigation.navigate("details", {
      image: data.image,
      name: data.name,
      prix: data.prix,
      desp: data.desp
    });
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.onNavigate}>
            <CardEncours
              image={data.image}
              name={data.name}
              prix={data.prix}
              desp={data.desp}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    alignContent: "center",
    alignItems: "center",
    width: metrics.width,
    height: metrics.height
  }
});
