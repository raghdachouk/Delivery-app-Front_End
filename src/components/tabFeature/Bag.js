import React from "react";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import Commandes from "../../containers/Commandes";
import Title from "../common/Title";

export default class Bag extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    headerTitle: <Title />
  };
  render() {
    var navigate = this.props.navigation;
    return (
      <View>
        <Commandes navigate={navigate} />
      </View>
    );
  }
}
