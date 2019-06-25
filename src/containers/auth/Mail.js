import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import PropTypes from "prop-types";

import { metrics, colors, fonts } from "../../themes";
import { scale } from "../../helpers/functions";
import { EMAIL_REGEX } from "../../helpers/constants";
import { checkEmail } from "../../api/auth";
import style from "./style";

import Button from "../../components/common/Button";
import ErrorView from "../../components/common/ErrorView";
import FormContainer from "../../components/common/FormContainer";

const styles = StyleSheet.create({
  widthInput: {
    height: metrics.doubleBaseMargin,
    width: metrics.width - scale(60),
    ...fonts.medium,
    fontFamily: "proximaNovaReg"
  },
  inputSection: {
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(50),
    borderRadius: 4,
    padding: metrics.smallMargin,
    margin: metrics.baseMargin,
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    ...style.footer,
    justifyContent: "flex-end"
  }
});

export default class Mail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    email: "",
    loading: false,
    error: null
  };

  clean = () => {
    this.setState({ error: null });
  };

  setEmail = email => {
    this.setState({ email });
  };

  handleSubmit = () => {
    const { email, loading } = this.state;
    if (!loading && EMAIL_REGEX.test(email)) {
      this.setState({ loading: true });
      checkEmail({
        email
      })
        .then(({ success, message }) => {
          Keyboard.dismiss();
          this.setState({ loading: false }, () => {
            if (success) {
              const {
                mobile,
                countryCode
              } = this.props.navigation.state.params;
              this.props.navigation.navigate("Password", {
                email,
                mobile,
                countryCode
              });
            } else this.setState({ error: message, loading: false });
          });
        })
        .catch(e => {
          Keyboard.dismiss();
          this.setState({
            loading: false,
            error: e.message
          });
        });
    }
  };

  render() {
    const { loading, email, error } = this.state;
    return (
      <FormContainer>
        <View style={style.container}>
          <KeyboardAvoidingView style={style.subContainer}>
            <Text style={style.label} numberOfLines={3}>
              Quelle est votre adresse e-mail ?
            </Text>
            <View style={styles.inputSection}>
              <TextInput
                style={styles.widthInput}
                keyboardType="email-address"
                textContentType="emailAddress"
                underlineColorAndroid="transparent"
                placeholder="nom@exemple.com"
                placeholderTextColor={colors.DimGray}
                autoFocus={true}
                value={email}
                onChangeText={this.setEmail}
                maxLength={30}
                onSubmitEditing={this.handleSubmit}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
            <Button
              btnText="SUIVANT"
              onPress={this.handleSubmit}
              loading={loading}
              disabled={!EMAIL_REGEX.test(email)}
            />
          </View>
          <ErrorView message={error} onDismiss={this.clean} />
        </View>
      </FormContainer>
    );
  }
}
