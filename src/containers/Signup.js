import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Connexion from "./Connexion";
import Inscription from "./Inscription";
import { images, metrics, colors } from "../themes";
import { scale } from "../helpers/functions";
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: false,
      initial: ""
    };
    this.onSignUp = this.onSignUp.bind(this);
    this.onConnect = this.onConnect.bind(this);
  }
  onConnect() {
    this.setState({ toggle2: false, toggle1: true });
  }
  onSignUp() {
    this.setState({ toggle2: true, toggle1: false });
  }
  render() {
    const navigate = this.props.navigation.getParam("navigate", "NO-Category");
    // const tab = this.props.navigation.getParam('tab', 'NO-Category');
    // if (tab==='1'){
    //     this.setState({initial:'/Connexion',second:'/Inscription'})
    // }else {
    //     this.setState({initial:'/Inscription',second:'/Connexion'})
    // }
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="position" enabled>
          <View>
            <Image source={images.logo} style={styles.imagestyle} />

            <NativeRouter>
              <View>
                <View style={styles.nav}>
                  <Link to="/Connexion" onPress={this.onConnect}>
                    <Text
                      style={[
                        styles.notpressedtext,
                        this.state.toggle1 && styles.pressedtext
                      ]}
                    >
                      CONNEXION
                    </Text>
                  </Link>
                  <Link to="/Inscription" onPress={this.onSignUp}>
                    <Text
                      style={[
                        styles.notpressedtext,
                        this.state.toggle2 && styles.pressedtext
                      ]}
                    >
                      INSCRIPTION
                    </Text>
                  </Link>
                </View>

                <View>
                  <Route
                    path="/Connexion"
                    component={() => <Connexion nav={navigate} />}
                  />
                  <Route
                    path="/Inscription"
                    component={() => <Inscription nav={navigate} />}
                  />
                </View>
              </View>
            </NativeRouter>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  imagestyle: {
    width: metrics.width,
    height: scale(250)
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: metrics.smallMargin
  },
  pressedtext: {
    width: metrics.width / 2,
    backgroundColor: colors.white,
    borderColor: colors.backGrey,
    borderWidth: 4,
    borderBottomWidth: 0,
    color: colors.grey,
    fontSize: scale(15),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  },
  notpressedtext: {
    width: metrics.width / 2,
    backgroundColor: colors.backGrey,
    borderColor: colors.backGrey,
    borderWidth: 4,
    borderBottomWidth: 0,
    color: colors.grey,
    fontSize: scale(15),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  }
});
