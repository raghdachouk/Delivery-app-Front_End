import React, { Component, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Spinner from "./Spinner";

import { metrics, colors, fonts } from "../../themes";
import { scale } from "../../helpers/functions";
import { btnTypes } from "../../helpers/constants";

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.green
  },
  default: {
    backgroundColor: colors.white
  },
  success: {
    backgroundColor: colors.green
  },
  primaryDark: {
    backgroundColor: colors.darkGreen
  },
  primaryWithBorder: {
    backgroundColor: colors.primary,
    borderWidth: 1,
    borderColor: colors.white
  },
  container: {
    width: metrics.width,
    height: scale(55),
    padding: metrics.mediumMargin,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  btnDisabled: {
    backgroundColor: colors.lightGrey3
  },
  btnDisabledText: {
    color: colors.white,
    borderColor: colors.white
  },
  btnText: {
    ...fonts.h5,
    color: colors.white,
    fontWeight: "bold"
  },
  blackText: {
    color: colors.black
  },
  margin: {
    marginLeft: metrics.baseMargin
  },
  spinner: {
    marginRight: metrics.baseMargin
  }
});

class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    style: PropTypes.any,
    textStyle: PropTypes.any,
    btnText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    icon: PropTypes.element,
    iconTheme: PropTypes.string,
    iconColor: PropTypes.string,
    spinnerColor: PropTypes.string,
    iconSize: PropTypes.number,
    disabled: PropTypes.bool,
    loading: PropTypes.bool
  };

  static defaultProps = {
    type: btnTypes.primary,
    style: null,
    textStyle: null,
    icon: null,
    iconTheme: null,
    iconSize: metrics.btnIconSize,
    iconColor: colors.white,
    spinnerColor: colors.white,
    disabled: false,
    loading: false
  };

  render() {
    const {
      style,
      type,
      textStyle,
      btnText,
      onPress,
      icon,
      iconTheme,
      iconColor,
      iconSize,
      disabled,
      loading,
      spinnerColor
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          styles.container,
          styles[type],
          style,
          disabled && styles.btnDisabled
        ]}
        disabled={disabled}
        activeOpacity={0.8}
        onPress={onPress}
      >
        {loading && (
          <Spinner
            style={styles.spinner}
            size="small"
            color={type === btnTypes.default ? colors.black : spinnerColor}
          />
        )}
        {icon &&
          (typeof icon === "string" ? (
            <Icon
              name={icon}
              size={iconSize}
              defaultColor={iconColor}
              theme={iconTheme}
            />
          ) : (
            icon
          ))}
        <Text
          style={[
            styles.btnText,
            icon && styles.margin,
            type === btnTypes.default && styles.blackText,
            textStyle,
            disabled && styles.btnDisabledText
          ]}
        >
          {btnText}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
