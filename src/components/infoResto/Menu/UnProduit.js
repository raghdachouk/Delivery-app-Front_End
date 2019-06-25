import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
//import RadioGroup from 'react-native-radio-buttons-group';
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import metrics from "../../../themes/metrics";
import colors from "../../../themes/colors";
import { scale } from "../../../helpers/functions";

export default class UnProduit extends Component {
  static navigationOptions = {
    header: null
  };
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      checked: "first",
      screenHeight: 0
    };
  }
  onAdd = () => {
    if (this.state.count !== 0) {
      this.props.navigation.navigate("Avancement", { count: this.state.count });
    }
  };
  onIncrease = () => {
    if (this.state.count <= 20) {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }
  };
  onDecrease = () => {
    if (this.state.count > 0) {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount
      });
    }
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { image, name, prix, desp } = this.props.navigation.state.params;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior="position">
            <Image source={{ uri: image }} style={styles.image} />
            <Icon
              name="arrow-back"
              size={scale(30)}
              color={colors.white}
              style={styles.icon}
              onPress={this.goBack}
            />

            <View style={styles.view1}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.des}>{desp}</Text>
            </View>
            <View style={styles.view2}>
              <Text style={styles.text}>Recette au choix </Text>
              <Text style={styles.obl}>Obligatoire</Text>
            </View>
            {/* <View>
                            <RadioButton
                            title='1'
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'first' }); }}
                            />
                            <View style={{ borderWidth: 1, marginHorizontal: 20, borderColor: colors.snow, margin: 10 }}></View>
                            <RadioButton
                            title='2'
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'second' }); }}
                            />
                        </View> */}

            <View
              style={{
                backgroundColor: colors.snow,
                padding: metrics.smallMargin,
                marginTop: metrics.smallMargin
              }}
            >
              <Text style={styles.instr}>Instructions spécifiques</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Ajouter un Commentaire"
            />

            <View style={styles.trait} />

            <View style={styles.count}>
              <Avatar
                size="medium"
                rounded
                overlayContainerStyle={{ backgroundColor: colors.yellow2 }}
                title="-"
                onPress={this.onDecrease}
                activeOpacity={0.8}
              />
              <Text style={styles.value}>{this.state.count}</Text>
              <Avatar
                size="medium"
                rounded
                overlayContainerStyle={{ backgroundColor: colors.darkGreen }}
                title="+"
                onPress={this.onIncrease}
                activeOpacity={0.8}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={this.onAdd}>
              <Text style={styles.greenbutton}>
                Ajouter {this.state.count} au panier {prix * this.state.count}
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: metrics.height,
    width: metrics.width
  },
  trait: {
    borderWidth: 1,
    marginHorizontal: metrics.baseMargin,
    borderColor: colors.snow,
    marginBottom: metrics.smallMargin
  },
  greenbutton: {
    width: metrics.width,
    backgroundColor: colors.green,
    borderRadius: 1,
    color: colors.white,
    fontSize: scale(16),
    paddingVertical: metrics.mediumMargin,
    paddingHorizontal: metrics.baseMargin,
    textAlign: "center",
    alignItems: "center",
    fontFamily: "proximaNovaBold",
    marginTop: metrics.baseMargin
  },
  image: {
    height: scale(300),
    width: metrics.width
  },
  icon: {
    position: "absolute",
    left: metrics.smallMargin,
    top: metrics.doubleMediumMargin
  },
  instr: {
    color: colors.grey,
    fontSize: scale(18),
    fontFamily: "proximaNovaBold"
  },
  view1: {
    alignContent: "center",
    alignItems: "center",
    margin: metrics.smallMargin
  },
  name: {
    fontSize: scale(20),
    color: colors.black,
    fontFamily: "proximaNovaBold"
  },
  des: {
    color: colors.grey,
    fontFamily: "proximaNovaReg"
  },
  view2: {
    backgroundColor: colors.snow,
    padding: metrics.smallMargin,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: colors.grey,
    fontSize: scale(18),
    fontFamily: "proximaNovaBold"
  },
  obl: {
    backgroundColor: colors.grey4,
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: colors.grey4,
    padding: scale(3),
    color: colors.white,
    fontFamily: "proximaNovaReg"
  },
  input: {
    width: "90%",
    height: metrics.baseMargin,
    alignContent: "center",
    margin: metrics.baseMargin,
    marginVertical: metrics.smallMargin
  },
  count: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center"
  },
  value: {
    color: colors.grey,
    fontSize: scale(20),
    fontFamily: "proximaNovaBold"
  }
});
