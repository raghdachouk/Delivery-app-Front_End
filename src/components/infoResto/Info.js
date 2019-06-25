import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";

import RestoDetail from "./RestoDetail";
import RestoAvis from "./RestoAvis";
import RestoMenu from "./RestoMenu";

// class Title extends React.Component{

//     render(){
//         const title = this.props.navigation.getParam('title', 'NO-Category');
//         return(
//                 {title}
//         )
//     }
// }
export default class Info extends React.Component {
  static navigationOptions = ({ navigation }) => {
    headerTitle = navigation.getParam("title", "NO-Category");
    return { headerTitle };
  };
  constructor(props) {
    super(props);
    this.state = {
      toggle1: true,
      toggle2: false,
      toggle3: false
    };
  }
  render() {
    //const navigate =this.props.navigation.getParam('nav', 'NO-Category')
    const title = this.props.navigation.getParam("title", "NO-Category");
    const type = this.props.navigation.getParam("type", "NO-Category");
    const image = this.props.navigation.getParam("image", "NO-Category");
    const place = this.props.navigation.getParam("place", "NO-Category");
    const note = this.props.navigation.getParam("note", "NO-Category");
    const status = this.props.navigation.getParam("status", "NO-Category");
    const star = this.props.navigation.getParam("star", "NO-Category");
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
                    toggle3: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle1 && styles.pressedtext
                  ]}
                >
                  Détails
                </Text>
              </Link>
              <Link
                to="/Menu"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: true,
                    toggle3: false
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle2 && styles.pressedtext
                  ]}
                >
                  Menu
                </Text>
              </Link>
              <Link
                to="/Avis"
                onPress={() =>
                  this.setState({
                    toggle1: false,
                    toggle2: false,
                    toggle3: true
                  })
                }
              >
                <Text
                  style={[
                    styles.notpressedtext,
                    this.state.toggle3 && styles.pressedtext
                  ]}
                >
                  Avis
                </Text>
              </Link>
            </View>
            <View>
              <Route
                exact
                path="/"
                component={() => (
                  <RestoDetail
                    title={title}
                    type={type}
                    image={image}
                    place={place}
                    note={note}
                    status={status}
                  />
                )}
              />
              <Route
                path="/Menu"
                component={() => <RestoMenu navigate={this.props.navigation} />}
              />
              <Route
                path="/Avis"
                component={() => (
                  <RestoAvis title={title} note={note} star={star} />
                )}
              />
            </View>
          </View>
        </NativeRouter>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  pressedtext: {
    width: Dimensions.get("window").width / 3,
    backgroundColor: "#fff",
    borderColor: "#04B404",
    // borderTopWidth: 1,
    borderBottomWidth: 2,
    color: "#04B404",
    fontSize: 16,
    fontWeight: "bold",
    padding: 17,
    textAlign: "center"
  },
  notpressedtext: {
    width: Dimensions.get("window").width / 3,
    backgroundColor: "#fff",
    borderColor: "#fff",
    //borderTopWidth: 1,
    color: "#6E6E6E",
    fontSize: 16,
    fontWeight: "bold",
    padding: 17,
    textAlign: "center"
  }
});
