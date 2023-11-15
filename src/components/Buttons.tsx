import React, { useEffect } from "react";
import {
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import colors from "../config/colors";
import { useFonts } from "expo-font";

interface CustomButtonProps extends TouchableOpacityProps {
	title: string;
	backgroundColor?: keyof typeof colors;
	textColor?: keyof typeof colors;
}

const CustomButton: React.FC<CustomButtonProps> = ({
	title,
	backgroundColor = "white",
	textColor = "white",
	onPress,
	...props
}) => {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
	});

	useEffect(() => {
		if (!fontsLoaded) {
			return;
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					backgroundColor: colors[backgroundColor],
				},
			]}
			onPress={onPress}
			{...props}
		>
			<Text style={[styles.text, { color: colors[textColor] }]}>
				{title}
			</Text>
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
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		fontFamily: "Poppins-Medium",
	},
});

export default CustomButton;
