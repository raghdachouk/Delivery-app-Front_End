import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
import icons from "../../themes/icons";

export default class Trier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: false,
      populaire: false,
      closer: false
    };
  }
  onNote = () => {
    this.setState({ note: true, populaire: false, closer: false });
  };
  onPopulaire = () => {
    this.setState({ note: false, populaire: true, closer: false });
  };
  onCloser = () => {
    this.setState({ note: false, populaire: false, closer: true });
  };
  onFinish = () => {
    if (this.state.note) return "note";
    else if (this.state.populaire) return "populaire";
    else if (this.state.closer) return "près";
    else return null;
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onNote}>
          <View style={styles.view1}>
            <Image source={icons.recommandes} />
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
        <TouchableOpacity activeOpacity={0.8} onPress={this.onPopulaire}>
          <View style={styles.view1}>
            <Image source={icons.mieuxnotes} />
            <Text style={styles.delai}>Les plus populaires</Text>
            {this.state.populaire && (
              <Icon
                name="check"
                size={scale(22)}
                color={colors.ForestGreen}
                style={styles.iconpos}
              />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onCloser}>
          <View style={styles.view1}>
            <Image source={icons.proche} />
            <Text style={styles.delai}>Les plus près de chez moi</Text>
            {this.state.closer && (
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
            //onPress={() => this.props.navigation.navigate("Result")}
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
    fontFamily: "proximaNovaBold",
    marginLeft: metrics.smallMargin
  },
  delai: {
    color: colors.grey,
    fontFamily: "proximaNovaBold",
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
    fontFamily: "proximaNovaBold",
    color: colors.grey
  }
});
