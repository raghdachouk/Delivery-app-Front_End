import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Home from '../components/tabFeature/Home';
import config from '../config';

import { colors, metrics } from '../themes';

const client = new ApolloClient({
	uri: `${config.API_URL}/graphql`
});
const option1 = (props) => {
	return (
		<ApolloProvider client={client}>
			<Home {...props} option={'Livraison'} />
		</ApolloProvider>
	);
};
const option2 = (props) => {
	return (
		<ApolloProvider client={client}>
			<Home {...props} option={'Emporter'} />
		</ApolloProvider>
	);
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
					fontFamily: 'proximaNovaBold'
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
