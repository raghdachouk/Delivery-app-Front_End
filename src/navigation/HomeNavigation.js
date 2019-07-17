import React from 'react';
import { createStackNavigator } from 'react-navigation';

import InfosNavigation from './InfosNavigation';
import DetailLivraison from '../containers/DetailLivration';
import TabHome from '../containers/TabHome';
import HeaderSearch from '../components/common/HeaderSearch';
import LocationResto from '../components/infoResto/LocationResto';

const infosNavigation = createStackNavigator(
	{
		Home: {
			screen: TabHome,
			navigationOptions: ({ navigation }) => ({
				headerTitle: <HeaderSearch navigation={navigation} />
			})
		},
		info: {
			screen: InfosNavigation,
			navigationOptions: {
				header: null
			}
		},
		DetailLivraison: {
			screen: DetailLivraison
		},
		locationMap: {
			screen: LocationResto,
			navigationOptions: {
				headerTitle: 'Localisation Géographiques'
			}
		}
	},
	{
		defaultNavigationOptions: {
			//	header: ({ navigation }) => <HeaderSearch nav={navigation} />,

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

export default infosNavigation;
