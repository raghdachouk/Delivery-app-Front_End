import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, metrics, fonts } from '../../themes';
import { scale } from '../../helpers/functions';
import FormContainer from '../common/FormContainer';
import { addAdresses } from '../../api/auth';
export default class Address extends React.Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	};

	state = {
		domicile: '',
		travail: '',
		loading: false
	};
	valider = () => {
		const { loading, domicile, travail } = this.state;
		const { userId } = this.props.navigation.state.params;
		if (!loading) {
			this.setState({ loading: false });
			addAdresses({
				userId,
				homeAdresse: domicile,
				workAdresse: travail
			})
				.then(({ success, message }) => {
					Keyboard.dismiss();
					if (!success) {
						this.setState({ error: message, loading: false });
					} else {
						this.setState({
							loading: false,
							success: message
						});
						this.props.navigation.goBack();
					}
				})
				.catch((e) => {
					Keyboard.dismiss();
					this.setState({ loading: false, error: e.message });
				});
		}
	};
	setAddressDomicile = (domicile) => {
		this.setState({ domicile });
	};
	setAddressTravail = (travail) => {
		this.setState({ travail });
	};
	render() {
		const { domicile, travail, userId } = this.state;
		return (
			<React.Fragment>
				<FormContainer>
					<View style={styles.container}>
						<View>
							<Text style={styles.text}>Sélectionner une adresse de livraison </Text>
							<Text style={styles.text}>Domicile</Text>
							<View style={styles.inputSection}>
								<Icon name="home" size={scale(25)} color={colors.light} />
								<TextInput
									style={styles.widthInput}
									underlineColorAndroid="transparent"
									placeholder="Saisissez une nouvelle adresse"
									autoFocus={true}
									placeholderTextColor={colors.DimGray}
									value={domicile}
									onChangeText={this.setAddressDomicile}
									maxLength={40}
								/>
							</View>

							<Text style={styles.text}>Travail</Text>
							<View style={styles.inputSection}>
								<Icon name="briefcase-outline" size={scale(25)} color={colors.light} />
								<TextInput
									style={styles.widthInput}
									underlineColorAndroid="transparent"
									placeholder="Saisissez une nouvelle adresse"
									placeholderTextColor={colors.DimGray}
									value={travail}
									onChangeText={this.setAddressTravail}
									maxLength={40}
								/>
							</View>
						</View>

						<View>
							<TouchableOpacity activeOpacity={0.8} onPress={this.valider}>
								<Text style={styles.yellowbutton}> VALIDER </Text>
							</TouchableOpacity>
						</View>
					</View>
				</FormContainer>
			</React.Fragment>
		);
	}
}
const styles = StyleSheet.create({
	widthInput: {
		...fonts.medium,
		fontFamily: 'proximaNovaBold',
		height: metrics.doubleBaseMargin,
		width: metrics.width - scale(80)
	},
	inputSection: {
		flexDirection: 'row',
		backgroundColor: colors.backGrey,
		borderWidth: 1,
		borderColor: colors.grey2,
		height: scale(45),
		borderRadius: 4,
		padding: metrics.smallMargin,
		margin: metrics.DoubleBaseMargin,
		alignItems: 'center'
	},
	container: {
		flex: 1,
		justifyContent: 'space-between',
		height: metrics.height,
		width: metrics.width,
		backgroundColor: colors.white,
		alignItems: 'center',
		padding: metrics.baseMargin,
		paddingTop: 0
	},
	text: {
		fontFamily: 'proximaNovaReg',
		fontSize: scale(18),
		padding: metrics.smallMargin
	},
	yellowbutton: {
		width: metrics.width,
		backgroundColor: colors.yellow,
		color: colors.white,
		fontSize: scale(17),
		padding: scale(17),
		textAlign: 'center',
		alignItems: 'center',
		fontFamily: 'proximaNovaBold'
		//marginTop: scale(100)
	}
});
