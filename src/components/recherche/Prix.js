import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Avatar } from "react-native-elements";
import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import colors from "../../themes/colors";
export default class Prix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prix1: false,
      prix2: false
    };
  }
  onPressed1(pressed) {
    this.setState({ prix1: !pressed });
  }
  onPressed2(pressed) {
    this.setState({ prix2: !pressed });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.prix}>
          <Avatar
            overlayContainerStyle={styles.avatar}
            rounded
            titleStyle={{ fontSize: scale(15) }}
            size={scale(43)}
            title="€"
          />
          <Avatar
            overlayContainerStyle={styles.avatar}
            titleStyle={{ fontSize: scale(15) }}
            rounded
            size={scale(43)}
            title="€€"
          />
          <Avatar
            overlayContainerStyle={styles.avatar}
            rounded
            titleStyle={{ fontSize: scale(15) }}
            size={scale(43)}
            title="€€€"
          />
          <Avatar
            overlayContainerStyle={styles.avatar}
            rounded
            titleStyle={{ fontSize: scale(15) }}
            size={scale(43)}
            title="€€€€"
          />
        </View>
        <View style={styles.trait} />
        <View style={styles.finish}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.finishText}>TERMINER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: metrics.baseMargin
  },
  prix: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: metrics.xsmallMargin
  },
  avatar: {
    backgroundColor: "#A8A8A8",
    borderColor: "#A8A8A8",
    borderWidth: 1
  },
  trait: {
    borderWidth: 1.2,
    borderColor: colors.backGrey,
    marginHorizontal: metrics.baseMargin,
    marginTop: scale(60)
  },
  finish: {
    alignItems: "center",
    padding: metrics.mediumMargin
  },
  finishText: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: colors.grey
  }
});
