import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
export default class Trier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: false,
      delai: false
    };
  }
  onNote(pressed) {
    this.setState({ note: !pressed });
  }
  onDelai(pressed) {
    this.setState({ delai: !pressed });
  }
  onFinish() {
    if (this.state.note) return "note";
    else if (this.state.delai) return "delai";
    else return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.onNote(this.state.note), this.setState({ delai: false });
          }}
        >
          <View style={styles.view1}>
            <Icon name="star" size={scale(20)} color={colors.light} />
            <Text style={styles.note}>Note</Text>
            {this.state.note && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.onDelai(this.state.delai), this.setState({ note: false });
          }}
        >
          <View style={styles.view1}>
            <Icon name="timer" size={scale(20)} color={colors.light} />
            <Text style={styles.delai}>Délai de livraison</Text>
            {this.state.delai && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.trait} />
        <View style={styles.view2}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate("Result")}
          >
            <Text style={styles.finish}>TERMINER</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  iconpos: {
    position: "absolute",
    top: metrics.xsmallMargin,
    right: metrics.smallMargin
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: metrics.baseMargin
  },
  view1: {
    flexDirection: "row",
    padding: metrics.smallMargin
  },
  note: {
    color: colors.grey,
    fontWeight: "bold",
    marginLeft: metrics.smallMargin
  },
  delai: {
    color: colors.grey,
    fontWeight: "bold",
    marginLeft: metrics.smallMargin
  },
  trait: {
    borderWidth: 1.2,
    borderColor: colors.backGrey,
    marginHorizontal: metrics.doubleMediumMargin,
    marginTop: metrics.doubleMediumMargin
  },
  view2: {
    alignItems: "center",
    padding: metrics.mediumMargin
  },
  finish: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: colors.grey
  }
});
