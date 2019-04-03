import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import Modal from "react-native-modal";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { colors, fonts, metrics } from "../../themes";
import { scale } from "../../helpers/functions";

const styles = StyleSheet.create({
  modal: {
    padding: 0,
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  container: {
    paddingLeft: metrics.baseMargin,
    minHeight: scale(50),
    width: metrics.width,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary
  },
  label: {
    ...fonts.small,
    marginLeft: metrics.baseMargin,
    fontWeight: "bold",
    color: colors.white
  }
});

class SuccessView extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    duration: PropTypes.number,
    onDismiss: PropTypes.func
  };

  static defaultProps = {
    message: null,
    onDismiss: null
  };

  componentDidUpdate({ message }) {
    if (!message && this.props.message) {
      setTimeout(() => {
        this.props.onDismiss();
      }, 1500);
    }
  }

  render() {
    const { message, onDismiss } = this.props;
    return (
      <Modal
        style={styles.modal}
        isVisible={message !== null}
        backdropColor="transparent"
        onBackdropPress={onDismiss}
        animationOutTiming={1}
        backdropTransitionOutTiming={1}
      >
        <View style={styles.container}>
          <Icon
            size={scale(30)}
            name="check-circle-outline"
            color={colors.white}
          />
          <Text style={styles.label}>{message}</Text>
        </View>
      </Modal>
    );
  }
}

export default SuccessView;
