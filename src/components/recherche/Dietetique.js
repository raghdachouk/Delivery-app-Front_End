import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import { metrics, colors } from "../../themes";
import { scale } from "../../helpers/functions";
import icons from "../../themes/icons";

export default class Dietetique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed1: false,
      pressed2: false,
      pressed3: false
    };
  }
  onPressed1 = () => {
    this.setState({ pressed1: true, pressed2: false, pressed3: false });
  };
  onPressed2 = () => {
    this.setState({ pressed2: true, pressed1: false, pressed3: false });
  };
  onPressed3 = () => {
    this.setState({ pressed3: true, pressed1: false, pressed2: false });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onPressed1}>
          <View style={styles.view1}>
            <Image source={icons.herbes} />
            <Text style={styles.text1}>Végétarien</Text>
            {this.state.pressed1 && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onPressed2}>
          <View style={styles.view1}>
            <Image source={icons.v} />
            <Text style={styles.text1}>Vegan</Text>
            {this.state.pressed2 && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onPressed3}>
          <View style={styles.view1}>
            <Image source={icons.gluten} />
            <Text style={styles.text1}>Sans glutan</Text>
            {this.state.pressed3 && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.view2} />
        <View style={styles.finish}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.textFinish}>TERMINER</Text>
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
  text1: {
    color: colors.grey,
    fontFamily: "proximaNovaBold",
    marginLeft: metrics.smallMargin
  },
  view2: {
    borderWidth: 1.2,
    borderColor: colors.backGrey,
    marginHorizontal: metrics.doubleMediumMargin,
    marginTop: metrics.doubleMediumMargin
  },
  finish: {
    alignItems: "center",
    padding: metrics.mediumMargin
  },
  textFinish: {
    fontSize: scale(16),
    fontFamily: "proximaNovaBold",
    color: colors.grey
  }
});
