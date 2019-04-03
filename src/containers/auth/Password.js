import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationActions, StackActions } from "react-navigation";

import { colors, metrics, fonts } from "../../themes";
import { scale } from "../../helpers/functions";
import style from "./style";
import { signIn } from "../../api/auth";

import Button from "../../components/common/Button";
import ErrorView from "../../components/common/ErrorView";
import FormContainer from "../../components/common/FormContainer";

const styles = StyleSheet.create({
  widthInput: {
    ...fonts.medium,
    height: metrics.doubleBaseMargin,
    width: metrics.width - scale(80)
  },
  inputSection: {
    flexDirection: "row",
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(50),
    borderRadius: 4,
    padding: metrics.smallMargin,
    margin: metrics.DoubleBaseMargin,
    alignItems: "center"
  },
  footer: {
    ...style.footer,
    justifyContent: "flex-end"
  }
});

export default class Password extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    password: "",
    hidePassword: true,
    error: null,
    loading: false
  };

  clean = () => {
    this.setState({ error: null });
  };

  setPassword = password => {
    this.setState({ password });
  };

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  handleSubmit = () => {
    const { password } = this.state;
    if (password.trim().length >= 5) {
      const {
        email,
        mobile,
        countryCode,
        isUser
      } = this.props.navigation.state.params;
      if (isUser) {
        this.setState({ loading: true });
        signIn({
          mobile: `${countryCode}${mobile}`,
          password
        })
          .then(({ success, message }) => {
            Keyboard.dismiss();
            if (!success)
              this.setState({
                loading: false,
                error: message
              });
            else
              this.setState({ loading: false }, () => {
                this.props.navigation.dispatch(
                  StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: "Home" })]
                  })
                );
              });
          })
          .catch(e => {
            Keyboard.dismiss();
            this.setState({ loading, error: e.message });
          });
      } else {
        this.props.navigation.navigate("Register", {
          password,
          email,
          mobile,
          countryCode
        });
      }
    }
  };

  render() {
    const { password, hidePassword, loading } = this.state;
    const { isUser } = this.props.navigation.state.params;
    return (
      <FormContainer>
        <View style={style.container}>
          <KeyboardAvoidingView style={style.subContainer}>
            <Text style={style.label}>
              {!isUser
                ? "Créez le mot de passe de votre compte"
                : "Connectez-vous pour continuer"}
            </Text>
            <View style={styles.inputSection}>
              <TextInput
                style={styles.widthInput}
                secureTextEntry={this.state.hidePassword}
                underlineColorAndroid="transparent"
                placeholder="Saisissez vote mot de passe"
                autoFocus={true}
                placeholderTextColor={colors.DimGray}
                value={password}
                onChangeText={this.setPassword}
                onEndEditing={this.handleSubmit}
                maxLength={30}
              />
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.visibilityBtn}
                onPress={this.managePasswordVisibility}
              >
                <Icon
                  size={scale(40)}
                  name={hidePassword ? "eye-off-outline" : "eye-outline"}
                  style={styles.btnImage}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <Button
              btnText="SUIVANT"
              onPress={this.handleSubmit}
              loading={loading}
              disabled={password.trim().length < 6}
            />
          </View>
          <ErrorView message={this.state.error} onDismiss={this.clean} />
        </View>
      </FormContainer>
    );
  }
}
