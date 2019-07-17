import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	ImageBackground,
	Image,
	KeyboardAvoidingView,
	Keyboard,
	BackHandler
} from 'react-native';
import PropTypes from 'prop-types';

import { scale } from '../../helpers/functions';
import { images, metrics, colors, fonts } from '../../themes';
import { sendVerificationCode } from '../../api/auth';
import { REGEX_MOBILE, DEFAULT_COUNTRY_CODE } from '../../helpers/constants';

import Spinner from '../../components/common/Spinner';
import ErrorView from '../../components/common/ErrorView';
import FormContainer from '../../components/common/FormContainer';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.backGrey,
		height: metrics.height,
		width: metrics.width
	},
	styleImage: {
		width: metrics.width,
		height: scale(450)
	},
	inputSection: {
		flexDirection: 'row',
		backgroundColor: colors.backGrey,
		borderWidth: 1,
		borderColor: colors.grey2,
		height: scale(45),
		fontFamily: 'proximaNovaReg',
		borderRadius: 4,
		padding: metrics.smallMargin,
		margin: metrics.baseMargin,
		alignItems: 'center'
	},
	flag: {
		borderRadius: 3,
		width: scale(35),
		height: scale(25),
		paddingHorizontal: metrics.smallMargin
	},
	widthInput: {
		...fonts.medium,
		fontFamily: 'proximaNovaReg',
		height: metrics.doubleBaseMargin,
		width: metrics.width - metrics.doubleBaseMargin,
		alignItems: 'center'
	},
	text: {
		marginTop: metrics.baseMargin,
		fontFamily: 'proximaNovaBold',
		...fonts.medium,
		color: colors.grey,

		paddingLeft: metrics.doubleMediumMargin
	},
	countryCode: {
		...fonts.medium,
		fontFamily: 'proximaNovaReg',
		color: colors.grey
	}
});

export default class SignIn extends React.PureComponent {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	};

	state = {
		keyboardVisibility: false,
		mobile: '',
		loding: false,
		error: null
	};

	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
		this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
	}
	componentWillUnmount() {
		this.backHandler.remove();
	}

	handleBackPress = async () => {
		await this.goBack(); // works best when the goBack is async
		return true;
	};
	keyboardDidShow = () => {
		this.setState({ keyboardVisibility: true });
	};

	keyboardDidHide = () => {
		this.setState({ keyboardVisibility: false });
	};

	clean = () => {
		this.setState({ error: null });
	};

	setMobile = (mobile) => {
		this.setState({ mobile });
	};

	handleSubmit = () => {
		const { mobile, loading } = this.state;
		if (!loading && REGEX_MOBILE.test(`${DEFAULT_COUNTRY_CODE}${mobile}`)) {
			this.setState({ loading: true });
			sendVerificationCode({
				mobile,
				countryCode: DEFAULT_COUNTRY_CODE
			})
				.then(({ success, isUser, message }) => {
					Keyboard.dismiss();
					this.setState(
						{
							loading: false,
							mobile: '',
							error: success ? null : message
						},
						() => {
							if (success) {
								let screen = 'Code';
								if (isUser) screen = 'Password';
								this.props.navigation.navigate(screen, {
									mobile,
									countryCode: DEFAULT_COUNTRY_CODE,
									isUser
								});
							}
						}
					);
				})
				.catch((e) => {
					Keyboard.dismiss();
					this.setState({ error: e.message, loading: false });
				});
		}
	};

	render() {
		const { mobile, loading, keyboardVisibility, error } = this.state;
		return (
			<FormContainer>
				<KeyboardAvoidingView behavior="height" styles={styles.container} pointerEvents={loading ? 'none' : 'auto'}>
					{!keyboardVisibility && <Image source={images.logintitle} style={styles.styleImage} />}
					<Text style={styles.text}>Premier pas avec Halalkoom</Text>
					<View style={styles.inputSection}>
						<ImageBackground source={images.flag} style={styles.flag} />
						<Text style={styles.countryCode}> {DEFAULT_COUNTRY_CODE} </Text>
						<TextInput
							style={styles.widthInput}
							underlineColorAndroid="transparent"
							placeholder="Tappez votre numéro"
							placeholderTextColor={colors.DimGray}
							keyboardType="phone-pad"
							value={mobile}
							maxLength={10}
							onChangeText={this.setMobile}
							onEndEditing={this.handleSubmit}
						/>
					</View>
					{loading && <Spinner color={colors.primary} />}
					<ErrorView message={error} onDismiss={this.clean} />
				</KeyboardAvoidingView>
			</FormContainer>
		);
	}
}
