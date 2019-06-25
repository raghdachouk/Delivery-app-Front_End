import React from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import metrics from "../themes/metrics";

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.9}>
          <ImageBackground
            source={require("../assets/splash.png")}
            style={styles.container}
            onLoadEnd={() => this.setState({ loadEnd: true })}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: metrics.width,
    height: metrics.height
  }
});
