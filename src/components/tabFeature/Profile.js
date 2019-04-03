import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  StyleSheet
} from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { colors, metrics } from "../../themes";
import { scale } from "../../helpers/functions";
//import { ImagePicker } from 'expo';

const listx = [
  {
    title: "Informations Personnelles",
    icon: "person"
  },
  {
    title: "Paiement",
    icon: "credit-card"
  },
  {
    title: "Paramètres",
    icon: "settings"
  },
  {
    title: "Aide",
    icon: "help-outline"
  }
];
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      camera:
        "https://png.pngtree.com/element_our/md/20180620/md_5b29c1599467a.png",
      listProfile: listx
    };
    state = {
      profileImage: "http://www.kensap.org/wp-content/uploads/empty-photo.jpg"
    };
  }
  //keyExtractor = (item, index) => index
  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 4]
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ profileImage: result.uri });
    } else {
      this.setState({ profileImage: profileImage });
    }
  };

  render() {
    let { profileImage } = this.state;
    return (
      <View>
        {(profileImage && (
          <Avatar
            key={index => index}
            containerStyle={styles.avatar}
            size="large"
            rounded
            source={{ uri: profileImage }}
          />
        )) || (
          <Avatar
            containerStyle={styles.avatar}
            size="large"
            rounded
            source={{ uri: profileImage }}
          />
        )}
        <View style={styles.picker}>
          {/* <Avatar rounded onPress={this._pickImage} size="small" source={{ uri: this.state.camera }} /> */}
        </View>
        <Text style={styles.name}>Raghda Chouk</Text>

        <View style={styles.menu}>
          <FlatList
            chevron
            keyExtractor={(item, i) => i.toString()}
            data={listx}
            renderItem={({ item }) => (
              <ListItem
                containerStyle={styles.list}
                title={item.title}
                leftIcon={{ name: item.icon }}
                rightIcon={{ name: "keyboard-arrow-right" }}
              />
            )}
          />
        </View>
        <View style={styles.view}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.yellowbutton}> SE DECONNECTER </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  yellowbutton: {
    width: scale(250),
    backgroundColor: colors.backGrey,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: scale(4),
    color: colors.white,
    fontWeight: "bold",
    padding: scale(17),
    textAlign: "center",
    alignItems: "center",
    marginTop: scale(150)
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
    position: "absolute",
    top: scale(80),
    right: metrics.smallMargin,
    fontSize: scale(22),
    fontWeight: "200"
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
