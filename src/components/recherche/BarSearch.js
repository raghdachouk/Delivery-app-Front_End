import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
//import Modal from "react-native-modalbox";
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

  clear = () => {
    this.textInput.clear();
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
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.view.slideInDown(800),
              this.setState({ isVisible: !this.state.isVisible });
          }}
        >
          <View style={styles.container}>
            <Icon
              name="ios-search"
              size={scale(20)}
              color={colors.lightGrey2}
            />
            <Text value={this.state.text} style={styles.rech}>
              Recherche{" "}
            </Text>
          </View>
          <Animatable.View
            ref={ref => {
              this.view = ref;
            }}
          >
            <Modal
              style={styles.modalView}
              position={"top"}
              isOpen={this.state.isVisible}
              backdropPressToClose={true}
              coverScreen={true}
              backdrop={true}
              transparent={true}
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
    borderColor: colors.white,
    alignItems: "center",
    height: scale(250),
    width: width
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.lightGrey2,
    paddingHorizontal: metrics.baseMargin,
    height: metrics.doubleBaseMargin
  },
  rech: {
    color: colors.lightGrey2,
    fontWeight: "bold",
    alignItems: "center",
    backgroundColor: colors.white,
    width: scale(170)
  }
});
