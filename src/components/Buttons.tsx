import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

const AppButton = ({
	title,
	backgroundColor = "white",
	textColor = "whit",
}) => {
	return (
		<TouchableOpacity>
			<View
				style={[
					styles.button,
					{
						backgroundColor:
							colors[backgroundColor as keyof typeof colors],
					},
				]}
			>
				<Text
					style={[
						styles.text,
						{ color: colors[textColor as keyof typeof colors] },
					]}
				>
					{title}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		height: 55,
		marginRight: 16,
		marginLeft: 16,
		marginTop: 35,
	},
	text: {
		color: colors.primary,
		fontWeight: "600",
		fontSize: 20,
		padding: 13,
		textAlign: "center",
	},
});

export default AppButton;
