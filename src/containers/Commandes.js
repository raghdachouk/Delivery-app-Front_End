import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Title from "../components/common/Title";
import Encours from "../components/commandes/Encours";
import Passees from "../components/commandes/Passees";
import Avenir from "../components/commandes/Avenir";

import { metrics, colors } from "../themes";
import { scale } from "../helpers/functions";

const width = metrics.width;

export default class Commandes extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  static navigationOptions = {
    headerTitle: <Title />
  };
  state = {
    index: 0,
    routes: [
      { key: "passees", title: "PASSEES" },
      { key: "encours", title: "EN COURS" },
      { key: "avenir", title: "A VENIR" }
    ]
  };
  passee = () => {
    return <Passees navigation={this.props.navigation} />;
  };
  enCours = () => {
    return <Encours navigation={this.props.navigation} />;
  };
  onIndex = index => {
    this.setState({ index });
  };
  renderTab = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicator}
        labelStyle={styles.label}
        activeColor={colors.grey}
        inactiveColor={colors.lightGrey2}
        tabStyle={styles.tabStyle}
        style={styles.tab}
      />
    );
  };
  render() {
    return (
      <TabView
        style={styles.nav}
        navigationState={this.state}
        renderScene={SceneMap({
          passees: this.passee,
          encours: this.enCours,
          avenir: Avenir
        })}
        renderTabBar={this.renderTab}
        onIndexChange={this.onIndex}
        initialLayout={{ width: metrics.width }}
      />
    );
  }
}
const styles = StyleSheet.create({
  tabStyle: {
    opacity: 1,
    elevation: 0
  },
  tab: {
    backgroundColor: colors.grey2,
    elevation: 0
  },
  label: {
    fontSize: scale(15),
    fontFamily: "proximaNovaBold"
  },

  nav: {
    width: metrics.width
  },
  indicator: {
    backgroundColor: colors.DimGray
  },
  pressedtext: {
    width: width / 3,
    backgroundColor: colors.grey2,
    borderColor: colors.grey,
    borderRightWidth: 1,
    color: colors.grey,
    fontSize: scale(13),
    fontFamily: "proximaNovaBold",
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
    fontFamily: "proximaNovaBold",
    padding: metrics.mediumMargin,
    textAlign: "center"
  }
});
