import React from "react";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/Feather";

import HomeNavigation from "./HomeNavigation";
import Search from "../components/tabFeature/Search";
import Shopping from "../components/tabFeature/Shopping";
import Profile from "../components/tabFeature/Profile";
import Bag from "../components/tabFeature/Bag";
import HeaderSearch from "../components/common/HeaderSearch";

// const Home = createStackNavigator(
//   {
//     profile: {
//       screen: Profile,
//       path: '/',
//     },
//     options: {
//       screen: Options,
//       path: '/',
//     },
//   },
//   {
//     mode: 'card',
//   }
// )
const AppTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" color={tintColor} size={30} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="search" color={tintColor} size={30} />
        )
      }
    },
    Shopping: {
      screen: Shopping,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-cart" color={tintColor} size={30} />
        )
      }
    },
    Bag: {
      screen: Bag,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="shopping-bag" color={tintColor} size={30} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" color={tintColor} size={30} />
        )
      }
      // screen:profilNav
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#0D9800",
      inactiveTintColor: "grey",
      showLabel: false,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 2
      }
    }
  }
);

// const profilNav =createStackNavigator({
//     infoPers: {screen: InfoPersonnelle},
//     paiement :{screen :Paiemenet},
//     param :{screen:Parametre},
//     help :{screen :Help}
// })
const stackapp = createStackNavigator({
  AppTab: {
    screen: AppTab,
    navigationOptions: {
      headerTitle: <HeaderSearch />,
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
});
export default createAppContainer(stackapp);
