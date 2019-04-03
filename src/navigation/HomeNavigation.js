import { createStackNavigator } from "react-navigation";
import Home from "../components/tabFeature/Home";
import InfosNavigation from "./InfosNavigation";

const infosNavigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
  info: {
    screen: InfosNavigation,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }
});

export default infosNavigation;
