import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import RestaurantDetails from "../containers/restaurant/RestoDetail";
import RestaurantAvis from "../containers/restaurant/RestoAvis";
import RestaurantMenu from "../containers/restaurant/RestoMenu";
import UnProduit from "../components/infoResto/Menu/UnProduit";
import Panier from "../components/infoResto/Menu/Panier";
import colors from "../themes/colors";
import { scale } from "../helpers/functions";
import Avancement from "../components/infoResto/Menu/Avancement";
const Menu = createStackNavigator({
  RestaurantMenu: {
    screen: RestaurantMenu,
    navigationOptions: {
      header: null
    }
  },
  Unprod: {
    screen: UnProduit,
    navigationOptions: {
      header: null
    }
  },
  Avancement: {
    screen: Avancement,
    navigationOptions: {
      header: null
    }
  },
  Panier: {
    screen: Panier,
    navigationOptions: {
      header: null
    }
  }
});
const infosNavigation = createBottomTabNavigator(
  {
    RestaurantDetails: {
      screen: RestaurantDetails,
      navigationOptions: { tabBarLabel: "Détails" }
    },
    RestaurantMenu: {
      screen: Menu,
      navigationOptions: { tabBarLabel: "Menu" }
    },
    RestaurantAvis: {
      screen: RestaurantAvis,
      navigationOptions: { tabBarLabel: "Avis" }
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
        height: 40
      },

      style: {
        paddingTop: 0,
        backgroundColor: colors.white
      }
    }
  }
);

export default infosNavigation;
