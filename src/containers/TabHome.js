import React from "react";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import Home from "../components/tabFeature/Home";

import { colors, metrics } from "../themes";

const option1 = props => {
  return <Home {...props} option={"Livraison"} />;
};
const option2 = props => {
  return <Home {...props} option={"Emporter"} />;
};
const AppNavigationContainer = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Livraison: {
        screen: option1
      },
      Emporter: {
        screen: option2
      }
    },
    {
      tabBarOptions: {
        activeTintColor: colors.grey,
        inactiveTintColor: colors.light2,
        labelStyle: {
          fontFamily: "proximaNovaBold"
        },
        tabStyle: {
          width: metrics.width / 2
        },
        style: {
          backgroundColor: colors.backGrey
        },
        indicatorStyle: {
          backgroundColor: colors.DimGray
        }
      }
    }
  )
);
export default AppNavigationContainer;
