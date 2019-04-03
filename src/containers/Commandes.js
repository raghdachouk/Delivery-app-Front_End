import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Title from "../components/common/Title";
import Encours from "../components/commandes/Encours";
import Passees from "../components/commandes/Passees";
import Avenir from "../components/commandes/Avenir";

import { metrics, colors } from "../themes";
import { scale } from "../helpers/functions";

const width = metrics.width;

export default class Commandes extends React.Component {
  static navigationOptions = {
    headerTitle: <Title />
  };
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: false,
      toggle3: false
    };
    this.onPress1 = this.onPress1.bind(this);
    this.onPress2 = this.onPress2.bind(this);
    this.onPress3 = this.onPress3.bind(this);
  }
  onPress1() {
    this.setState({
      toggle1: true,
      toggle2: false,
      toggle3: false
    });
  }
  onPress2() {
    this.setState({
      toggle1: false,
      toggle2: true,
      toggle3: false
    });
  }
  onPress3() {
    this.setState({
      toggle1: false,
      toggle2: false,
      toggle3: true
    });
  }
  render() {
    const { navigate } = this.props.navigate;
    return (
      <View>
        <NativeRouter>
          <View>
            <View style={styles.nav}>
              <Link to="/" onPress={this.onPress1}>
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle1 && styles.pressedtext
                  ]}
                >
                  PASSEES
                </Text>
              </Link>
              <Link to="/Encours" onPress={this.onPress2}>
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle2 && styles.pressedtext
                  ]}
                >
                  EN COURS
                </Text>
              </Link>
              <Link to="/Avenir" onPress={this.onPress3}>
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle3 && styles.pressedtext
                  ]}
                >
                  A VENIR
                </Text>
              </Link>
            </View>
            <View>
              <Route
                exact
                path="/"
                component={() => <Passees navigate={navigate} />}
              />
              <Route
                path="/Encours"
                component={() => <Encours navigate={navigate} />}
              />
              <Route
                path="/Avenir"
                component={() => <Avenir navigate={navigate} />}
              />
            </View>
          </View>
        </NativeRouter>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pressedtext: {
    width: width / 3,
    backgroundColor: colors.grey2,
    borderColor: colors.grey,
    borderRightWidth: 1,
    color: colors.grey,
    fontSize: scale(13),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  },
  notpressedtext: {
    width: width / 3,
    backgroundColor: colors.grey2,
    borderColor: colors.lightGrey2,
    borderRightWidth: 1,
    color: colors.lightGrey2,
    fontSize: scale(13),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  }
});
