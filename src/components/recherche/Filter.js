import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import Trier from "./Trier";
import Prix from "./Prix";
import Dietetique from "./Dietetique";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: false,
      toggle3: false
    };
  }
  render() {
    //const { navigate } = this.props;

    return (
      <View>
        <NativeRouter>
          <View>
            <View style={styles.nav}>
              <Link
                to="/"
                onPress={() =>
                  this.setState({
                    toggle1: true,
                    toggle2: false,
                    toggle3: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle1 && styles.pressedtext
                  ]}
                >
                  Trier
                </Text>
              </Link>
              <Link
                to="/Prix"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: true,
                    toggle3: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle2 && styles.pressedtext
                  ]}
                >
                  Prix
                </Text>
              </Link>
              <Link
                to="/Dietetique"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: false,
                    toggle3: true
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle3 && styles.pressedtext
                  ]}
                >
                  Diètétique
                </Text>
              </Link>
            </View>
            <View>
              <Route exact path="/" component={() => <Trier />} />
              <Route path="/Prix" component={() => <Prix />} />
              <Route path="/Dietetique" component={() => <Dietetique />} />
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
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  pressedtext: {
    width: metrics.width / 3,
    backgroundColor: colors.white,
    color: colors.grey,
    borderBottomWidth: 1,
    borderColor: colors.backGrey,
    fontSize: scale(17),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  },
  notpressedtext: {
    width: metrics.width / 3,
    backgroundColor: colors.white,
    color: colors.light2,
    borderBottomWidth: 1,
    borderColor: colors.white,
    fontSize: scale(16),
    fontWeight: "bold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  }
});
