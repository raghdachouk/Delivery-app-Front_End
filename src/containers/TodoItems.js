import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import StarRating from "react-native-star-rating";
import moment from "moment";
import PropTypes from "prop-types";

import metrics from "../themes/metrics";
import colors from "../themes/colors";
import { scale } from "../helpers/functions";

const width = metrics.width;
export default class TodoItems extends Component {
  static propTypes = {
    entries: PropTypes.array,
    starCount: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      review: ""
    };
    //this.createTasks = this.createTasks.bind(this);
  }

  createTasks = item => {
    var date = new Date();
    var formattedDate = moment(date).format("MMM Do YYYY");

    return (
      <View key={item.key} style={styles.container}>
        <StarRating
          // reviews={["mauvais", "pas mal", "bien", "delicieux", "excellent"]}
          disabled={true}
          maxStars={5}
          rating={item.stars}
          emptyStar={"ios-star-outline"}
          fullStar={"ios-star"}
          halfStar={"ios-star-half"}
          iconSet={"Ionicons"}
          fullStarColor={colors.starYellow}
          starSize={20}
          emptyStarColor={colors.starGrey}
        />
        <Text>{this.state.review}</Text>
        {/* <AirbnbRating
                    disabled={true}
                    count={5}
                    reviews={["mauvais", "pas mal", "bien", "delicieux", "excellent"]}
                    defaultRating={item.stars}
                    readonly={true}
                    size={20}
                    
                /> */}
        <Text>{item.avis}</Text>
        <Text>{formattedDate} </Text>
      </View>
    );
  };

  componentDidMount() {
    let review;

    switch (this.props.starCount) {
      case 1:
        review = "Mauvais";
      case 2:
        review = "Pas mal";
      case 3:
        review = "Bien";
      case 4:
        review = "Delicieux";
      case 5:
        review = "Excellent";
    }
    this.setState({ review });
    console.log(review);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItem = todoEntries.map(this.createTasks);
    return <View style={styles.listStyle}>{listItem}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    width: width - scale(60),
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: metrics.baseMargin,
    margin: metrics.smallMargin
  },
  listStyle: {
    backgroundColor: colors.backGrey,
    alignContent: "center",
    alignItems: "center"
  }
});
