import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

import { Avatar } from "react-native-elements";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";

const width = metrics.width;

const datax = [
  {
    image: "https://nice.city-life.fr/images/fiche/1590/5810.jpg",
    title: "Factory",
    type: "RESTAURANT",
    star: 3,
    place: "Paris",
    note: "5,2",
    status: "Fermé"
  },
  {
    image:
      "https://www.lesmeilleursrestos.fr/702-tm_home_default/le-garden-besan%C3%A7on.jpg",
    title: "Tartella",
    type: "RESTAURANT",
    star: 2,
    place: "Lyon",
    note: "2,5",
    status: "Ouvert"
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/ac/35/5f/vue-de-la-salle.jpg",
    title: "Il Forno",
    type: "RESTAURANT",
    star: 4,
    place: "Paris",
    note: "4,5",
    status: "Ouvert"
  },
  {
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0d/ac/35/5f/vue-de-la-salle.jpg",
    title: "Il Forno",
    type: "RESTAURANT",
    star: 4,
    place: "Paris",
    note: "4,5",
    status: "Ouvert"
  }
];

export default class ResultSearch extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    item: PropTypes.object,
    star: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    place: PropTypes.string,
    note: PropTypes.string,
    status: PropTypes.string
  };
  constructor(props) {
    super(props);
  }
  // ratingEuro = (item) => {
  // 	let React_Native_Rating_Bar = [];
  // 	for (var i = 1; i <= 4; i++) {
  // 		React_Native_Rating_Bar.push(
  // 			<Image key={i} style={styles.image} source={i <= item.star ? this.fullEuro : null} />
  // 		);
  // 	}
  // 	return React_Native_Rating_Bar;
  // };
  onpress = item => {
    this.props.navigation.navigate("info", {
      star: item.star,
      status: item.status,
      note: item.note,
      image: item.image,
      title: item.title,
      place: item.place,
      type: item.type
    });
  };
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Résultat de la recherche</Text>
          {datax.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={this.onpress.bind(this, item)}
            >
              <View style={styles.cardStyle}>
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.imageStyle}
                  />
                </View>
                <Avatar
                  containerStyle={styles.avatrPos}
                  overlayContainerStyle={{ backgroundColor: colors.green }}
                  size="small"
                  rounded
                  title={item.note}
                />
                <View style={styles.textStyle2}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.type}>{item.type}</Text>
                  <Text style={styles.time}>10-15 min</Text>
                </View>

                <View style={styles.stausPos}>
                  <Text
                    style={
                      item.status === "Ouvert"
                        ? {
                            fontFamily: "proximaNovaBold",
                            color: colors.darkGreen
                          }
                        : { fontFamily: "proximaNovaBold", color: colors.red }
                    }
                  >
                    {item.status}
                  </Text>
                </View>
                {/* <View style={styles.rating}>{this.ratingEuro(item)}</View> */}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backGrey,
    alignContent: "center",
    alignItems: "center",
    width: width,
    height: metrics.height
  },
  textStyle: {
    color: colors.grey,
    fontFamily: "proximaNovaBold",
    fontSize: scale(17),
    margin: metrics.smallMargin
  },
  cardStyle: {
    backgroundColor: "#fff",
    width: metrics.width - 60,
    alignContent: "center",
    height: scale(120),
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.smallMargin
  },
  image: {
    width: scale(12),
    height: scale(12),
    resizeMode: "cover"
  },
  imageStyle: {
    width: scale(110),
    height: scale(120)
  },
  avatrPos: {
    position: "absolute",
    left: scale(90),
    top: scale(50)
  },
  textStyle2: {
    justifyContent: "space-around",
    width: "53%",
    marginLeft: metrics.doubleBaseMargin,
    margin: metrics.smallMargin
  },
  title: {
    fontFamily: "proximaNovaBold",
    fontSize: scale(18),
    color: colors.grey
  },
  type: {
    color: colors.dimGrey2,
    fontFamily: "proximaNovaBold"
  },
  time: {
    fontFamily: "proximaNovaReg",
    color: colors.dimGrey2
  },
  rating: {
    position: "absolute",
    bottom: metrics.baseMargin,
    right: metrics.smallMargin,
    flexDirection: "row"
  },
  stausPos: {
    position: "absolute",
    right: metrics.smallMargin,
    top: metrics.doubleBaseMargin
  }
});
