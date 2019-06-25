import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { images, metrics, colors } from "../themes";
import { scale } from "../helpers/functions";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Image source={images.logintitle} style={styles.styleImage} />

        <View style={styles.container}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("SignUp", {
                navigate: navigate,
                tab: "1"
              })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.greenbutton}>SE CONNECTER</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("SignUp", {
                navigate: navigate,
                tab: "2"
              })
            }
            activeOpacity={0.8}
          >
            <Text style={styles.redbutton}>CEER UN COMPTE</Text>
          </TouchableOpacity>
          <Text style={styles.textgris}>
            {" "}
            I agree to <Text style={styles.textgreen}>
              Privacy Policy{" "}
            </Text> and <Text style={styles.textgreen}> Terms</Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: scale(70)
  },
  styleImage: {
    width: metrics.width,
    height: scale(370)
  },
  greenbutton: {
    width: scale(250),
    backgroundColor: colors.green,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    color: colors.white,
    fontSize: scale(14),
    fontWeight: "bold",
    padding: scale(17),
    textAlign: "center"
  },
  redbutton: {
    marginTop: metrics.mediumMargin,
    width: scale(250),
    backgroundColor: colors.red2,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 4,
    color: colors.white,
    fontSize: scale(14),
    fontWeight: "bold",
    padding: scale(17),
    textAlign: "center",
    marginBottom: metrics.mediumMargin
  },
  textgris: {
    color: colors.dimGrey2,
    fontSize: scale(10)
  },
  textgreen: {
    color: colors.green,
    fontSize: scale(10),
    fontWeight: "bold"
  }
});
