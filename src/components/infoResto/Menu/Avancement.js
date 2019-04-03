import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet
} from "react-native";
//import Modal from 'react-native-modalbox';
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import ModalRecu from "./ModalRecu";
import colors from "../../../themes/colors";
import metrics from "../../../themes/metrics";
import { scale } from "../../../helpers/functions";
export default class Avancement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }
  _toggleModal = () => this.setState({ isModalVisible: true });
  render() {
    return (
      <View>
        <ScrollView>
          <Text style={styles.title}>Plat de lasagne</Text>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.avance}>Arrivée prévu à destination{"\n"}</Text>
            <Text style={styles.time}>15:10</Text>
          </View>
          <View style={styles.trait} />
          <View style={styles.viewText}>
            <Text style={styles.enLivraison}>En livraison</Text>
            <Icon name="location-searching" size={25} color="#FAB124" />
          </View>
          <View style={styles.viewDetail}>
            <Text style={styles.detail}>14:50 Prete à la prise en charge</Text>
            <Text style={styles.detail}>
              14:35 Commande en cours de préparation
            </Text>
            <Text style={styles.detail}>
              14:30 Confirmation auprés de restaurant
            </Text>
          </View>
          <View style={styles.commande}>
            <Text style={styles.info}>INFORMATIONS SUR LA COMMANDE</Text>
            <View style={styles.comm}>
              <Text style={styles.titre}>
                <Text style={styles.number}>1x </Text> Plat de lasagne
              </Text>
              <View style={styles.viewPrix}>
                <Text style={styles.titre}>TOTAL : 18.00 € </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={this._toggleModal}
                >
                  <Text style={styles.recu}>Voir le recu</Text>
                </TouchableOpacity>
              </View>

              <ModalRecu />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalView: {
    borderRadius: 7,
    borderColor: colors.white,
    padding: metrics.baseMargin,
    alignItems: "center",
    height: scale(290),
    width: scale(320)
  },
  title: {
    fontWeight: "bold",
    fontSize: scale(20),
    color: colors.grey,
    margin: metrics.baseMargin
  },
  avance: {
    fontWeight: "bold",
    fontSize: scale(18),
    color: colors.grey3
  },
  time: {
    fontWeight: "bold",
    fontSize: scale(22),
    color: colors.grey
  },
  trait: {
    borderWidth: 2,
    borderColor: colors.darkGreen,
    borderStartColor: colors.darkGreen,
    margin: metrics.smallMargin
  },
  viewText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: metrics.doubleMediumMargin,
    marginVertical: metrics.mediumMargin
  },
  enLivraison: {
    fontWeight: "bold",
    fontSize: scale(20),
    color: colors.grey
  },
  viewDetail: {
    paddingLeft: scale(25),
    paddingTop: metrics.xsmallMargin
  },
  detail: {
    margin: metrics.xsmallMargin,
    color: colors.grey3,
    fontSize: scale(16)
  },
  info: {
    fontWeight: "bold",
    color: colors.grey3,
    fontSize: scale(17),
    marginLeft: metrics.doubleMediumMargin,
    marginBottom: metrics.baseMargin
  },
  commande: {
    backgroundColor: colors.backGrey,
    paddingVertical: metrics.baseMargin,
    height: "100%",
    paddingBottom: scale(70)
  },
  comm: {
    backgroundColor: colors.white,
    paddingVertical: metrics.baseMargin,
    paddingHorizontal: metrics.doubleMediumMargin
  },
  titre: {
    fontWeight: "bold",
    fontSize: scale(16),
    color: colors.grey
  },
  number: {
    color: colors.darkGreen,
    fontSize: scale(16)
  },
  viewPrix: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: metrics.doubleMediumMargin
  },
  recu: {
    fontWeight: "bold",
    fontSize: scale(16),
    color: colors.grey3
  }
});
