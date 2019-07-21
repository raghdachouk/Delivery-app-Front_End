import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ResultSearch from '../components/recherche/ResultSearch';
import BarSearch from '../components/recherche/BarSearch';
import InfosNavigation from './InfosNavigation';
import HeaderSearch from '../components/common/HeaderSearch';
import Title from '../components/common/Title';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import config from '../config';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
	uri: `${config.API_URL}/graphql`,
	cache: new InMemoryCache()
});
const Result = () => {
	return (
		<ApolloProvider client={client}>
			<ResultSearch />
		</ApolloProvider>
	);
};
const SearchNav = createStackNavigator(
	{
		Result: {
			screen: Result,
			navigationOptions: {
				headerTitle: <HeaderSearch />
			}
		},
		info: {
			screen: InfosNavigation,
			navigationOptions: {
				header: null
			}
		},
		BarSearch: {
			screen: BarSearch,
			navigationOptions: {
				headerTitle: <Title title={"Etat d'avancement"} />
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
export default createAppContainer(SearchNav);
