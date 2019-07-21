import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

import { metrics, colors } from '../themes';
import { scale } from '../helpers/functions';

import PropTypes from 'prop-types';

export default class UnResto extends React.Component {
	static propTypes = {
		navigate: PropTypes.any.isRequired,
		title: PropTypes.string,
		type: PropTypes.string,
		image: PropTypes.string,
		place: PropTypes.string,
		status: PropTypes.string,
		note: PropTypes.string,
		star: PropTypes.number,
		nav: PropTypes.any,
		option: PropTypes.string
	};
	constructor(props) {
		super(props);
		// (this.state = {
		//   Max_Rating: 4
		// }),
		//   (this.fullEuro = images.euro);
		// this.emptyEuro = images.euroEmpty;
	}
	onpress = () => {
		const navigate = this.props.navigate;
		navigate('info', {
			id: this.props.id,
			title: this.props.title,
			type: this.props.type,
			image: this.props.image,
			place: this.props.place,
			note: this.props.note,
			description: this.props.description,
			status: this.props.status,
			star: this.props.star,
			nav: navigate,
			horaire: this.props.horaire,
			mobile: this.props.mobile,
			latitude: this.props.latitude,
			longitude: this.props.longitude,
			option: this.props.option
		});
	};
	render() {
		//const navigate = this.props.navigate;
		// let React_Native_Rating_Bar = [];
		// for (var i = 1; i <= this.state.Max_Rating; i++) {
		//   React_Native_Rating_Bar.push(
		//     <Image
		//       key={i}
		//       style={styles.StarImage}
		//       source={i <= this.props.star ? this.fullEuro : this.emptyEuro}
		//     />
		//   );
		// }

		return (
			<View style={styles.container}>
				<TouchableOpacity activeOpacity={0.8} onPress={this.onpress}>
					<Card containerStyle={styles.cardStyle}>
						<Image source={{ uri: this.props.image }} style={styles.imageStyle} />
						<Avatar
							containerStyle={styles.avatrStyle}
							overlayContainerStyle={{ backgroundColor: colors.green }}
							size="medium"
							rounded
							title={this.props.note}
						/>
						<Text style={styles.positionText}>
							<Text style={styles.titleStyle}>
								{this.props.title}
								{'\n'}
							</Text>

							<Text style={styles.textStyle}>
								{'\n'}
								{this.props.type}
								{'\n'}
							</Text>

							<Text numberOfLines={1} style={styles.textStyle}>
								<Text style={styles.textGreen}>
									{'\n'}
									{'\n'}
									{this.props.horaire}{' '}
								</Text>
								{this.props.place}
							</Text>
						</Text>
					</Card>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginVertical: metrics.smallMargin
	},
	StarImage: {
		width: scale(13),
		height: scale(13),
		resizeMode: 'cover'
	},
	euroStyle: {
		flex: 1,
		flexDirection: 'row',
		position: 'absolute',
		right: scale(25),
		bottom: metrics.bigMargin
	},
	positionText: {
		marginLeft: metrics.baseMargin,
		marginTop: metrics.smallMargin
	},
	textStyle: {
		fontFamily: 'proximaNovaReg',
		fontSize: scale(13),
		color: colors.lightGrey2
	},
	textGreen: {
		fontFamily: 'proximaNovaReg',
		color: colors.green
	},
	titleStyle: {
		fontSize: scale(22),
		fontFamily: 'proximaNovaBold'
	},
	cardStyle: {
		padding: 0,
		width: scale(280),
		height: scale(260),
		borderWidth: 0,
		borderRadius: 3,
		elevation: 3
	},
	imageStyle: {
		borderTopRightRadius: 3,
		borderTopLeftRadius: 3,
		width: scale(280),
		height: scale(140)
	},
	avatrStyle: {
		position: 'absolute',
		right: scale(25),
		top: scale(115)
	}
});
