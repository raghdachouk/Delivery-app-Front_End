import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import colors from "../themes/colors";
import metrics from "../themes/metrics";
import functions, { scale } from "../helpers/functions";

const width = Dimensions.get("window").width;
export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      test: false
    };
  }
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    navigation: PropTypes.object
  };
  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputSection}>
          <Icon
            name="user"
            size={20}
            color={colors.lightGrey}
            style={styles.marginIcon}
          />
          <TextInput
            style={styles.widthInput}
            textContentType="username"
            underlineColorAndroid="transparent"
            placeholder="Nom"
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View style={styles.inputSection}>
          <Icon
            name="envelope-o"
            size={20}
            color={colors.lightGrey}
            style={styles.marginIcon}
          />
          <TextInput
            onEndEditing={test =>
              this.setState({ test: this.validateEmail(this.state.email) })
            }
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={styles.widthInput}
            textContentType="emailAddress"
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View style={styles.inputSection}>
          <Icon
            name="lock"
            size={20}
            color={colors.lightGrey}
            style={styles.marginIcon}
          />
          <TextInput
            style={styles.widthInput}
            secureTextEntry={true}
            textContentType="password"
            underlineColorAndroid="transparent"
            placeholder="Mot de passe"
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View style={styles.inputSection}>
          <Icon
            name="lock"
            size={20}
            color={colors.lightGrey}
            style={styles.marginIcon}
          />
          <TextInput
            style={styles.widthInput}
            secureTextEntry={true}
            textContentType="password"
            underlineColorAndroid="transparent"
            placeholder="Répeter mot de passe"
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              this.state.test && this.props.nav.navigate("frame");
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.greenbutton}> SE CONNECTER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: metrics.smallMargin
  },
  widthInput: {
    width: width - metrics.doubleBaseMargin
  },
  inputSection: {
    flexDirection: "row",
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.backGrey,
    height: metrics.doubleBaseMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: 3,
    margin: metrics.smallMargin
  },
  input: {
    flex: 1,
    margin: metrics.baseMargin,
    height: metrics.doubleBaseMargin + 5,
    borderColor: colors.backGrey,
    borderWidth: 2,
    backgroundColor: colors.backGrey
  },

  greenbutton: {
    width: 250,
    backgroundColor: colors.green,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center",
    alignItems: "center",
    marginTop: metrics.baseMargin
  },
  marginIcon: {
    margin: metrics.smallMargin
  }
});
