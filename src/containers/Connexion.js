import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import colors from "../themes/colors";
import metrics from "../themes/metrics";
import { scale } from "../helpers/functions";

const width = metrics.width;
export default class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      mdp: "",
      test: false
    };
    this.onEnd = this.onEnd.bind(this);
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
  onEnd() {
    this.setState({ test: this.validateEmail(this.state.email) });
  }

  render() {
    // console.log(this.props.navigation);

    return (
      <View style={styles.container}>
        <View style={styles.inputSection}>
          <Icon
            name="user"
            size={20}
            color={colors.lightGrey}
            style={styles.icon}
          />
          <TextInput
            style={styles.widthInput}
            onEndEditing={this.onEnd}
            textContentType="emailAddress"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
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
            style={styles.icon}
          />
          <TextInput
            style={styles.widthInput}
            secureTextEntry={true}
            value={this.state.mdp}
            underlineColorAndroid="transparent"
            placeholder="Mot de passe"
            placeholderTextColor={colors.lightGrey}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.state.test && this.props.nav.navigate("frame")}
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
  inputSection: {
    flexDirection: "row",

    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.backGrey,
    height: scale(45),
    borderRadius: 3,
    margin: metrics.baseMargin
  },
  input: {
    flex: 1,
    margin: metrics.baseMargin,
    height: scale(45),
    borderColor: colors.backGrey,
    borderWidth: 2,
    backgroundColor: colors.backGrey
  },
  widthInput: {
    width: width - metrics.doubleBaseMargin
  },
  greenbutton: {
    width: scale(250),
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
    marginTop: metrics.doubleBaseMargin
  },
  icon: {
    margin: metrics.smallMargin
  }
});
