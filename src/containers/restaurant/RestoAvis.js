import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import StarRating from "react-native-star-rating";
import PropTypes from "prop-types";

import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
import TodoItems from "../TodoItems";
import Title from "../../components/common/Title";

const width = metrics.width;
export default class RestoAvis extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string,
    note: PropTypes.string,
    star: PropTypes.number
  };
  constructor(props) {
    super(props);
    //this.addView = this.addView.bind(this);
    this.state = {
      starCount: 0,
      text: "",
      items: [],
      ok: false,
      review: "",
      screenHeight: 0
    };
  }

  onStarRatingPress = rating => {
    this.setState({
      starCount: rating
    });
    //console.log(rating);
  };
  onChange = text => {
    this.setState({ text });
  };
  addView = e => {
    if (this.state.text !== "" && this.state.starCount !== 0) {
      var newItem = {
        key: Date.now(),
        avis: this.state.text,
        stars: this.state.starCount,
        review: this.state.review
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this.setState({ starCount: 0 });
      this.setState({ text: "" });
      this.setState({ review: "" });
      // this.state.starCount = 0;
      // this.state.text = '';
      // this.state.review = '';
    }

    console.log(this.state.items);

    e.preventDefault();
  };
  render() {
    const title = this.props.navigation.getParam("title", "NO-Category");
    const note = this.props.navigation.getParam("note", "NO-Category");
    const star = this.props.navigation.getParam("star", "NO-Category");
    const navigate = this.props.navigation;
    return (
      <View>
        <View style={{ height: scale(60) }}>
          <Title title={"Avis"} navigate={navigate} />
        </View>
        <ScrollView
          //onContentSizeChange={this.onContentSizeChange}
          contentContainerStyle={{ flexGrow: 1 }}
          //scrollEnabled={scrollEnabled}
        >
          <View style={styles.container}>
            <View style={styles.view}>
              <Text style={styles.title}>{title}</Text>
              <StarRating
                disabled={true}
                maxStars={5}
                rating={star}
                emptyStar={"ios-star-outline"}
                fullStar={"ios-star"}
                halfStar={"ios-star-half"}
                iconSet={"Ionicons"}
                fullStarColor={colors.starYellow}
                starSize={20}
                emptyStarColor={colors.starGrey}
              />
              <Text style={styles.note}>{note}</Text>
              <Text>Recommandé : 1300 personnes</Text>
            </View>
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={70}
              enabled
            >
              <View style={styles.recommande}>
                <Text> Recommandez-vous {title} ?</Text>
                <StarRating
                  emptyStarColor={colors.starGrey}
                  maxStars={5}
                  rating={this.state.starCount}
                  fullStarColor={colors.starYellow}
                  emptyStar={"ios-star-outline"}
                  fullStar={"ios-star"}
                  halfStar={"ios-star-half"}
                  iconSet={"Ionicons"}
                  starSize={25}
                  selectedStar={this.onStarRatingPress}
                />
                <Text>{"\n"} Faites part de votre expérience </Text>
                <Text>
                  comment étaient les repas,l&apos;atmosphère ?{"\n"}{" "}
                </Text>

                <TextInput
                  placeholder="votre avis "
                  underlineColorAndroid="transparent"
                  placeholderTextColor="#848484"
                  style={styles.input}
                  onChangeText={this.onChange}
                  value={this.state.text}
                />
                <TouchableOpacity onPress={this.addView} activeOpacity={0.8}>
                  <Text style={styles.greenbutton}> ENVOYER</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.backItems}>
                <TodoItems
                  entries={this.state.items}
                  starCount={this.state.starCount}
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greenbutton: {
    width: width / 3,
    height: metrics.doubleBaseMargin,
    backgroundColor: colors.green,
    borderRadius: 1,
    color: colors.white,
    fontSize: scale(16),
    fontFamily: "proximaNovaBold",
    paddingVertical: metrics.smallMargin,
    paddingHorizontal: metrics.baseMargin,
    textAlign: "center",
    alignItems: "center",
    marginTop: metrics.baseMargin
  },
  container: {
    alignItems: "center",
    backgroundColor: colors.backGrey,
    justifyContent: "center",
    width: metrics.width,
    height: "100%"
  },
  view: {
    alignItems: "center",
    marginTop: metrics.smallMargin,
    justifyContent: "center"
  },
  title: {
    color: colors.grey,
    fontFamily: "proximaNovaReg"
  },
  note: {
    color: colors.starYellow,
    fontFamily: "proximaNovaBold"
  },
  recommande: {
    backgroundColor: colors.white,
    borderRadius: 4,
    alignItems: "center",
    padding: metrics.baseMargin,
    margin: metrics.baseMargin
  },
  input: {
    borderRadius: 4,
    backgroundColor: "#F4F4F4",
    height: scale(45),
    width: width - scale(120),
    fontFamily: "proximaNovaReg"
  },
  backItems: {
    backgroundColor: colors.backGrey
  }
});
