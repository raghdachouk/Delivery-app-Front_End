import React from "react";
import PropTypes from "prop-types";
import { Keyboard, TouchableWithoutFeedback, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1 }
});

class FormContainer extends React.PureComponent {
  static propTypes = {
    style: PropTypes.any,
    children: PropTypes.element.isRequired
  };

  static defaultProps = {
    style: null
  };

  hideKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    const { children, style } = this.props;
    return (
      <TouchableWithoutFeedback
        style={[styles.container, style]}
        onPressIn={this.hideKeyboard}
        onPressOut={this.hideKeyboard}
        onPress={this.hideKeyboard}
      >
        {children}
      </TouchableWithoutFeedback>
    );
  }
}

export default FormContainer;
