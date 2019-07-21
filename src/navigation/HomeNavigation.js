import React from 'react';
import { createStackNavigator } from 'react-navigation';

import InfosNavigation from './InfosNavigation';
import DetailLivraison from '../containers/DetailLivration';
import TabHome from '../containers/TabHome';
import HeaderSearch from '../components/common/HeaderSearch';
import LocationResto from '../components/infoResto/LocationResto';
import UnProduit from '../components/infoResto/Menu/UnProduit';
import Avancement from '../components/infoResto/Menu/Avancement';
import Panier from '../components/infoResto/Menu/Panier';
import Title from '../components/common/Title';

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
				headerTitle: <Title title={'Mon panier'} />
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
