import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import ResultSearch from "../components/recherche/ResultSearch";
import BarSearch from "../components/recherche/BarSearch";
import InfosNavigation from "./InfosNavigation";
const SearchNav = createStackNavigator({
  Result: {
    screen: ResultSearch,
    navigationOptions: {
      header: null
    }
  },
  info: {
    screen: InfosNavigation,
    navigationOptions: {
      header: null
    }
  },
  BarSearch: {
    screen: BarSearch,
    navigationOptions: {
      header: null
    }
  }
});
export default createAppContainer(SearchNav);
