import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	Dimensions,
	ScrollView,
	KeyboardAvoidingView
} from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import config from '../../config';

import Formules from '../../components/infoResto/Menu/Formules';
import Title from '../../components/common/Title';
import { scale } from '../../helpers/functions';
const client = new ApolloClient({
	uri: `${config.API_URL}/graphql`
});
export default class RestoMenu extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle1: true,
			toggle2: false,
			toggle3: false,
			toggle4: false
		};
	}
	render() {
		const id = this.props.navigation.getParam('id', 'NO-Category');
		const navigate = this.props.navigation;
		//const navigate = this.props.navigation.getParam('navigate', 'NO-Category');
		return (
			<View style={{ height: '100%' }}>
				<View style={{ height: scale(60) }}>
					<Title title={'Menu'} navigate={navigate} />
				</View>
				<ScrollView>
					<NativeRouter>
						<View>
							<View style={styles.nav}>
								<Link
									to="/Entrees"
									onPress={() =>
										this.setState({
											toggle1: true,
											toggle2: false,
											toggle3: false
										})}
								>
									<Text style={[ styles.notpressedtext, this.state.toggle1 && styles.pressedtext ]}>ENTREES</Text>
								</Link>
								<Link
									to="/Plat"
									onPress={() =>
										this.setState({
											toggle1: false,
											toggle2: true,
											toggle3: false
										})}
								>
									<Text style={[ styles.notpressedtext, this.state.toggle2 && styles.pressedtext ]}>PLAT</Text>
								</Link>
								<Link
									to="/Dessert"
									onPress={() =>
										this.setState({
											toggle1: false,
											toggle2: false,
											toggle3: true
										})}
								>
									<Text style={[ styles.notpressedtext, this.state.toggle3 && styles.pressedtext ]}>DESSERT</Text>
								</Link>
							</View>
							<View>
								<Route
									exact
									path="/Entrees"
									component={() => (
										<ApolloProvider client={client}>
											<Formules navigate={navigate} type={'Entrées'} idRestau={id} />
										</ApolloProvider>
									)}
								/>
								<Route
									path="/Plat"
									component={() => (
										<ApolloProvider client={client}>
											<Formules navigate={navigate} type={'Plat'} idRestau={id} />
										</ApolloProvider>
									)}
								/>
								<Route
									path="/Dessert"
									component={() => (
										<ApolloProvider client={client}>
											<Formules navigate={navigate} type={'Dessert'} idRestau={id} />
										</ApolloProvider>
									)}
								/>
							</View>
						</View>
					</NativeRouter>
				</ScrollView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
		//marginTop: scale(4)
	},

	nav: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	pressedtext: {
		width: Dimensions.get('window').width / 3,
		backgroundColor: '#E5E5E5',
		color: '#5C5C5C',
		fontSize: 15,
		fontFamily: 'proximaNovaBold',
		paddingHorizontal: 0,
		paddingVertical: scale(13),
		textAlign: 'center'
	},
	notpressedtext: {
		width: Dimensions.get('window').width / 3,
		backgroundColor: '#E5E5E5',
		color: '#A5A5A5',
		fontSize: scale(15),
		fontFamily: 'proximaNovaBold',
		paddingHorizontal: 0,
		paddingVertical: scale(13),
		textAlign: 'center'
	}
});
