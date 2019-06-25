import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Commandes from "../containers/Commandes";
import UnProduit from "../components/infoResto/Menu/UnProduit";
import Avancement from "../components/infoResto/Menu/Avancement";
import Title from "../components/common/Title";

const CommandeNavigation = createStackNavigator(
  {
    Commandes: {
      screen: Commandes,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Title title={"Commandes"} navigate={navigation} />
      })
    },
    details: {
      screen: UnProduit,
      navigationOptions: {
        header: null
      }
    },
    Avancement: {
      screen: Avancement,
      navigationOptions: ({ navigation }) => ({
        headerTitle: <Title title={"Etat d'avancement"} navigate={navigation} />
      })
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

export default createAppContainer(CommandeNavigation);
