import React from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
export default class Aide extends React.Component {
	getHelp = () => {
		Linking.canOpenURL('http://google.com').then((supported) => {
			if (supported) {
				Linking.openURL('http://google.com');
			} else {
				console.log("Don't know how to open URI: " + 'http://google.com');
			}
		});
	};
	render() {
		return (
			<View>
				<TouchableOpacity onPress={this.getHelp}>
					<Text>clickez ici</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
