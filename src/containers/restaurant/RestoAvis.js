import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import StarRating from "react-native-star-rating";
import metrics from "../../themes/metrics";
import colors from "../../themes/colors";
import { scale } from "../../helpers/functions";
import TodoItems from "../TodoItems";

const height = metrics.height;
const width = metrics.width;
export default class RestoAvis extends Component {
  constructor(props) {
    super(props);
    this.addView = this.addView.bind(this);
    this.state = {
      starCount: 0,
      text: "",
      items: [],
      ok: false,
      review: "",
      screenHeight: 0
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
    //console.log(rating);
  }

  addView(e) {
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
      this.state.starCount = 0;
      this.state.text = "";
      this.state.review = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }
  onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    this.setState({ screenHeight: contentHeight });
  };
  render() {
    const title = this.props.navigation.getParam("title", "NO-Category");
    const note = this.props.navigation.getParam("note", "NO-Category");
    const star = this.props.navigation.getParam("star", "NO-Category");
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <ScrollView
        onContentSizeChange={this.onContentSizeChange}
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
                selectedStar={rating => this.onStarRatingPress(rating)}
              />
              <Text>{"\n"} Faites part de votre expérience </Text>
              <Text>comment étaient les repas,l'atmosphère ?{"\n"} </Text>

              <TextInput
                ref={a => (this._inputElement = a)}
                placeholder="votre avis "
                underlineColorAndroid="transparent"
                placeholderTextColor="#848484"
                style={styles.input}
                onChangeText={text => this.setState({ text })}
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
    fontSize: scale(15),
    fontWeight: "bold",
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
    color: colors.grey
  },
  note: {
    color: colors.starYellow,
    fontWeight: "bold"
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
    width: width - scale(120)
  },
  backItems: {
    backgroundColor: colors.backGrey
  }
});
