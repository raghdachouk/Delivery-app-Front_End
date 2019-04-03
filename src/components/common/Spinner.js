import React, { PureComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { colors } from "../../themes/";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default class Spinner extends PureComponent {
  static propTypes = {
    style: PropTypes.any,
    color: PropTypes.string,
    size: PropTypes.any,
    styleContainer: PropTypes.any,
    isVisible: PropTypes.bool
  };
  static defaultProps = {
    style: null,
    color: colors.primary,
    styleContainer: null,
    size: "large",
    isVisible: true
  };

  render() {
    const { color, styleContainer, size, style } = this.props;
    return (
      <View
        style={[
          styleContainer === null ? styles.container : styleContainer,
          style
        ]}
      >
        <ActivityIndicator color={color} size={size} />
      </View>
    );
  }
}
