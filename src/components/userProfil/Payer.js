import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import PropTypes from 'prop-types';
import { addCreditCard } from '../../api/auth';
import { colors, metrics } from '../../themes';
import { scale } from '../../helpers/functions';
import FormContainer from '../common/FormContainer';

export default class Payer extends Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	};
	state = {
		creditCard: null
	};
	_onFocus = (field) => console.log('focusing', field);
	valider = () => {
		const { loading, creditCard } = this.state;
		const { userId } = this.props.navigation.state.params;
		if (!loading) {
			this.setState({ loading: false });
			addCreditCard({
				userId,
				creditCardNumber: String(creditCard.number)
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
						this.props.navigation.setParams({ number: creditCard.number });
						this.props.navigation.goBack();
					}
				})
				.catch((e) => {
					Keyboard.dismiss();
					this.setState({ loading: false, error: e.message });
				});
		}
	};
	getNumber = (creditCard) => {
		this.setState({ creditCard });
	};
	render() {
		const { creditCard } = this.state;
		return (
			<FormContainer>
				<View style={styles.container}>
					<View>
						<Text style={styles.text}>Carte de crédit ou de débit</Text>
						<View style={styles.credit}>
							<LiteCreditCardInput
								value={creditCard}
								onChange={this.getNumber}
								autoFocus
								requiresName
								inputStyle={styles.input}
								validColor={colors.black}
								invalidColor={colors.red}
								placeholderColor={colors.DimGray}
								placeholders={{
									number: 'Numéro de carte',
									expiry: 'MM/AA',
									cvc: 'CVC'
								}}
								//onFocus={this._onFocus}
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
		);
	}
}

const styles = StyleSheet.create({
	credit: {
		backgroundColor: colors.white,
		height: scale(50),
		marginTop: metrics.baseMargin,
		justifyContent: 'center'
	},
	container: {
		backgroundColor: colors.backGrey,
		flex: 1,
		justifyContent: 'space-between'
	},
	label: {
		color: colors.black,
		fontSize: scale(12)
	},
	input: {
		fontSize: scale(16),
		color: colors.black
	},
	yellowbutton: {
		width: metrics.width,
		backgroundColor: colors.yellow,
		color: colors.white,
		fontSize: scale(18),
		padding: scale(16),
		textAlign: 'center',
		alignItems: 'center',
		fontFamily: 'proximaNovaBold'
	},
	text: {
		fontSize: scale(18),
		color: colors.grey,
		fontFamily: 'proximaNovaBold'
	}
});
