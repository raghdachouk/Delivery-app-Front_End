import React from 'react';
import { View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import SearchNavigate from '../../navigation/SearchNavigate';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const client = new ApolloClient({
			uri: `${config.API_URL}/graphql`
		});
		return (
			<ApolloProvider client={client}>
				<SearchNavigate />
			</ApolloProvider>
		);
	}
}
