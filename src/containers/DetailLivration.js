import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import Calender from "./Calender";
import LivraisonChezVous from "./LivraisonChezVous";

import { metrics, colors } from "../themes";
import { scale } from "../helpers/functions";

export default class DetailLivration extends Component {
  static navigationOptions = {
    title: "Détails de la livration"
  };
  constructor(props) {
    super(props);
    this.state = {
      pressed1: false,
      pressed2: false,
      pressed11: false,
      pressed22: false,
      isVisible: false,
      focus: false,
      text: ""
    };
  }

  render() {
    return (
      <View style={styles.back}>
        <ScrollView>
          <View style={styles.whiteCard}>
            {!this.state.focus ? (
              <View>
                <View style={styles.textwithicon}>
                  <Icon
                    name="place"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text1}>
                    Saisissez une nouvelle adresse
                  </Text>
                </View>
                <TextInput
                  onEndEditing={() => this.setState({ focus: true })}
                  style={styles.inputStyle}
                  textContentType="location"
                  underlineColorAndroid="transparent"
                  placeholder="  |  Saisissez une nouvelle adresse"
                  placeholderTextColor={colors.backGrey}
                  onChangeText={text => this.setState({ text })}
                  value={this.state.text}
                />
              </View>
            ) : (
              <View style={styles.textwithicon}>
                <Icon name="place" size={scale(25)} color={colors.lightGrey2} />
                <Text style={styles.text3}>{this.state.text}</Text>
                <Icon
                  name="clear"
                  size={25}
                  color="#A8A8A8"
                  style={{ position: "absolute", right: metrics.smallMargin }}
                  onPress={() => this.setState({ focus: false })}
                />
              </View>
            )}
          </View>
          <KeyboardAvoidingView behavior="position" enabled style={styles.form}>
            <Text style={styles.text2}> Date </Text>
            <View style={styles.whiteCard}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  this.setState({ pressed1: true, pressed2: false })
                }
              >
                <View style={styles.textwithicon}>
                  <Icon
                    name="access-alarm"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text3}>Dès que possible</Text>
                  {this.state.pressed1 && (
                    <Icon
                      name="check"
                      size={scale(25)}
                      color={colors.darkGreen}
                      style={styles.iconpos}
                    />
                  )}
                </View>
              </TouchableOpacity>
              <View style={styles.trait} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  this.setState({ pressed1: false, pressed2: true })
                }
              >
                <View style={styles.textwithicon}>
                  <Icon
                    name="event-note"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text3}>Planifier une commande</Text>
                  {this.state.pressed2 && (
                    <Icon
                      name="check"
                      size={scale(25)}
                      color={colors.darkGreen}
                      style={styles.iconpos}
                    />
                  )}
                </View>
                {this.state.pressed2 && (
                  <Calender isVisible={this.state.pressed2} />
                )}
              </TouchableOpacity>
            </View>

            <Text style={styles.text2}>Options de livraison</Text>
            <View style={styles.whiteCard}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  this.setState({ pressed11: true, pressed22: false })
                }
              >
                <View style={styles.textwithicon}>
                  <Icon
                    name="directions-car"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text3}>
                    Retrouvez-vous au niveau du véhicule{" "}
                  </Text>

                  {this.state.pressed11 && (
                    <Icon
                      name="check"
                      size={scale(25)}
                      color={colors.darkGreen}
                      style={styles.iconpos}
                    />
                  )}
                </View>
                {this.state.pressed11 && (
                  <TextInput
                    style={{ marginLeft: scale(45) }}
                    underlineColorAndroid="transparent"
                    placeholder="  | Ajouter des instructions pour la livraison"
                    placeholderTextColor={colors.backGrey}
                  />
                )}
              </TouchableOpacity>
              <View style={styles.trait} />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  this.setState({ pressed11: false, pressed22: true })
                }
              >
                <View style={styles.textwithicon}>
                  <Icon
                    name="store"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text3}>Livraison chez vous</Text>
                  {this.state.pressed22 && (
                    <Icon
                      name="check"
                      size={scale(25)}
                      color={colors.darkGreen}
                      style={styles.iconpos}
                    />
                  )}
                </View>
                {this.state.pressed22 && <LivraisonChezVous />}
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.yellowbutton}> ENREGISTRE </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: colors.grey2,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(45),
    borderRadius: 3,
    margin: metrics.doubleMediumMargin,
    marginTop: metrics.baseMargin
  },
  yellowbutton: {
    width: scale(270),
    backgroundColor: colors.yellow,
    borderRadius: 4,
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    padding: scale(17),
    textAlign: "center",
    alignItems: "center",
    marginTop: metrics.doubleBaseMargin
  },
  back: {
    backgroundColor: colors.backGrey,
    flex: 1,
    marginTop: metrics.baseMargin
  },
  whiteCard: {
    backgroundColor: colors.white,
    elevation: 7,
    borderWidth: 0,
    borderTopWidth: scale(3),
    borderColor: colors.white,
    marginTop: metrics.smallMargin,
    shadowOpacity: 0.5,
    shadowRadius: metrics.smallMargin
  },
  text1: {
    fontSize: scale(18),
    color: colors.darkGrey2,
    marginLeft: metrics.smallMargin
  },
  text2: {
    fontSize: scale(17),
    color: colors.darkGrey2,
    marginTop: metrics.baseMargin,
    fontWeight: "500"
  },
  text3: {
    fontSize: scale(15),
    color: colors.darkGrey2,
    marginLeft: metrics.smallMargin,
    fontWeight: "500"
  },
  textwithicon: {
    flexDirection: "row",
    marginLeft: metrics.baseMargin,
    margin: metrics.smallMargin,
    marginRight: metrics.smallMargin
  },
  trait: {
    borderWidth: 1,
    borderColor: colors.backGrey,
    margin: metrics.smallMargin
  },
  iconpos: {
    position: "absolute",
    right: metrics.smallMargin
  },
  form: {
    flex: 1,
    justifyContent: "space-between"
  }
});
