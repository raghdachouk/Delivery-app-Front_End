import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "../components/tabFeature/Profile";
import PersonalInformation from "../components/userProfil/PersonalInformation";
import ChangePassword from "../components/userProfil/ChangePassword";
import Address from "../components/userProfil/Address";
import Paiement from "../components/userProfil/Paiement";
import Favoris from "../components/userProfil/Favoris";
import Aide from "../components/userProfil/Aide";
import Payer from "../components/userProfil/Payer";

const profilNavigation = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "MON COMPTE"
      }
    },
    personalInfo: {
      screen: PersonalInformation,
      navigationOptions: {
        title: "Mon profil"
      }
    },
    changePassword: {
      screen: ChangePassword,
      navigationOptions: {
        title: "Mon profil"
      }
    },
    address: {
      screen: Address,
      navigationOptions: {
        title: "Mes adresses"
      }
    },
    paiement: {
      screen: Paiement,
      navigationOptions: {
        title: "Paiement"
      }
    },
    payer: {
      screen: Payer,
      navigationOptions: {
        title: "Paiement"
      }
    },
    favoris: {
      screen: Favoris
    },
    aide: {
      screen: Aide
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

export default createAppContainer(profilNavigation);
