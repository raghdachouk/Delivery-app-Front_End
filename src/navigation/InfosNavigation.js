import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import React from "react";

import RestaurantDetails from "../containers/restaurant/RestoDetail";
import RestaurantAvis from "../containers/restaurant/RestoAvis";
import RestaurantMenu from "../containers/restaurant/RestoMenu";

import UnProduit from "../components/infoResto/Menu/UnProduit";
import Panier from "../components/infoResto/Menu/Panier";
import Avancement from "../components/infoResto/Menu/Avancement";
import Title from "../components/common/Title";

import colors from "../themes/colors";
import { scale } from "../helpers/functions";
import { metrics } from "../themes";
// const details = createStackNavigator({
//   RestaurantDetails: {
//     screen: RestaurantDetails,
//     navigationOptions: {
//     	headerTitle: <Title title={'Menu'} />
//     }
//   }
// });
const Menu = createStackNavigator({
  RestaurantMenu: {
    screen: RestaurantMenu,
    navigationOptions: ({ navigation }) => ({
      headerTitle: <Title title={"Menu"} navigate={navigation} />
    })
  },
  Unprod: {
    screen: UnProduit
  },
  Avancement: {
    screen: Avancement,
    navigationOptions: {
      headerTitle: <Title title={"Etat d'avancement"} />
    }
  },
  Panier: {
    screen: Panier,
    navigationOptions: {
      headerTitle: <Title title={"Mon panier"} />
    }
  }
});
const infosNavigation = createBottomTabNavigator(
  {
    RestaurantDetails: {
      screen: RestaurantDetails,
      navigationOptions: {
        tabBarLabel: "Détails"
        //Title: <Title title={'Détails'} />
      }
    },
    RestaurantMenu: {
      screen: Menu,
      navigationOptions: {
        tabBarLabel: "Menu",
        header: null
      }
    },
    RestaurantAvis: {
      screen: RestaurantAvis,
      navigationOptions: {
        tabBarLabel: "Avis"
        //headerTitle: <Title title={'Détails'} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: colors.green,
      inactiveTintColor: colors.darkGrey,
      labelStyle: {
        fontSize: scale(17),
        fontWeight: "bold"
      },
      indicatorStyle: {
        borderTopWidth: 1,
        borderColor: colors.green
      },
      tabStyle: {
        height: metrics.doubleBaseMargin
      },

      style: {
        paddingTop: 0,
        backgroundColor: colors.white
      }
    }
  }
);

export default infosNavigation;
