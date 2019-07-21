import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { Avatar } from 'react-native-elements';
import metrics from '../../themes/metrics';
import colors from '../../themes/colors';
import { scale } from '../../helpers/functions';
import SearchField from './SearchField';
import gql from 'graphql-tag';
// import { Query, Mutation } from 'react-apollo';
import { Query, Mutation } from 'react-apollo';

const width = metrics.width;
class Search extends React.Component {
	render() {
		const { keyWord } = this.props;
		return (
			<Query
				query={gql`
					query SearchRestaurant($keyWord: String!) {
						searchRestaurant(keyWord: $keyWord) {
							id
							name
							note
							horaire
							adresse
							mobile
							type
							description
							latitude
							longitude
							status
							photo
						}
					}
				`}
				variables={{ keyWord }}
			>
				{({ loading, error, data }) => {
					console.log(data);
					console.log(loading);

					if (loading || !data) return <Text>Loading...</Text>;
					if (error) return <Text>Error...</Text>;
					//if (data.searchRestaurant.length === 0) return <Text>Aucune résultat... </Text>;
					return (
						<View>
							<Text style={styles.textStyle}>Résultat de la recherche</Text>
							<View style={styles.container}>
								{data.searchRestaurant.map(
									({
										id,
										name,
										note,
										horaire,
										adresse,
										mobile,
										type,
										description,
										latitude,
										longitude,
										status,
										photo
									}) => {
										<TouchableOpacity
											key={id}
											activeOpacity={0.8}
											onPress={() =>
												this.props.navigation.navigate('info', {
													title: title,
													type: type,
													image: photo,
													place: adresse,
													note: note,
													description: description,
													status: status,
													star: parseFloat(note),
													nav: this.props.navigation,
													horaire: horaire,
													mobile: mobile,
													latitude: latitude,
													longitude: longitude
												})}
										>
											<View style={styles.cardStyle}>
												<View>
													<Image source={{ uri: photo }} style={styles.imageStyle} />
												</View>
												<Avatar
													containerStyle={styles.avatrPos}
													overlayContainerStyle={{ backgroundColor: colors.green }}
													size="small"
													rounded
													title={note}
												/>
												<View style={styles.textStyle2}>
													<Text style={styles.title}>{name}</Text>
													<Text style={styles.type}>{type}</Text>
													<Text style={styles.time}>{adresse}</Text>
												</View>

												<View style={styles.stausPos}>
													<Text
														style={{ fontFamily: 'proximaNovaBold', color: colors.red }}
														// 	status === 'Ouvert' ? (
														// 		{
														// 			fontFamily: 'proximaNovaBold',
														// 			color: colors.darkGreen
														// 		}
														// 	) : (
														// 		{ fontFamily: 'proximaNovaBold', color: colors.red }
														// 	)
														// }
													>
														{horaire}
													</Text>
												</View>
											</View>
										</TouchableOpacity>;
									}
								)}
							</View>
						</View>
					);
				}}
			</Query>
		);
	}
}

export default class ResultSearch extends Component {
	static propTypes = {
		//navigation: PropTypes.object.isRequired,
		item: PropTypes.object,
		star: PropTypes.number,
		title: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.string,
		place: PropTypes.string,
		note: PropTypes.string,
		status: PropTypes.string
	};
	constructor(props) {
		super(props);
		this.state = {
			keyWord: '',
			ok: false
		};
	}

	searchText = (text) => {
		this.setState({ keyWord: text, ok: true });
	};

	onpress = () => {
		this.props.navigation.navigate('info', {
			title: title,
			type: type,
			image: photo,
			place: adresse,
			note: note,
			description: description,
			status: status,
			star: parseFloat(note),
			nav: this.props.navigation,
			horaire: horaire,
			mobile: mobile,
			latitude: latitude,
			longitude: longitude
		});
	};
	render() {
		const { ok, keyWord } = this.state;

		return (
			<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
				<View style={styles.container}>
					<SearchField func={this.searchText} />
					{!ok ? null : <Search keyWord={keyWord} />}
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backGrey,
		alignContent: 'center',
		alignItems: 'center',
		width: width,
		//paddingTop: metrics.xsmallMargin,
		height: metrics.height
	},
	textStyle: {
		color: colors.grey,
		fontFamily: 'proximaNovaBold',
		fontSize: scale(17),
		margin: metrics.smallMargin
	},
	cardStyle: {
		backgroundColor: '#fff',
		width: metrics.width - 60,
		alignContent: 'center',
		height: scale(120),
		elevation: 3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginHorizontal: metrics.baseMargin,
		marginVertical: metrics.smallMargin
	},
	image: {
		width: scale(12),
		height: scale(12),
		resizeMode: 'cover'
	},
	imageStyle: {
		width: scale(110),
		height: scale(120)
	},
	avatrPos: {
		position: 'absolute',
		left: scale(90),
		top: scale(50)
	},
	textStyle2: {
		justifyContent: 'space-around',
		width: '53%',
		marginLeft: metrics.doubleBaseMargin,
		margin: metrics.smallMargin
	},
	title: {
		fontFamily: 'proximaNovaBold',
		fontSize: scale(18),
		color: colors.grey
	},
	type: {
		color: colors.dimGrey2,
		fontFamily: 'proximaNovaBold'
	},
	time: {
		fontFamily: 'proximaNovaReg',
		color: colors.dimGrey2
	},
	rating: {
		position: 'absolute',
		bottom: metrics.baseMargin,
		right: metrics.smallMargin,
		flexDirection: 'row'
	},
	stausPos: {
		position: 'absolute',
		right: metrics.smallMargin,
		top: metrics.doubleBaseMargin
	}
});
