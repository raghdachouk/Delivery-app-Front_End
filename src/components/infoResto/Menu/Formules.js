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
import metrics from "../../../themes/metrics";
import colors from "../../../themes/colors";
import { scale } from "../../../helpers/functions";

const width = metrics.width;
const height = metrics.height;

const listMenu = [
  {
    image:
      "http://www.ledillens.be/wp-content/uploads/2016/06/Le-plat-du-jour-Tonkatsu-Don-Escalope-de-porc-pan%C3%A9....jpg",
    name: "Litle Formule: Le big Fernand",
    prix: 5.3,
    desp:
      "Notre politique est de travailler de manière raisonnée, pour vous proposer une carte de qualité."
  },
  {
    image:
      "https://assets.kraftfoods.com/recipe_images/opendeploy/555630_2_3_retail-eebb3f8a4714c3547bf6b862ac64bd3177be1b47_642x428.jpg",
    name: "Plat de lasagne",
    prix: 10,
    desp:
      " Ce plat « tout-en-un » est aussi savoureux qu une lasagne cuite au four, mais nécessite une fraction du temps de préparation! Impossible de vous tromper avec ce plat de lasagne éclair."
  },
  {
    image:
      "https://www.bettybossi.ch/static/rezepte/x/bb_bbzi031015_0016a_x.jpg",
    name: "Plat bernois",
    prix: "8 £",
    desp: "Plat bernois - plat toujours apprécié avec haricots et choucroûte"
  },
  {
    image:
      "https://traiteur.auchan.fr/media/catalog/product/cache/2/image/460x/9df78eab33525d08d6e5fb8d27136e95/4/4/44492_1.jpg",
    name: "Filet mignon de porc en croute",
    prix: 6,
    desp:
      "Un tendre filet mignon de porc enrobé d une farce pruneaux armagnac et éclats de pistaches, le tout enveloppé dans une pâte feuilletée pur beurre légère et croustillante à souhait."
  },
  {
    image:
      "https://traiteur.auchan.fr/media/catalog/product/cache/2/image/460x/9df78eab33525d08d6e5fb8d27136e95/4/4/44492_1.jpg",
    name: "Filet mignon de porc en croute",
    prix: 6,
    desp:
      "Un tendre filet mignon de porc enrobé d une farce pruneaux armagnac et éclats de pistaches, le tout enveloppé dans une pâte feuilletée pur beurre légère et croustillante à souhait."
  }
];
export default class Formules extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigate;
    return (
      <ScrollView>
        <View style={styles.container}>
          {listMenu.map((item, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.8}
              onPress={() =>
                navigate("Unprod", {
                  image: item.image,
                  name: item.name,
                  prix: item.prix,
                  desp: item.desp
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
                <View style={styles.view}>
                  <Text style={styles.name} numberOfLines={2}>
                    {item.name}
                  </Text>
                  <Text style={{ color: colors.dimGrey2 }} numberOfLines={3}>
                    {item.desp}
                  </Text>
                </View>
                <View style={styles.pos}>
                  <Text style={styles.prix}>{item.prix} €</Text>
                </View>
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
    height: height
  },
  cardStyle: {
    backgroundColor: colors.white,
    width: width - scale(60),
    alignContent: "center",
    height: scale(140),
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: metrics.baseMargin,
    marginVertical: metrics.smallMargin
  },
  imageStyle: {
    width: scale(125),
    height: scale(140),
    marginLeft: metrics.smallMargin
  },
  name: {
    fontWeight: "bold",
    fontSize: scale(18),
    color: colors.grey,
    marginRight: metrics.doubleBaseMargin
  },
  view: {
    justifyContent: "space-around",
    width: "52%",
    marginLeft: metrics.doubleBaseMargin,
    margin: metrics.smallMargin
  },
  pos: {
    position: "absolute",
    right: scale(7),
    top: metrics.baseMargin
  },
  prix: {
    fontWeight: "bold",
    color: colors.green
  }
});
