import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import PropTypes from "prop-types";

import { colors, metrics } from "../../themes";
import { scale } from "../../helpers/functions";
import FormContainer from "../common/FormContainer";

export default class Payer extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  state = {
    value: null
  };
  _onFocus = field => console.log("focusing", field);
  valider = () => {
    this.props.navigation.setParams({ number: this.state.value.number });
    this.props.navigation.goBack();
  };
  getNumber = value => {
    this.setState({ value });
  };
  render() {
    const { value } = this.state;
    return (
      <FormContainer>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Carte de crédit ou de débit</Text>
            <View style={styles.credit}>
              <LiteCreditCardInput
                value={value}
                onChange={this.getNumber}
                autoFocus
                requiresName
                inputStyle={styles.input}
                validColor={colors.black}
                invalidColor={colors.red}
                placeholderColor={colors.DimGray}
                placeholders={{
                  number: "Numéro de carte",
                  expiry: "MM/AA",
                  cvc: "CVC"
                }}
                //onFocus={this._onFocus}
              />
            </View>
          </View>
          <View>
            <TouchableOpacity activeOpacity={0.8} onPress={this.valider}>
              <Text style={styles.yellowbutton}> VALIDER </Text>
            </TouchableOpacity>
          </View>
        </View>
      </FormContainer>
    );
  }
}

const styles = StyleSheet.create({
  credit: {
    backgroundColor: colors.white,
    height: scale(50),
    marginTop: metrics.baseMargin,
    justifyContent: "center"
  },
  container: {
    backgroundColor: colors.backGrey,
    flex: 1,
    justifyContent: "space-between"
  },
  label: {
    color: colors.black,
    fontSize: scale(12)
  },
  input: {
    fontSize: scale(16),
    color: colors.black
  },
  yellowbutton: {
    width: metrics.width,
    backgroundColor: colors.yellow,
    color: colors.white,
    fontSize: scale(18),
    padding: scale(16),
    textAlign: "center",
    alignItems: "center",
    fontFamily: "proximaNovaBold"
  },
  text: {
    fontSize: scale(18),
    color: colors.grey,
    fontFamily: "proximaNovaBold"
  }
});
