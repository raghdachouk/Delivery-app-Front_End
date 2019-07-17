import React from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, Keyboard } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import PropTypes from 'prop-types';
import { me, signOut } from '../../api/auth';
import { colors, metrics } from '../../themes';
import { scale } from '../../helpers/functions';
//import ImagePicker from 'react-native-image-picker';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
//import { ImagePicker } from 'expo';

const listx = [
	{
		title: 'Informations Personnelles',
		icon: 'person',
		navigate: 'personalInfo'
	},
	{
		title: 'Mes adresses',
		icon: 'place',
		navigate: 'address'
	},
	{
		title: 'Paiement',
		icon: 'credit-card',
		navigate: 'paiement'
	},
	{
		title: 'Mes favoris',
		icon: 'favorite',
		navigate: 'favoris'
	},
	{
		title: 'Aide',
		icon: 'help-outline',
		navigate: 'aide'
	}
];
export default class Profile extends React.Component {
	static propTypes = {
		navigation: PropTypes.object.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			error: null,
			firstName: '',
			lastName: '',
			email: '',
			camera: 'https://png.pngtree.com/element_our/md/20180620/md_5b29c1599467a.png',
			listProfile: listx,
			profileImage: 'http://www.kensap.org/wp-content/uploads/empty-photo.jpg'
		};
	}
	onDeconnect = () => {
		signOut()
			.then(({ success }) => {
				if (success) this.props.navigation.navigate('FirstStep');
			})
			.catch((e) => console.log(e.message));
	};
	// componentDidMount() {
	//   axios.get('http://192.168.1.14:5000/auth/me')
	//   .then(response => {
	//     const {email,userId,firstName,lastName}=response.data
	//     this.setState({ firstName:firstName,lastName:lastName,email:email });
	//   })
	//   .catch(error => {
	//     console.log(error);
	//   });
	// }

	//keyExtractor = (item, index) => index
	_pickImage = async () => {
		await ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true,
			useFrontCamera: true
		}).then((image) => {
			console.log(image);
		});
		// ImagePicker.showImagePicker({}, (response) => {
		// 	if (response.didCancel) {
		// 		console.log("L'utilisateur a annulé");
		// 	} else if (response.error) {
		// 		console.log('Erreur : ', response.error);
		// 	} else {
		// 		console.log('Photo : ', response.uri);
		// 		let requireSource = { uri: response.uri };
		// 		// On crée une action avec l'image prise et on l'envoie au store Redux
		// 		//const action = { type: 'SET_AVATAR', value: requireSource };
		// 		this.setState({ profileImage: requireSource });
		// 		//this.props.dispatch(action);
		// 	}
		// });
	};

	// _renderItems = ({ item }) => {
	//   this.onPressItem = () => {

	//     this.props.navigation.navigate(item.navigate, {
	//       image: this.state.profileImage,
	//       firstName: "Raghda",
	//       lastName: "Chouk",
	//       email: "raghda.chouk94@gmail.com"
	//     });
	//   };
	_keyExtractor = (item) => item.icon;
	_renderItems = ({ item }) => {
		const { loading } = this.state;
		this.onPressItem = () => {
			if (!loading) {
				this.setState({ loading: true });
				me()
					.then(({ success, message, email, firstName, lastName, userId }) => {
						this.setState({ loading: false }, () => {
							console.log(success);
							if (success)
								this.props.navigation.navigate(item.navigate, {
									image: this.state.profileImage,
									firstName: firstName,
									lastName: lastName,
									email: email,
									userId: userId
								});
							else this.setState({ error: message, loading: false });
						});
					})
					.catch((e) => {
						//	Keyboard.dismiss();
						this.setState({ loading: false, error: e.message });
					});
			}
		};
		return (
			<TouchableOpacity onPress={this.onPressItem} activeOpacity={0.8}>
				<ListItem
					key={item.id}
					containerStyle={styles.list}
					titleStyle={{ fontFamily: 'proximaNovaReg', fontSize: scale(17) }}
					title={item.title}
					leftIcon={{ name: item.icon }}
					rightIcon={{ name: 'keyboard-arrow-right' }}
				/>
			</TouchableOpacity>
		);
	};
	render() {
		const { profileImage } = this.state;
		return (
			<View>
				<View style={styles.posName}>
					{(profileImage && (
						<Avatar
							key={(index) => index}
							containerStyle={styles.avatar}
							size="large"
							rounded
							source={{ uri: profileImage }}
						/>
					)) || <Avatar containerStyle={styles.avatar} size="large" rounded source={{ uri: profileImage }} />}

					{/* <Text style={styles.name}>Raghda Chouk</Text> */}
				</View>
				<View style={styles.picker}>
					<Avatar rounded onPress={this._pickImage} size="small" source={{ uri: this.state.camera }} />
				</View>

				<View style={styles.menu}>
					<FlatList chevron keyExtractor={this._keyExtractor} data={listx} renderItem={this._renderItems} />
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
		flexDirection: 'row',
		justifyContent: 'space-between'
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
		textAlign: 'center',
		alignItems: 'center',
		marginTop: scale(40),
		fontFamily: 'proximaNovaBold'
	},
	avatar: {
		marginTop: metrics.doubleMediumMargin,
		marginLeft: metrics.baseMargin
	},
	picker: {
		position: 'absolute',
		left: scale(41),
		top: scale(88)
	},
	name: {
		padding: scale(10),
		fontSize: scale(22),
		fontFamily: 'proximaNovaBold'
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
		alignItems: 'center'
	}
});
