import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

import colors from "../config/colors";

const AppInput = ({ name, style }) => {
	return (
		<View style={[styles.btnContainer, style]}>
			<Text style={styles.text}>{name}</Text>
			<TextInput style={styles.input} />
		</View>
	);
};

const styles = StyleSheet.create({
	btnContainer: {
		marginLeft: 20,
		marginRight: 20,
	},
	text: {
		fontSize: 17,
		paddingBottom: 10,
		fontWeight: "500",
		color: "#2a2a2a",
	},
	input: {
		width: "100%",
		height: 48,
		borderRadius: 4,
		fontWeight: "600",
		borderWidth: 1,
		borderColor: "#898989",
		paddingLeft: 10,
		fontSize: 17,
	},
});

export default AppInput;
