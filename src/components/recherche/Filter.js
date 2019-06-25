import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Trier from "./Trier";
import Dietetique from "./Dietetique";

import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";

// const retweet = () => {
//   <View>
//     <TouchableOpacity activeOpacity={0.8} onPress={this.onFilter}>
//       <Icon
//         name="twitter-retweet"
//         size={scale(32)}
//         color={colors.grey}
//         style={styles.icon}
//       />
//     </TouchableOpacity>
//   </View>;
// };

export default class Filter extends Component {
  state = {
    index: 0,
    routes: [
      { key: "Trier", title: "Trier" },
      { key: "Dietetique", title: "Dietetique" }
    ]
  };
  onIndex = index => {
    this.setState({ index });
  };
  renderTab = props => {
    return (
      <TabBar
        {...props}
        labelStyle={styles.label}
        indicatorStyle={styles.indicator}
        activeColor={colors.grey}
        inactiveColor={colors.light2}
        tabStyle={styles.tabStyle}
        style={styles.tab}
      />
    );
  };
  render() {
    return (
      <View>
        <TabView
          style={styles.nav}
          navigationState={this.state}
          renderScene={SceneMap({
            Trier: Trier,
            Dietetique: Dietetique,
            retweet: null
          })}
          renderTabBar={this.renderTab}
          onIndexChange={this.onIndex}
          initialLayout={{ width: metrics.width }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    opacity: 1,
    elevation: 0
  },
  tab: {
    backgroundColor: colors.white,
    elevation: 0
  },
  label: {
    fontSize: scale(16),
    fontFamily: "proximaNovaBold"
  },
  indicator: {
    backgroundColor: colors.DimGray
  },
  nav: {
    width: metrics.width
  },
  icon: {
    width: metrics.width / 3,
    padding: metrics.mediumMargin,
    textAlign: "center"
  }
});
