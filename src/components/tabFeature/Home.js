import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import UnResto from '../../containers/UnResto';

import colors from '../../themes/colors';
import metrics from '../../themes/metrics';

export default class Home extends React.Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired,
		option: PropTypes.string
	};
	// static navigationOptions = ({ navigation }) => {
	// 	// headerTitle instead of title
	// 	return { headerTitle: <HeaderSearch navigation={navigation} /> };
	// };
	constructor(props) {
		super(props);
	}

	render() {
		const { option } = this.props;
		const { navigate } = this.props.navigation;
		return (
			<Query
				query={gql`
					{
						restaurants {
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
			>
				{({ loading, error, data }) => {
					if (loading) return <Text>Loading ...</Text>;
					if (error) return <Text>Connection error</Text>;
					console.log(data);
					return (
						<ScrollView>
							<View style={styles.container}>
								{data.restaurants.map(
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
									}) => (
										<UnResto
											id={id}
											key={id}
											navigate={navigate}
											description={description}
											latitude={latitude}
											longitude={longitude}
											horaire={horaire}
											mobile={mobile}
											image={photo}
											title={name}
											type={type}
											star={parseFloat(note)}
											place={adresse}
											note={note}
											status={status}
											option={option}
										/>
									)
								)}
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
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: colors.backGrey,
		paddingVertical: metrics.baseMargin
	}
});
