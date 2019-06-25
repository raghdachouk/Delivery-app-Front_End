import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Formules from "../../components/infoResto/Menu/Formules";

export default class RestoMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: false,
      toggle3: false,
      toggle4: false
    };
  }
  render() {
    const navigate = this.props.navigation;
    //const navigate = this.props.navigation.getParam('navigate', 'NO-Category');
    return (
      <ScrollView>
        <NativeRouter>
          <View>
            <View style={styles.nav}>
              <Link
                to="/"
                onPress={() =>
                  this.setState({
                    toggle1: true,
                    toggle2: false,
                    toggle3: false,
                    toggle4: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle1 && styles.pressedtext
                  ]}
                >
                  FORMULES
                </Text>
              </Link>
              <Link
                to="/Pizza"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: true,
                    toggle3: false,
                    toggle4: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle2 && styles.pressedtext
                  ]}
                >
                  PIZZA
                </Text>
              </Link>
              <Link
                to="/PetitDej"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: false,
                    toggle3: true,
                    toggle4: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle3 && styles.pressedtext
                  ]}
                >
                  PETIT DEJ
                </Text>
              </Link>
              <Link
                to="/Dessert"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: false,
                    toggle3: false,
                    toggle4: true
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle4 && styles.pressedtext
                  ]}
                >
                  DESSERT
                </Text>
              </Link>
            </View>
            <View>
              <Route
                path="/"
                component={() => <Formules navigate={navigate} />}
              />
              <Route
                path="/Pizza"
                component={() => <Formules navigate={navigate} />}
              />
              <Route
                path="/PetitDej"
                component={() => <Formules navigate={navigate} />}
              />
              <Route
                path="/Dessert"
                component={() => <Formules navigate={navigate} />}
              />
            </View>
          </View>
        </NativeRouter>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 4
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  pressedtext: {
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#E5E5E5",
    color: "#5C5C5C",
    fontSize: 13,
    fontWeight: "bold",
    paddingHorizontal: 0,
    paddingVertical: 13,
    textAlign: "center"
  },
  notpressedtext: {
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#E5E5E5",
    color: "#A5A5A5",
    fontSize: 13,
    fontWeight: "bold",
    paddingHorizontal: 0,
    paddingVertical: 13,
    textAlign: "center"
  }
});
