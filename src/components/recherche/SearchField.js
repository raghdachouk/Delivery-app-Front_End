import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts, metrics } from '../../themes';
// import * as Animatable from 'react-native-animatable';
// import Modal from 'react-native-modalbox';
// import Filter from './Filter';

const width = Dimensions.get('window').width;
export default class SearchField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			isVisible: false
		};
	}

	clear = () => {
		this.textInput.clear();
	};
	handleSubmit = () => {
		this.props.func(this.state.text);
	};
	setText = (text) => {
		this.setState({ text });
	};
	increaseHeightOfLogin = () => {
		Animated.timing(this.loginHeight, {
			toValue: SCREEN_HEIGHT - 120,
			duration: 500
		}).start(() => {
			this.refs.textInputMobile.focus();
		});
	};
	render() {
		const { text } = this.state;
		//	var navigate = this.props.navigate;
		return (
			<View>
				<TouchableOpacity activeOpacity={0.8}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: 'white',
							borderBottomWidth: 1.5,
							borderBottomColor: '#BDBDBD',
							paddingLeft: metrics.doubleBaseMargin,
							height: 40,
							width: width
						}}
					>
						<Icon name="ios-search" size={20} color="#BDBDBD" />
						<TextInput
							style={styles.widthInput}
							underlineColorAndroid="transparent"
							placeholder="Recherche"
							placeholderTextColor={colors.DimGray}
							value={text}
							maxLength={10}
							onChangeText={this.setText}
							onEndEditing={this.handleSubmit}
						/>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	modalView: {
		borderColor: '#fff',
		alignItems: 'center',
		height: 250,
		width: width
	},
	widthInput: {
		...fonts.medium,
		fontFamily: 'proximaNovaReg',
		height: metrics.doubleBaseMargin,
		width: metrics.width,
		alignItems: 'center'
	}
});
