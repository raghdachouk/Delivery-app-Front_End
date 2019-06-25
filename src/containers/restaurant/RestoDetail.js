import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import IconIcon from "react-native-vector-icons/MaterialIcons";
import { Avatar } from "react-native-elements";

import colors from "../../themes/colors";
import metrics from "../../themes/metrics";
import { scale } from "../../helpers/functions";
import Title from "../../components/common/Title";

export default class RestoDetail extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    place: PropTypes.string,
    note: PropTypes.string,
    status: PropTypes.string
  };

  // static navigationOptions = ({ navigation }) => {
  // 	const title = navigation.getParam('title');
  // 	return { headerTitle: <Title title={title} /> };
  // };
  constructor(props) {
    super(props);
  }

  render() {
    const title = this.props.navigation.getParam("title", "NO-Category");
    const type = this.props.navigation.getParam("type", "NO-Category");
    const image = this.props.navigation.getParam("image", "NO-Category");
    const place = this.props.navigation.getParam("place", "NO-Category");
    const note = this.props.navigation.getParam("note", "NO-Category");
    const status = this.props.navigation.getParam("status", "NO-Category");
    const navigate = this.props.navigation;
    return (
      <View>
        <View style={{ height: scale(60) }}>
          <Title title={title} navigate={navigate} />
        </View>
        <ScrollView
        // contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.container}>
            <Image source={{ uri: image }} style={styles.image} />
            <Avatar
              titleStyle={{ fontSize: scale(24) }}
              containerStyle={styles.avatarPos}
              overlayContainerStyle={{ backgroundColor: colors.ForestGreen }}
              size="large"
              rounded
              title={note}
            />

            <View style={styles.view}>
              <Text style={styles.title}>
                {title}
                {"\n"}
              </Text>
              <Text style={styles.type}>
                {type} {"\n"}
              </Text>
              <Text style={styles.text}>
                {status} <Text> . {place} </Text>
              </Text>
              <Text style={styles.type}>
                {"\n"}
                Notre terrasse vous accueille cette annéedès le 1er mars et
                jusqu&apos;au 31 octobre, c&apos;est tellement plus agréable!
                Pour votre confort, elle sera chauffée lors des soirées
                fraîches.
              </Text>
              <View style={styles.view1}>
                <View style={styles.view2}>
                  <IconIcon
                    name="access-time"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text}>{"\n"}8:00 - 22:00</Text>
                </View>
                <View style={styles.view2}>
                  <Icon
                    name="location-arrow"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text}>{"\n"}Localistaion</Text>
                </View>
                <View style={styles.view2}>
                  <IconIcon
                    name="phone"
                    size={scale(25)}
                    color={colors.lightGrey2}
                  />
                  <Text style={styles.text}>{"\n"}Appeler</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    paddingTop: metrics.mediumMargin,
    alignItems: "center",
    height: metrics.height
  },
  image: {
    width: "90%",
    height: scale(220),
    justifyContent: "center"
  },
  text: {
    fontFamily: "proximaNovaReg"
  },
  avatarPos: {
    position: "absolute",
    right: scale(30),
    top: scale(200)
  },
  view: {
    margin: metrics.smallMargin,
    justifyContent: "space-around"
  },
  title: {
    fontSize: scale(22),
    fontFamily: "proximaNovaBold",
    color: colors.grey
  },
  type: {
    fontFamily: "proximaNovaReg",
    fontSize: scale(16),
    color: colors.DimGray
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: metrics.baseMargin
  },
  view2: {
    width: scale(90),
    height: scale(80),
    alignItems: "center",
    backgroundColor: colors.white
  }
});
