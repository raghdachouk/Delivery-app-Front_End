import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform
} from "react-native";

import UnResto from "../../containers/UnResto";

import colors from "../../themes/colors";
import metrics from "../../themes/metrics";

const data = [
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
  }
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          {this.state.data.map((item, i) => (
            <UnResto
              key={i}
              navigate={navigate}
              image={item.image}
              title={item.title}
              type={item.type}
              star={item.star}
              place={item.place}
              note={item.note}
              status={item.status}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: colors.backGrey,
    paddingVertical: metrics.baseMargin
  }
});
