import React, { Component } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  TextInput
} from "react-native";

import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconIcon from "react-native-vector-icons/Ionicons";
import metrics from "../../../themes/metrics";
import colors from "../../../themes/colors";
import { scale } from "../../../helpers/functions";
export default class Panier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "" ? code : ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView behavior="position">
            <View style={styles.view1}>
              <Text style={styles.name}>Nom resturant</Text>
              <View style={styles.duree}>
                <Icon
                  name="access-time"
                  size={scale(20)}
                  color={colors.darkGrey}
                />
                <Text style={styles.periode}>
                  DUREE DE LIVRAISON ESTIMEE : 15-20 MIN
                </Text>
              </View>
            </View>
            <View style={styles.containerMap} />
            <View style={styles.map}>
              <MapView
                style={styles.styleMap}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.081
                }}
              >
                <Marker
                  coordinate={{
                    latitude: 37.78825,
                    longitude: -122.4324
                  }}
                  pinColor={colors.marker}
                />
              </MapView>
              <View style={styles.view2}>
                <Text style={styles.loc}>
                  Paris Lafayette {"\n"}Paris{"\n"}
                </Text>
                <Text numberOfLines={2}>
                  Livrée à la route du client {"\n"}Ajouter un commentaire
                </Text>
              </View>
            </View>
            <View style={styles.trait} />
            <View style={styles.textWithIcon}>
              <Icon
                name="access-time"
                size={scale(20)}
                color={colors.darkGrey3}
                style={styles.icon}
              />
              <Text style={styles.text1}>Dès que possible</Text>
            </View>
            <View style={styles.trait} />
            <View style={styles.commande}>
              <Text style={styles.text2}>Votre commande</Text>
              <View style={styles.view3}>
                <Text style={styles.number}>
                  {" "}
                  1x
                  <Text style={styles.title}> Plat de lasagne</Text>
                </Text>
                <Text style={styles.title}>4,00 €</Text>
              </View>
              <Text style={styles.textInput}>{this.state.text}</Text>
            </View>
            <View style={styles.trait2} />
            <TextInput
              placeholder="Ajoutez un commentaire (Servieltte en plus, sauce en plus,..."
              style={styles.input}
              numberOfLines={2}
              multiline={true}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />

            <View style={styles.trait2} />
            <View style={styles.view4}>
              <Text style={styles.text3}>Sous-total</Text>
              <Text style={styles.textGreen}>4,00 €</Text>
            </View>
            <View style={styles.view4}>
              <Text style={styles.text3}>Frais de livraison</Text>
              <Text style={styles.textGreen}>3,00 €</Text>
            </View>
            <View style={styles.trait} />
            <View style={styles.view4}>
              <Text style={styles.textGrey}>TOTAL</Text>
              <Text style={styles.textGreen}>7,00 €</Text>
            </View>
            <View style={styles.trait} />
            <View style={styles.viewTotal}>
              <Text style={styles.textBold}>Payer</Text>
              <Text style={styles.textBold}>CHANGER</Text>
            </View>
            <View style={styles.trait2} />
            <View style={styles.viewInput}>
              <IconIcon
                name="ios-barcode"
                size={scale(25)}
                color={colors.silver}
                style={styles.iconCode}
              />
              <TextInput
                placeholder="AJOUTER UN CODE PRPMOTIONNEL"
                style={styles.inputStyle}
                onChangeText={code => this.setState({ code })}
                value={this.state.code}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.greenbutton}>PAYER</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  greenbutton: {
    width: metrics.width,
    height: scale(45),
    backgroundColor: colors.green,
    borderRadius: 1,
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    textAlign: "center",
    alignItems: "center",
    marginTop: metrics.smallMargin
  },
  container: {
    marginTop: metrics.baseMargin
  },
  view1: {
    alignItems: "center"
  },
  name: {
    fontWeight: "bold",
    fontSize: scale(22),
    color: colors.darkGrey3
  },
  duree: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: metrics.smallMargin
  },
  periode: {
    color: colors.darkGrey,
    fontSize: scale(14)
  },
  styleMap: {
    overflow: "hidden",
    position: "relative",
    left: 0,
    top: 0,
    right: -metrics.doubleMediumMargin,
    bottom: metrics.baseMargin,
    height: scale(150),
    width: scale(150),
    borderRadius: 2,
    borderWidth: 2,
    borderColor: colors.darkGrey3
  },
  containerMap: {
    borderWidth: 1,
    borderColor: colors.silver
  },
  map: {
    alignItems: "center",
    flexDirection: "row",
    padding: metrics.smallMargin
  },
  view2: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: metrics.smallMargin
  },
  loc: {
    fontWeight: "bold",
    fontSize: scale(18),
    color: colors.darkGrey3
  },
  tait: {
    borderWidth: 1,
    borderColor: colors.silver
  },
  icon: {
    paddingRight: metrics.smallMargin
  },
  text1: {
    color: colors.darkGrey3,
    fontSize: scale(17)
  },
  text2: {
    color: colors.darkGrey,
    fontSize: scale(16)
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: metrics.smallMargin
  },
  number: {
    color: colors.darkGreen,
    fontSize: scale(16)
  },
  title: {
    color: colors.grey,
    fontSize: scale(16)
  },
  textInput: {
    color: colors.silver,
    fontSize: scale(16)
  },
  trait2: {
    borderWidth: 0.8,
    borderColor: colors.silver
  },
  input: {
    height: scale(70),
    width: "90%",
    textAlign: "center",
    fontSize: scale(15)
  },
  textWithIcon: {
    flexDirection: "row",
    padding: metrics.smallMargin,
    marginLeft: metrics.baseMargin,
    paddingVertical: metrics.mediumMargin
  },
  view4: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin
  },
  commande: {
    marginLeft: metrics.baseMargin,
    padding: metrics.smallMargin,
    marginBottom: metrics.mediumMargin
  },
  text3: {
    color: colors.silver,
    fontSize: scale(15)
  },
  textGreen: {
    color: colors.darkGreen,
    fontSize: scale(15)
  },
  textGrey: {
    color: colors.grey,
    fontSize: scale(15)
  },
  textBold: {
    color: colors.grey,
    fontSize: scale(15),
    fontWeight: "bold"
  },
  viewTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: metrics.mediumMargin,
    paddingHorizontal: metrics.baseMargin
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: metrics.baseMargin
  },
  iconCode: {
    justifyContent: "center",
    padding: metrics.xsmallMargin
  },
  inputStyle: {
    height: metrics.doubleBaseMargin,
    width: "90%",
    textAlign: "center"
  }
});
