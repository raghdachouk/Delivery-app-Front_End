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
import PropTypes from "prop-types";

import Calender from "./Calender";
import LivraisonChezVous from "./LivraisonChezVous";

import { metrics, colors } from "../themes";
import { scale } from "../helpers/functions";
import FormContainer from "../components/common/FormContainer";

export default class DetailLivration extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

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
  onPossible = () => {
    this.setState({ pressed1: true, pressed2: false });
  };
  onPlanifier = () => {
    this.setState({ pressed1: false, pressed2: true });
  };
  onVehicule = () => {
    this.setState({ pressed11: true, pressed22: false });
  };
  onChezVous = () => {
    this.setState({ pressed11: false, pressed22: true });
  };
  onEnd = () => {
    this.setState({ focus: true });
  };
  onFocus = () => {
    this.setState({ focus: false });
  };
  onChange = text => {
    this.setState({ text });
  };
  onSubmit = () => {
    let possible = null;
    if (this.state.pressed1) possible = "Dès que possible";
    this.props.navigation.navigate("Home", {
      adresse: this.state.text,
      possible
    });
  };
  render() {
    return (
      <React.Fragment>
        <FormContainer style={styles.back}>
          <ScrollView>
            <KeyboardAvoidingView
              behavior="padding"
              enabled
              style={styles.form}
            >
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
                      onEndEditing={this.onEnd}
                      style={styles.inputStyle}
                      textContentType="location"
                      underlineColorAndroid="transparent"
                      placeholder="  |  Saisissez une nouvelle adresse"
                      placeholderTextColor={colors.grey}
                      onChangeText={this.onChange}
                      value={this.state.text}
                    />
                  </View>
                ) : (
                  <View style={styles.textwithicon}>
                    <Icon
                      name="place"
                      size={scale(25)}
                      color={colors.lightGrey2}
                    />
                    <Text style={styles.text3}>{this.state.text}</Text>
                    <Icon
                      name="clear"
                      size={25}
                      color={colors.light}
                      style={styles.xIcon}
                      onPress={this.onFocus}
                    />
                  </View>
                )}
              </View>

              <Text style={styles.text2}> Date </Text>
              <View style={styles.whiteCard}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.onPossible}>
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
                  onPress={this.onPlanifier}
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
                <TouchableOpacity activeOpacity={0.8} onPress={this.onVehicule}>
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
                      placeholderTextColor={colors.dimGrey2}
                    />
                  )}
                </TouchableOpacity>
                <View style={styles.trait} />
                <TouchableOpacity activeOpacity={0.8} onPress={this.onChezVous}>
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
          </ScrollView>
        </FormContainer>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.onSubmit}>
            <Text style={styles.yellowbutton}> ENREGISTRER </Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(45),
    borderRadius: 3,
    fontFamily: "proximaNovaReg",
    margin: metrics.doubleMediumMargin,
    marginTop: metrics.baseMargin
  },
  yellowbutton: {
    width: metrics.width,
    backgroundColor: colors.yellow,
    color: colors.white,
    fontSize: scale(16),
    fontFamily: "proximaNovaBold",
    padding: scale(17),
    textAlign: "center",
    alignItems: "center",
    marginTop: scale(60)
  },
  back: {
    backgroundColor: colors.backGrey,
    flex: 1
    //paddingTop: metrics.baseMargin
  },
  whiteCard: {
    backgroundColor: colors.white,
    elevation: scale(7),
    borderWidth: 0,
    borderTopWidth: scale(3),
    borderColor: colors.white,
    marginTop: metrics.smallMargin,
    shadowOpacity: 0.5,
    shadowRadius: metrics.smallMargin
  },
  text1: {
    fontFamily: "proximaNovaReg",
    fontSize: scale(18),
    color: colors.darkGrey2,
    marginLeft: metrics.smallMargin
  },
  text2: {
    fontFamily: "proximaNovaReg",
    fontSize: scale(17),
    color: colors.DimGray,
    marginTop: metrics.baseMargin,
    fontWeight: "500",
    paddingLeft: metrics.mediumMargin
  },
  text3: {
    fontFamily: "proximaNovaReg",
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
  },
  xIcon: {
    position: "absolute",
    right: metrics.smallMargin
  }
});
