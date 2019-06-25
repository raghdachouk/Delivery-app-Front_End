import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

import { colors, metrics } from "../../themes";
import { Avatar } from "react-native-elements";
import { scale } from "../../helpers/functions";

export default class PersonalInformation extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    image: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string
  };
  changePassword = () => {
    this.props.navigation.navigate("changePassword");
  };
  render() {
    const {
      image,
      firstName,
      lastName,
      email
    } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Avatar
            containerStyle={styles.avatar}
            size={scale(120)}
            rounded
            source={{ uri: image }}
          />
          <Text style={[styles.text, styles.text2]}>
            {firstName} {lastName}
          </Text>
          <Text style={styles.text}> {email}</Text>
        </View>

        <View style={styles.but}>
          <TouchableOpacity onPress={this.changePassword} activeOpacity={0.8}>
            <Text style={styles.button}>Modifier le mot de passe</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    flex: 1
  },
  top: {
    width: metrics.width,
    height: metrics.height / 3,
    backgroundColor: colors.grey,
    alignItems: "center"
  },
  avatar: {
    padding: metrics.baseMargin
  },
  text: {
    fontSize: scale(17),
    fontFamily: "proximaNovaBold",
    color: colors.white
  },
  text2: {
    fontFamily: "proximaNovaReg",
    fontSize: scale(20),
    padding: metrics.smallMargin
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
    marginTop: scale(100)
  }
});
