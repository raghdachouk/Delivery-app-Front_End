import React from "react";
import { View, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import BarSearch from "../recherche/BarSearch";
import metrics from "../../themes/metrics";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HeaderSearch extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  onpress = () => {
    this.props.navigation.navigate("DetailLivraison");
  };
  render() {
    //const { adresse, possible } = this.props.navigate.state.params;
    // const { possible } = this.props.navigation.getParams('possible');
    // const { adresse } = this.props.navigation.getParams('adresse');
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onpress}>
          <Text numberOfLines={1} style={styles.text}>
            {" "}
            {/* {possible} {adresse} */}
          </Text>
        </TouchableOpacity>
        <BarSearch />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: metrics.mediumMargin,
    paddingVertical: metrics.smallMargin
    //height: scale(50)
  },
  text: {
    fontFamily: "proximaNovaBold"
  }
});
