import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Avatar } from "react-native-elements";
import images from "../../themes/images";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";

const width = metrics.width;
const height = metrics.height;

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
  constructor(props) {
    super(props);
    this.fullEuro = images.euro;
    this.emptyEuro = images.euroEmpty;
    this.onPress = this.onPress.bind(this);
  }
  ratingEuro = item => {
    let React_Native_Rating_Bar = [];
    for (var i = 1; i <= 4; i++) {
      React_Native_Rating_Bar.push(
        <Image
          key={i}
          style={styles.image}
          source={i <= item.star ? this.fullEuro : null}
        />
      );
    }
    return React_Native_Rating_Bar;
  };
  onPress() {
    this.props.navigation.navigate("info", {
      star: item.star,
      status: item.status,
      note: item.note,
      image: item.image,
      title: item.title,
      place: item.place,
      type: item.type
    });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Résultat de la recherche</Text>
          {datax.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={() =>
                this.props.navigation.navigate("info", {
                  star: item.star,
                  status: item.status,
                  note: item.note,
                  image: item.image,
                  title: item.title,
                  place: item.place,
                  type: item.type
                })
              }
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
                        ? { fontWeight: "bold", color: colors.darkGreen }
                        : { fontWeight: "bold", color: colors.red }
                    }
                  >
                    {item.status}
                  </Text>
                </View>
                <View style={styles.rating}>{this.ratingEuro(item)}</View>
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
    fontWeight: "bold",
    fontSize: scale(17),
    margin: metrics.smallMargin
  },
  cardStyle: {
    backgroundColor: "#fff",
    width: metrics.width - 60,
    alignContent: "center",
    height: scale(140),
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
    width: scale(120),
    height: scale(140)
  },
  avatrPos: {
    position: "absolute",
    left: metrics.largeMrgin,
    top: scale(60)
  },
  textStyle2: {
    justifyContent: "space-around",
    width: "53%",
    marginLeft: metrics.doubleBaseMargin,
    margin: metrics.smallMargin
  },
  title: {
    fontWeight: "bold",
    fontSize: scale(18),
    color: colors.grey
  },
  type: {
    color: colors.dimGrey2,
    fontWeight: "bold"
  },
  time: {
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
    bottom: scale(60)
  }
});
