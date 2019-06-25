import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import ResultSearch from "../components/recherche/ResultSearch";
import BarSearch from "../components/recherche/BarSearch";
import InfosNavigation from "./InfosNavigation";
import HeaderSearch from "../components/common/HeaderSearch";
import Title from "../components/common/Title";
const SearchNav = createStackNavigator(
  {
    Result: {
      screen: ResultSearch,
      navigationOptions: {
        headerTitle: <HeaderSearch />
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
        headerTitle: <Title title={"Etat d'avancement"} />
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0
        },
        shadowRadius: 0
      }
    }
  }
);
export default createAppContainer(SearchNav);
