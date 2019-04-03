import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import colors from "../../../themes/colors";
import Modal from "react-native-modal";
import metrics from "../../../themes/metrics";
import { scale } from "../../../helpers/functions";
export default class ModalRecu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: true
    };
    this.onpress = this.onpress.bind(this);
  }
  onpress() {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }
  render() {
    //this.state.isModalVisible = this.props.isModalVisible;
    return (
      <Modal isVisible={this.state.isModalVisible} style={styles.model}>
        <View style={styles.container}>
          <Icon
            name="closecircle"
            size={scale(20)}
            color={colors.yellow2}
            style={styles.posIcon}
            onPress={this.onpress}
          />
          <Text style={styles.text1}>Reçu de la commande</Text>

          <View style={styles.commande} />
          <Text style={styles.number}>
            <Text style={styles.num}>1x </Text> Plat de lasagne
          </Text>
          <View style={styles.commande} />
          <View style={styles.view}>
            <Text style={styles.text2}>SOUS TOTAL</Text>
            <Text style={styles.text2}>14.50 £</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text2}>FRAIS DE LIVRAISON</Text>
            <Text style={styles.text2}>3.50 £</Text>
          </View>
          <View style={styles.view2} />
          <View style={styles.view}>
            <Text style={styles.text3}>TOTAL</Text>
            <Text style={styles.text3}>18.00 £</Text>
          </View>
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  model: {
    alignItems: "center"
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(7),
    borderColor: colors.white,
    padding: metrics.baseMargin,
    height: scale(290),
    width: scale(330)
  },
  icon: {
    position: "absolute",
    top: metrics.smallMargin,
    right: metrics.smallMargin
  },
  posIcon: {
    position: "absolute",
    top: metrics.smallMargin,
    right: metrics.smallMargin
  },
  text1: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: scale(17),
    alignSelf: "center"
  },
  commande: {
    borderWidth: 1,
    marginVertical: metrics.mediumMargin,
    borderColor: colors.backGrey
  },
  number: {
    fontWeight: "bold",
    fontSize: scale(16),
    color: colors.grey
  },
  num: {
    color: colors.darkGreen,
    fontSize: scale(16)
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: metrics.smallMargin
  },
  text2: {
    color: colors.grey4
  },
  text3: {
    color: colors.grey,
    fontSize: scale(16),
    fontWeight: "bold"
  },
  view2: {
    borderWidth: 1,
    marginVertical: metrics.smallMargin,
    borderColor: colors.backGrey
  }
});
