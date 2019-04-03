import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
//import RadioGroup from 'react-native-radio-buttons-group';
import { Avatar } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import metrics from "../../../themes/metrics";
import colors from "../../../themes/colors";
import { scale } from "../../../helpers/functions";
//import { RadioButton } from 'react-native-paper';
const fullScreen = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width
};
const { height } = Dimensions.get("window");
export default class UnProduit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      checked: "first",
      screenHeight: 0
    };
    this.onDecrease = this.onDecrease.bind(this);
    this.onIncrease = this.onIncrease.bind(this);
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
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const { checked } = this.state;
    const image = this.props.navigation.getParam("image", "NO-Category");
    const name = this.props.navigation.getParam("name", "NO-Category");
    const prix = this.props.navigation.getParam("prix", "NO-Category");
    const desp = this.props.navigation.getParam("desp", "NO-Category");
    const scrollEnabled = this.state.screenHeight > height;
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
              onPress={() => this.props.navigation.goBack()}
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
                            <View style={{ borderWidth: 1, marginHorizontal: 20, borderColor: '#F4F4F5', margin: 10 }}></View>
                            <RadioButton
                            title='2'
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { this.setState({ checked: 'second' }); }}
                            />
                        </View> */}

            <View
              style={{
                backgroundColor: "#F4F4F5",
                padding: metrics.smallMargin,
                marginTop: metrics.smallMargin
              }}
            >
              <Text
                style={{
                  color: colors.grey,
                  fontWeight: "bold",
                  fontSize: scale(18)
                }}
              >
                Instructions spécifiques
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Ajouter un Commentaire"
            />

            <View style={styles.trait} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Avatar
                size="medium"
                rounded
                overlayContainerStyle={{ backgroundColor: "#DC6554" }}
                title="-"
                onPress={() => this.onDecrease()}
                activeOpacity={0.8}
              />
              <Text
                style={{
                  color: colors.grey,
                  fontWeight: "bold",
                  fontSize: scale(20)
                }}
              >
                {this.state.count}
              </Text>
              <Avatar
                size="medium"
                rounded
                overlayContainerStyle={{ backgroundColor: "#4CB967" }}
                title="+"
                onPress={() => this.onIncrease()}
                activeOpacity={0.8}
              />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={() => this.onAdd()}>
              <Text style={styles.greenbutton}>
                Ajouter {this.state.count} au panier {prix * this.state.count}{" "}
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
    width: metrics.width,
    marginTop: scale(24)
  },
  trait: {
    borderWidth: 1,
    marginHorizontal: metrics.baseMargin,
    borderColor: "#F4F4F5",
    marginBottom: 10
  },
  greenbutton: {
    width: metrics.width,
    height: metrics.doubleBaseMargin,
    backgroundColor: colors.green,
    borderRadius: 1,
    color: colors.white,
    fontSize: scale(15),
    fontWeight: "bold",
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    textAlign: "center",
    alignItems: "center",
    marginTop: metrics.smallMargin
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
  view1: {
    alignContent: "center",
    alignItems: "center",
    margin: metrics.smallMargin
  },
  name: {
    fontWeight: "bold",
    fontSize: scale(20),
    color: "#232323"
  },
  des: {
    color: "#757575"
  },
  view2: {
    backgroundColor: "#F4F4F5",
    padding: metrics.smallMargin,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    color: colors.grey,
    fontWeight: "bold",
    fontSize: scale(18)
  },
  obl: {
    backgroundColor: "#808080",
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: "#808080",
    padding: scale(3),
    color: colors.white
  },
  input: {
    width: "90%",
    height: metrics.baseMargin,
    alignContent: "center",
    margin: metrics.baseMargin,
    marginVertical: metrics.smallMargin
  }
});
