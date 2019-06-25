import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import PropTypes from "prop-types";

import { colors, metrics } from "../../themes";
import { scale } from "../../helpers/functions";
//import { ImagePicker } from 'expo';

const listx = [
  {
    title: "Informations Personnelles",
    icon: "person",
    navigate: "personalInfo"
  },
  {
    title: "Mes adresses",
    icon: "place",
    navigate: "address"
  },
  {
    title: "Paiement",
    icon: "credit-card",
    navigate: "paiement"
  },
  {
    title: "Mes favoris",
    icon: "favorite",
    navigate: "favoris"
  },
  {
    title: "Aide",
    icon: "help-outline",
    navigate: "aide"
  }
];
export default class Profile extends React.Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      camera:
        "https://png.pngtree.com/element_our/md/20180620/md_5b29c1599467a.png",
      listProfile: listx,
      profileImage: "http://www.kensap.org/wp-content/uploads/empty-photo.jpg"
    };
  }
  onDeconnect = () => {
    this.props.navigation.navigate("FirstStep");
  };
  //keyExtractor = (item, index) => index
  // _pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     allowsEditing: true,
  //     aspect: [4, 4]
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setState({ profileImage: result.uri });
  //   } else {
  //     this.setState({ profileImage: profileImage });
  //   }
  // };

  _keyExtractor = item => item.icon;
  _renderItems = ({ item }) => {
    this.onPressItem = () => {
      this.props.navigation.navigate(item.navigate, {
        image: this.state.profileImage,
        firstName: "Raghda",
        lastName: "Chouk",
        email: "raghda.chouk94@gmail.com"
      });
    };
    return (
      <TouchableOpacity onPress={this.onPressItem} activeOpacity={0.8}>
        <ListItem
          key={item.id}
          containerStyle={styles.list}
          titleStyle={{ fontFamily: "proximaNovaReg", fontSize: scale(17) }}
          title={item.title}
          leftIcon={{ name: item.icon }}
          rightIcon={{ name: "keyboard-arrow-right" }}
        />
      </TouchableOpacity>
    );
  };
  render() {
    //	let { profileImage } = this.state;
    return (
      <View>
        <View style={styles.posName}>
          {/* {(profileImage && (
						<Avatar
							key={(index) => index}
							containerStyle={styles.avatar}
							size="large"
							rounded
							source={{ uri: profileImage }}
						/>
					)) || <Avatar containerStyle={styles.avatar} size="large" rounded source={{ uri: profileImage }} />} */}
          <Avatar
            containerStyle={styles.avatar}
            size="large"
            rounded
            source={{ uri: this.state.profileImage }}
          />
          <Text style={styles.name}>Raghda Chouk</Text>
        </View>
        <View style={styles.picker}>
          {/* <Avatar rounded onPress={this._pickImage} size="small" source={{ uri: this.state.camera }} /> */}
        </View>

        <View style={styles.menu}>
          <FlatList
            chevron
            keyExtractor={this._keyExtractor}
            data={listx}
            renderItem={this._renderItems}
          />
        </View>
        <View style={styles.view}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.onDeconnect}>
            <Text style={styles.yellowbutton}> SE DECONNECTER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  posName: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  yellowbutton: {
    width: metrics.width,
    backgroundColor: colors.yellow,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: scale(4),
    color: colors.white,
    fontSize: scale(17),
    //fontWeight: 'bold',
    padding: scale(17),
    textAlign: "center",
    alignItems: "center",
    marginTop: scale(40),
    fontFamily: "proximaNovaBold"
  },
  avatar: {
    marginTop: metrics.doubleMediumMargin,
    marginLeft: metrics.baseMargin
  },
  picker: {
    position: "absolute",
    left: scale(41),
    top: scale(88)
  },
  name: {
    padding: scale(10),
    fontSize: scale(22),
    fontFamily: "proximaNovaBold"
  },
  menu: {
    backgroundColor: colors.backGrey,
    marginTop: metrics.doubleMediumMargin
  },
  list: {
    height: scale(60),
    backgroundColor: colors.backGrey,
    borderWidth: 1,
    borderColor: colors.white
  },
  view: {
    alignItems: "center"
  }
});
