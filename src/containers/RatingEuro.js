// import React, { Component } from 'react'
// import { View,Animated } from 'react-native'
// import { Rating } from 'react-native-elements'
// import {Stars} from 'react-native-stars'
// export default class RatingEuro extends React.Component {
//     render() {
//         return (
//             <Animated.View style={{margin:30}}>
//                 <Stars
//                    count={4}
//                     rating={2}
//                     spacing={4}
//                     starSize={20}
//                     count={4}
//                     fullStar= {require('../assets/euro.png')}
//                     emptyStar={require('../assets/euro-empty.png')}
//                     />
//                 />
//             </Animated.View>
//         )
//     }
// }
import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
//import all the components we are going to use.

export default class RatingEuro extends Component {
  constructor() {
    super();
    this.state = {
      Default_Rating: 2,
      //To set the default Star Selected
      Max_Rating: 4
      //To set the max number of Stars
    };
    //Filled Star. You can also give the path from local
    this.Star = require("../assets/euro.png");
    //Empty Star. You can also give the path from local
    this.Star_With_Border = require("../assets/euro-empty.png");
  }

  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.Max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <Image
          key={i}
          style={styles.StarImage}
          source={
            i <= this.state.Default_Rating ? this.Star : this.Star_With_Border
          }
        />
      );
    }
    return <View>{React_Native_Rating_Bar}</View>;
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 0
  },
  childView: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30
  },

  StarImage: {
    width: 12,
    height: 12,
    resizeMode: "cover"
  }
});
