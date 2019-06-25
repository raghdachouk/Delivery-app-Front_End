import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Image } from "react-native";
import PropTypes from "prop-types";

import HomeNavigation from "./HomeNavigation";
import ProfileNav from "./ProfileNav";
import SearchNavigate from "./SearchNavigate";
import CommandeNavigation from "./CommandeNavigation";
import PanierNavigation from "./PanierNavigation";

import { scale } from "../helpers/functions";
import { colors } from "../themes";
import icons from "../themes/icons";

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === "Home") {
    iconName = icons.home;
  } else if (routeName === "Search") {
    iconName = icons.recherche;
  } else if (routeName === "Shopping") {
    iconName = icons.panier;
  } else if (routeName === "Shopping") {
    iconName = icons.panier;
  } else if (routeName === "Bag") {
    iconName = icons.commande;
  } else if (routeName === "Profile") {
    iconName = icons.profil;
  }

  return <Image source={iconName} style={{ tintColor: tintColor }} />;
};

getTabBarIcon.propTypes = {
  navigation: PropTypes.object,
  tintColor: PropTypes.string
};
const AppTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigation
    },
    Search: {
      screen: SearchNavigate
    },
    Shopping: {
      screen: PanierNavigation
    },
    Bag: {
      screen: CommandeNavigation
    },
    Profile: {
      screen: ProfileNav
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => getTabBarIcon(navigation, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: colors.ForestGreen,
      inactiveTintColor: colors.grey,
      showLabel: false,
      style: {
        padding: scale(10),
        backgroundColor: colors.white,
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 2
      }
    }
  }
);
// const setTabBarVisible = (navigation) => {
// 	let tabBarVisible = true;
// 	//const { routeName } = navigation.state;
// 	const { routeName } = navigation.state.routes[navigation.state.index].routeName;

// 	if (routeName != 'Profile') {
// 		tabBarVisible = false;
// 	} else if (routeName != 'Home') {
// 		tabBarVisible = false;
// 	} else if (routeName != 'Search') {
// 		tabBarVisible = false;
// 	} else if (routeName != 'Shopping') {
// 		tabBarVisible = false;
// 	} else if (routeName != 'Bag') {
// 		tabBarVisible = false;
// 	}

// 	return {
// 		tabBarVisible
// 	};
// };
ProfileNav.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;
  let headerVisible = true;
  if (routeName != "Profile") {
    tabBarVisible = false;
    headerVisible = false;
  }

  return {
    tabBarVisible,
    headerVisible
  };
};
HomeNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName != "Home") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
SearchNavigate.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName != "Result") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
CommandeNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName != "Commandes") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};
PanierNavigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName != "Panier") {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default createAppContainer(AppTab);
