import React from 'react';
// import ApolloClient, { createNetworkInterface } from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';
import AppNavigation from './src/navigation/AppNavigation';
//import Login from './src/containers/Login';
//const networkInterface = createNetworkInterface({ uri: 'http://192.168.1.15:5000/graphql' });
// const client = new ApolloClient({
// 	uri: 'http://192.168.1.15:5000/graphql'
// });

export default class App extends React.PureComponent {
	render() {
		return <AppNavigation />;
	}
}
