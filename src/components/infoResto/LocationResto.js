import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

import { metrics, colors } from '../../themes';

export default class LocationResto extends React.Component {
	render() {
		const { latitude, longitude } = this.props.navigation.state.params;
		return (
			<View style={styles.map}>
				<MapView
					style={styles.styleMap}
					region={{
						latitude: latitude,
						longitude: longitude,
						latitudeDelta: 0.0322,
						longitudeDelta: 0.0218
					}}
				>
					<Marker
						coordinate={{
							latitude: latitude,
							longitude: longitude
						}}
						pinColor={colors.marker}
					/>
				</MapView>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	map: {
		// height: metrics.height,
		// width: metrics.width
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	styleMap: {
		// height: metrics.height,
		// width: metrics.width,
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	}
});
