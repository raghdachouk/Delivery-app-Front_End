import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignIn from '../containers/auth/SignIn';
import CodeTel from '../containers/auth/CodeTel';
import Mail from '../containers/auth/Mail';
import Password from '../containers/auth/Password';
import Register from '../containers/auth/Register';

import AppTab from './AppTab';
import DetailLivration from '../containers/DetailLivration';

const navigationOptions = {
	headerStyle: {
		elevation: 0,
		shadowOpacity: 0,
		shadowOffset: {
			height: 0
		},
		shadowRadius: 0
	}
};

const Navapp = createStackNavigator(
	{
		FirstStep: {
			screen: SignIn,
			navigationOptions: { header: null }
		},
		Code: {
			screen: CodeTel,
			navigationOptions
		},
		Email: {
			screen: Mail,
			navigationOptions
		},
		Password: {
			screen: Password,
			navigationOptions
		},
		Register: {
			screen: Register,
			navigationOptions
		},
		DetailLivraison: {
			screen: DetailLivration,
			navigationOptions
		},
		Home: {
			screen: AppTab,
			navigationOptions: {
				header: null
			}
		}
	},
	{
		initialRouteName: 'FirstStep',
		navigationOptions: {
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

export default createAppContainer(Navapp);
