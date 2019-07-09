import React from 'react';
import { TouchableOpacity, KeyboardAvoidingView, View, StyleSheet, Text, Keyboard } from 'react-native';
import CodeInput from 'react-native-code-input';
import PropTypes from 'prop-types';

import { scale } from '../../helpers/functions';
import { metrics, fonts, colors } from '../../themes';
import { verifyCode, sendVerificationCode } from '../../api/auth';
import style from './style';

import Button from '../../components/common/Button';
import ErrorView from '../../components/common/ErrorView';
import SuccessView from '../../components/common/SuccessView';
import FormContainer from '../../components/common/FormContainer';

const styles = StyleSheet.create({
	number: {
		...fonts.h3,
		fontFamily: 'proximaNovaReg',
		color: colors.grey
	},
	textYellow: {
		fontFamily: 'proximaNovaReg',
		color: colors.yellow
	},
	textGrey: {
		fontFamily: 'proximaNovaReg',
		color: colors.grey
	},
	input: {
		paddingVertical: metrics.mediumMargin
	},
	pb: {
		...fonts.small,
		color: colors.green,
		fontFamily: 'proximaNovaReg'
	},
	codeInput: {
		borderWidth: 1.5,
		fontSize: metrics.baseMargin,
		borderRadius: scale(5),
		fontFamily: 'proximaNovaReg'
	},
	posPb: {
		marginTop: metrics.doubleBaseMargin,
		paddingHorizontal: metrics.baseMargin
	}
});

export default class CodeTel extends React.PureComponent {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	};

	state = {
		keyboardVisibility: false,
		value: '',
		code: '',
		loading: false,
		error: null
	};

	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
	}

	keyboardDidShow = () => {
		this.setState({ keyboardVisibility: true });
	};

	keyboardDidHide = () => {
		this.setState({ keyboardVisibility: false });
	};

	clean = () => {
		this.setState({ error: null, success: null });
	};

	setCode = (code) => {
		this.setState({ code });
	};

	handlerOnFulfill = (code) => this.setState({ code: code });

	resendCode = () => {
		const { mobile, countryCode } = this.props.navigation.state.params;
		if (!this.state.loading) {
			this.setState({ loading: true });
			sendVerificationCode({
				mobile,
				countryCode
			})
				.then(({ success, message }) => {
					Keyboard.dismiss();
					if (!success) {
						this.setState({ error: message, loading: false });
					} else
						this.setState({
							loading: false,
							success: message
						});
				})
				.catch((e) => {
					Keyboard.dismiss();
					this.setState({ loading: false, error: e.message });
				});
		}
	};

	handlerCode = () => {
		const { mobile } = this.props.navigation.state.params;
		const { countryCode } = this.props.navigation.state.params;
		const { code, loading } = this.state;
		if (!loading && code.length === 4) {
			this.setState({ loading: true });
			verifyCode({
				mobile,
				code,
				countryCode
			})
				.then(({ success, message }) => {
					Keyboard.dismiss();
					this.setState({ loading: false, code: '' }, () => {
						if (success) this.props.navigation.navigate('Email', { countryCode, mobile });
						else this.setState({ error: message, success: message });
					});
				})
				.catch((e) => {
					Keyboard.dismiss();
					this.setState({ loading: false, error: e.message });
				});
		}
	};

	render() {
		const { countryCode, mobile } = this.props.navigation.state.params;
		const { code, loading, keyboardVisibility } = this.state;
		return (
			<React.Fragment>
				<FormContainer>
					<View style={style.container} pointerEvents={this.state.loading ? 'none' : 'auto'}>
						<View style={style.subContainer}>
							<Text style={style.label} numberOfLines={20}>
								Saisissez le code à 4 chiffres reçu au numero
								<Text style={styles.number} numberOfLines={3}>
									{' '}
									{countryCode} {mobile} .{' '}
								</Text>
								<Text style={styles.textYellow} numberOfLines={3}>
									Le numéro de téléphone mobile saisi est-il correct ?
								</Text>
							</Text>
							<KeyboardAvoidingView style={styles.input}>
								<CodeInput
									value={code}
									onFulfill={this.setCode}
									codeLength={4}
									activeColor={colors.green}
									inactiveColor={colors.grey2}
									autoFocus={false}
									ignoreCase={true}
									inputPosition="center"
									space={10}
									size={scale(50)}
									keyboardType="numeric"
									codeInputStyle={styles.codeInput}
								/>
							</KeyboardAvoidingView>
						</View>
						<View style={[ style.footer, keyboardVisibility ? { justifyContent: 'flex-end' } : null ]}>
							{!keyboardVisibility && (
								<TouchableOpacity style={styles.posPb} onPress={this.resendCode}>
									<Text style={styles.pb}>J&apos;ai pas reçu le code</Text>
								</TouchableOpacity>
							)}
							<Button
								btnText="SUIVANT"
								onPress={this.handlerCode}
								loading={loading}
								disabled={this.state.code.length < 4}
							/>
						</View>
					</View>
				</FormContainer>
				<SuccessView message={this.state.success} onDismiss={this.clean} />
				<ErrorView message={this.state.error} onDismiss={this.clean} />
			</React.Fragment>
		);
	}
}
