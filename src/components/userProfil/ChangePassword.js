import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from "prop-types";

import FormContainer from "../common/FormContainer";
import { fonts, metrics, colors } from "../../themes";
import { scale } from "../../helpers/functions";
import ErrorView from "../common/ErrorView";

export default class ChangePassword extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  state = {
    oldPassword: "",
    password: "",
    confPassword: "",
    error: null
  };
  clean = () => {
    this.setState({ error: null });
  };

  handleSubmit = () => {
    const { password, confPassword } = this.state;

    if (
      password.length > 5 &&
      confPassword.length > 5 &&
      password == confPassword
    ) {
      this.props.navigation.setParams({ oldPassword: password });
      this.props.navigation.goBack();
    } else {
      this.setState({ error: "confirmez le mot de passe" });
    }
  };
  setOldPassword = oldPassword => {
    this.setState({ oldPassword });
  };
  setPassword = password => {
    this.setState({ password });
  };
  setPasswordConf = confPassword => {
    this.setState({ confPassword });
  };
  render() {
    const { password, confPassword, error, oldPassword } = this.state;
    return (
      <FormContainer>
        <View style={styles.container}>
          <View style={styles.inputSection}>
            <TextInput
              secureTextEntry={true}
              style={styles.widthInput}
              underlineColorAndroid="transparent"
              placeholder="Saisissez l'ancien mot de passe"
              autoFocus={true}
              value={oldPassword}
              onChangeText={this.setOldPassword}
              placeholderTextColor={colors.DimGray}
              maxLength={30}
            />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.widthInput}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="Saisissez le nouveau mot de passe"
              placeholderTextColor={colors.DimGray}
              value={password}
              onChangeText={this.setPassword}
              maxLength={30}
            />
          </View>
          <View style={styles.inputSection}>
            <TextInput
              style={styles.widthInput}
              secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="confirmer le mot de passe"
              placeholderTextColor={colors.DimGray}
              value={confPassword}
              onChangeText={this.setPasswordConf}
              maxLength={30}
            />
          </View>
          <View style={styles.but}>
            <TouchableOpacity onPress={this.handleSubmit} activeOpacity={0.8}>
              <Text style={styles.button}>VALIDER</Text>
            </TouchableOpacity>
          </View>
          <ErrorView message={error} onDismiss={this.clean} />
        </View>
      </FormContainer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around"
  },
  widthInput: {
    fontFamily: "proximaNovaBold",
    ...fonts.medium,
    height: metrics.doubleBaseMargin,
    width: metrics.width - scale(80),
    margin: metrics.DoubleBaseMargin
  },
  inputSection: {
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(50),
    borderRadius: 4,
    padding: metrics.smallMargin,
    margin: metrics.DoubleBaseMargin,
    alignItems: "center"
  },
  button: {
    width: metrics.width,
    backgroundColor: colors.green,
    borderRadius: scale(5),
    color: colors.white,
    fontFamily: "proximaNovaBold",
    fontSize: scale(16),
    padding: scale(15),
    textAlign: "center",
    alignItems: "center"
  },
  but: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(50)
  },
  error: {
    color: colors.red2,
    fontFamily: "proximaNovaBold"
  }
});
