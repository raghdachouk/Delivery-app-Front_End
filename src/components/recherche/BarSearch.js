import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import Modal from "react-native-modal";

import Filter from "./Filter";

import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
import metrics from "../../themes/metrics";

const width = metrics.width;
export default class BarSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isVisible: false
    };
  }
  view = null;
  setRef = ref => {
    this.view = ref;
  };
  // increaseHeightOfLogin = () => {
  //   Animated.timing(this.loginHeight, {
  //     toValue: SCREEN_HEIGHT - 120,
  //     duration: 500
  //   }).start(() => {
  //     this.refs.textInputMobile.focus();
  //   });
  // };
  onpress = () => {
    this.view.slideInDown(800),
      this.setState({ isVisible: !this.state.isVisible });
  };
  onOpen = () => {
    this.setState({ isVisible: false });
  };
  render() {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8} onPress={this.onpress}>
          <Icon name="twitter-retweet" size={scale(30)} color={colors.grey4} />
          <Animatable.View ref={this.setRef}>
            <Modal
              style={styles.modalView}
              isVisible={this.state.isVisible}
              onBackdropPress={this.onOpen}
              hasBackdrop
              backdrop={true}
              backdropOpacity={0.6}
            >
              <Filter />
            </Modal>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalView: {
    alignItems: "center",
    flex: 0.45,
    width: width,
    backgroundColor: colors.white,
    justifyContent: "flex-start",
    margin: 0
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGrey2,
    paddingHorizontal: metrics.baseMargin
    //height: scale(45)
  },
  rech: {
    color: colors.lightGrey2,
    fontFamily: "proximaNovaBold",
    alignItems: "center",
    backgroundColor: colors.white,
    width: scale(170)
  }
});
