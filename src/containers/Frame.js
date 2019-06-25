import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import colors from "../themes/colors";
import metrics from "../themes/metrics";
import { scale } from "../helpers/functions";

const width = metrics.width;
export default class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }
  static navigationOptions = {
    headerTitle: "Confirmer le numéro de téléphone"
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>
            veuillez saisir votre code de confirmation
          </Text>
        </View>

        <View>
          <TextInput
            style={styles.codeInput}
            placeholder="XXXX-XXXX"
            onChangeText={code => this.setState({ code })}
            underlineColorAndroid={colors.green}
            textAlign="center"
            keyboardType="number-pad"
          />
        </View>
        <View>
          <Text style={styles.textStyle2}>
            Saisissez le code que vous avez reçu par SMS
          </Text>
        </View>
        <View style={{ paddingTop: scale(160) }}>
          <View style={{ height: metrics.bigMargin }}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.greenbutton}> ENVOYER A NOUVEAU LE SMS </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: metrics.bigMargin,
              paddingTop: metrics.baseMargin
            }}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.greenbutton}>
                {" "}
                ENVOYER A UN AUTRE NUMERO{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: colors.backGrey,
    alignItems: "center",
    height: metrics.height,
    paddingTop: metrics.doubleBaseMargin,

    flexDirection: "column"
  },
  codeInput: {
    margin: metrics.smallMargin,
    height: metrics.doubleBaseMargin * 2,
    width: scale(180),
    fontSize: scale(16)
  },
  textStyle: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: colors.DimGray
  },
  greenbutton: {
    width: width - scale(60),
    backgroundColor: colors.green,
    borderRadius: 2,
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center",
    alignItems: "center"
  },
  textStyle2: {
    color: colors.grey,
    fontWeight: "bold",
    padding: metrics.baseMargin
  }
});
