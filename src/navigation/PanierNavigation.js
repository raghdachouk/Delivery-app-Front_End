import { createStackNavigator, createAppContainer } from "react-navigation";
import Panier from "../components/infoResto/Menu/Panier";
import MapPanier from "../containers/MapPanier";

const panierNavigation = createStackNavigator(
  {
    Panier: {
      screen: Panier,
      navigationOptions: {
        headerTitle: "votre panier"
      }
    },
    map: {
      screen: MapPanier,
      navigationOptions: {
        header: null
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

export default createAppContainer(panierNavigation);
