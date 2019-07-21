import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import metrics from '../../../themes/metrics';
import colors from '../../../themes/colors';
import { scale } from '../../../helpers/functions';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const width = metrics.width;
const height = metrics.height;

export default class Formules extends Component {
	static propTypes = {
		navigate: PropTypes.object.isRequired,
		image: PropTypes.string,
		name: PropTypes.string,
		prix: PropTypes.number,
		desp: PropTypes.string,
		type: PropTypes.string,
		idRestau: PropTypes.string
	};
	constructor(props) {
		super(props);
	}
	onpress = () => {
		const { navigate } = this.props.navigate;
		navigate('Unprod', {
			image: photo,
			name: name,
			prix: prix,
			desp: description
		});
	};
	render() {
		const { type, idRestau } = this.props;
		const { navigate } = this.props.navigate;
		console.log(idRestau, type);
		return (
			<Query
				fetchPolicy="no-cache"
				query={gql`
					query RestaurantProducts($id: ID!, $type: String!) {
						restaurantProducts(id: $id, type: $type) {
							id
							name
							type
							description
							note
							prix
							photo
							restaurant {
								id
								name
							}
						}
					}
				`}
				variables={{ id: idRestau, type: type }}
			>
				{({ loading, error, data }) => {
					if (loading || !data) return <Text>Loading ...</Text>;
					if (error) return <Text>Connection error</Text>;
					console.log(data);
					return (
						<ScrollView>
							<View style={styles.container}>
								{data.restaurantProducts.map(({ id, name, type, description, note, prix, photo }) => (
									<TouchableOpacity
										key={id}
										activeOpacity={0.8}
										onPress={() =>
											navigate('Unprod', {
												image: photo,
												name: name,
												prix: prix,
												desp: description
											})}
									>
										<View style={styles.cardStyle}>
											<View>
												<Image source={{ uri: photo }} style={styles.imageStyle} />
											</View>
											<View style={styles.view}>
												<Text style={styles.name} numberOfLines={2}>
													{name}
												</Text>
												<Text style={styles.desp} numberOfLines={3}>
													{description}
												</Text>
											</View>
											<View style={styles.pos}>
												<Text style={styles.prix}>{prix} €</Text>
											</View>
										</View>
									</TouchableOpacity>
								))}
							</View>
						</ScrollView>
					);
				}}
			</Query>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backGrey,
		alignContent: 'center',
		alignItems: 'center',
		width: width,
		height: '100%'
	},
	cardStyle: {
		backgroundColor: colors.white,
		width: width - scale(60),
		alignContent: 'center',
		height: scale(140),
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: metrics.baseMargin,
		marginVertical: metrics.smallMargin
	},
	imageStyle: {
		width: scale(125),
		height: scale(140),
		marginLeft: metrics.smallMargin
	},
	name: {
		fontFamily: 'proximaNovaBold',
		fontSize: scale(18),
		color: colors.grey,
		marginRight: metrics.doubleBaseMargin
	},
	desp: {
		color: colors.dimGrey2,
		fontFamily: 'proximaNovaBold'
	},
	view: {
		justifyContent: 'space-around',
		width: '52%',
		marginLeft: metrics.doubleBaseMargin,
		margin: metrics.smallMargin
	},
	pos: {
		position: 'absolute',
		right: scale(7),
		top: metrics.baseMargin
	},
	prix: {
		fontFamily: 'proximaNovaBold',
		color: colors.green
	}
});
