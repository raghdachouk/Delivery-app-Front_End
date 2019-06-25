import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Modal from "react-native-modal";

import colors from "../../../themes/colors";
import metrics from "../../../themes/metrics";
import { scale } from "../../../helpers/functions";
export default class ModalRecu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  _toggleModal = () => this.setState({ isModalVisible: true });

  onpress = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  render() {
    return (
      <View>
        <Text style={styles.titre}>
          <Text style={styles.number}>1x </Text> Plat de lasagne
        </Text>
        <View style={styles.viewPrix}>
          <Text style={styles.titre}>TOTAL : 18.00 € </Text>
          <TouchableOpacity activeOpacity={0.8} onPress={this._toggleModal}>
            <Text style={styles.recu}>Voir le recu</Text>
          </TouchableOpacity>
        </View>

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
            <View style={styles.code}>
              <Text style={styles.text3}>Code de confirmation :</Text>
              <Text style={styles.text3}>12345</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  model: {
    alignItems: "center"
  },
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
    borderColor: colors.white,
    padding: metrics.baseMargin,
    height: scale(350),
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
  code: {
    marginTop: metrics.smallMargin,
    backgroundColor: colors.backGrey,
    borderRadius: scale(10),
    paddingVertical: metrics.baseMargin,
    alignItems: "center"
  },
  text1: {
    color: colors.grey,
    fontFamily: "proximaNovaBold",
    fontSize: scale(17),
    alignSelf: "center"
  },
  commande: {
    borderWidth: 1,
    marginVertical: metrics.mediumMargin,
    borderColor: colors.backGrey
  },
  number: {
    fontFamily: "proximaNovaBold",
    fontSize: scale(16),
    color: colors.grey
  },
  num: {
    fontFamily: "proximaNovaReg",
    color: colors.darkGreen,
    fontSize: scale(16)
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: metrics.smallMargin
  },
  text2: {
    fontFamily: "proximaNovaReg",
    color: colors.grey4
  },
  text3: {
    color: colors.grey,
    fontSize: scale(16),
    fontFamily: "proximaNovaBold"
  },
  view2: {
    borderWidth: 1,
    marginVertical: metrics.smallMargin,
    borderColor: colors.backGrey
  },
  titre: {
    fontFamily: "proximaNovaBold",
    fontSize: scale(16),
    color: colors.grey
  },
  viewPrix: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: metrics.doubleMediumMargin
  },
  recu: {
    fontFamily: "proximaNovaBold",
    fontSize: scale(16),
    color: colors.grey3
  }
});
