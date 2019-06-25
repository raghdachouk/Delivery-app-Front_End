import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View, StyleSheet } from "react-native";

import { metrics, colors } from "../themes";
import CodeConfirmation from "./CodeConfirmation";
export default class MapPanier extends React.Component {
  state = {
    success: "12345"
  };
  clean = () => {
    this.setState({ success: null });
  };
  render() {
    return (
      <View style={styles.map}>
        <MapView
          style={styles.styleMap}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.081
          }}
        >
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            pinColor={colors.marker}
          />
        </MapView>
        <CodeConfirmation message={this.state.success} onDismiss={this.clean} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    height: metrics.height,
    width: metrics.width
  },
  styleMap: {
    // height: metrics.height,
    // width: metrics.width,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});
