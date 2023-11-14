import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/Buttons";

const Welcome = () => {
	return (
		<View style={styles.container}>
			<View style={styles.cardBody}>
				<Text style={styles.header}>Track Delivery Easily</Text>
				<View>
					<Text style={styles.text}>
						Deliver you package around the world without hesitation
					</Text>
				</View>
				<View>
					<AppButton title={"Create Account"} />
					<AppButton title={"Sign In"} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eef1fd",
		justifyContent: "flex-end",
		fontFamily: "Poppins",
	},
	cardBody: {
		backgroundColor: colors.primary,
		height: "41%",
		width: "100%",
		borderTopLeftRadius: 28,
		borderTopRightRadius: 28,
	},
	header: {
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "700",
		paddingTop: 50,
		fontSize: 32,
	},
	text: {
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "500",
		paddingTop: 25,
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20,
	},
	carousel: {
		width: 13,
		height: 13,
		backgroundColor: colors.white,
		margin: 9,
		borderRadius: 50,
		color: "#dfe6ff",
	},
});

export default Welcome;
