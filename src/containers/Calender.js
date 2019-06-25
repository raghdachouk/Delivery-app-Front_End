import React, { Component } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

import { scale } from "../helpers/functions";
import { metrics, colors } from "../themes";

export default class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: this.props.isVisible,
      chosenDate: ""
    };
  }

  handelPicher = datetime => {
    this.setState({
      isVisible: true,
      chosenDate: moment(datetime).format("DD/MM/YYYY, HH:mm")
    });
  };
  hidePicher = () => {
    this.setState({ isVisible: false });
  };
  render() {
    return (
      <View>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handelPicher}
          onCancel={this.hidePicher}
          mode={"datetime"}
        />
        <View>
          <Text style={Styles.selectedDate}>{this.state.chosenDate}</Text>
        </View>
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  selectedDate: {
    color: colors.darkGrey,
    fontSize: scale(16),
    marginLeft: metrics.bigMargin,
    marginBottom: metrics.smallMargin
  }
});
