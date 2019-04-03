import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import PropTypes from "prop-types";
import { NavigationActions } from "react-navigation";

import { colors, metrics } from "../../themes";
import { scale } from "../../helpers/functions";
import { register } from "../../api/auth";
import { NAME_REGEX } from "../../helpers/constants";
import style from "./style";

import Button from "../../components/common/Button";
import ErrorView from "../../components/common/ErrorView";
import SuccessView from "../../components/common/SuccessView";
import FormContainer from "../../components/common/FormContainer";

const styles = StyleSheet.create({
  widthInput: {
    height: metrics.doubleBaseMargin,
    width: scale(120),
    fontSize: scale(16)
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  inputSection: {
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.grey2,
    height: scale(50),
    borderRadius: 4,
    margin: metrics.baseMargin,
    justifyContent: "center",
    paddingVertical: metrics.smallMargin,
    alignItems: "center"
  },
  footer: {
    ...style.footer,
    justifyContent: "flex-end"
  }
});

export default class Register extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    loading: false,
    firstName: "",
    lastName: "",
    error: null,
    success: null
  };

  lastName = null;

  componentDidUpdate(_, { success }) {
    if (!success && this.state.success) {
      setTimeout(() => {
        this.props.navigation.dispatch(
          NavigationActions.navigate({ routeName: "FirstStep" })
        );
      }, 1000);
    }
  }

  clean = () => {
    this.setState({ error: null, success: null });
  };

  setFirstName = firstName => {
    this.setState({ firstName });
  };

  setLastName = lastName => {
    this.setState({ lastName });
  };

  setLastNameRef = ref => {
    this.lastName = ref;
  };

  goToLastName = () => {
    this.lastName.focus();
  };

  handleSubmit = () => {
    const { firstName, lastName, loading } = this.state;
    if (!loading && NAME_REGEX.test(firstName) && NAME_REGEX.test(lastName)) {
      const {
        email,
        password,
        mobile,
        countryCode
      } = this.props.navigation.state.params;
      this.setState({ loading: true });
      register({
        email,
        password,
        firstName,
        lastName,
        mobile: `${countryCode}${mobile}`
      })
        .then(({ success, message }) => {
          Keyboard.dismiss();
          this.setState({
            loading: false,
            success: success ? message : null,
            error: !success ? message : null
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
    const { loading, firstName, lastName, error, success } = this.state;
    return (
      <FormContainer>
        <View style={style.container}>
          <View style={styles.subContainer}>
            <Text style={style.label}>Saisissez votre nom complet</Text>
            <KeyboardAvoidingView style={styles.name}>
              <View style={styles.inputSection}>
                <TextInput
                  style={styles.widthInput}
                  underlineColorAndroid="transparent"
                  placeholder="Prénom"
                  placeholderTextColor={colors.DimGray}
                  autoFocus={true}
                  value={firstName}
                  onChangeText={this.setFirstName}
                  maxLength={20}
                  onSubmitEditing={this.goToLastName}
                />
              </View>
              <View style={styles.inputSection}>
                <TextInput
                  ref={this.setLastNameRef}
                  style={styles.widthInput}
                  underlineColorAndroid="transparent"
                  placeholder="Nom"
                  placeholderTextColor={colors.DimGray}
                  value={lastName}
                  onChangeText={this.setLastName}
                  maxLength={20}
                  onSubmitEditing={this.handleSubmit}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
          <View style={styles.footer}>
            <Button
              btnText="SUIVANT"
              onPress={this.handleSubmit}
              loading={loading}
              disabled={
                !NAME_REGEX.test(firstName) || !NAME_REGEX.test(lastName)
              }
            />
            <ErrorView message={error} onDismiss={this.clean} />
            <SuccessView message={success} onDismiss={this.clean} />
          </View>
        </View>
      </FormContainer>
    );
  }
}
