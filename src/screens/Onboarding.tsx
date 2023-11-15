import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import { useFonts } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
	});

	const navigation = useNavigation();

	useEffect(() => {
		if (!fontsLoaded) {
			return;
		}
	}, [fontsLoaded]);

	return (
		<View style={styles.container}>
			<View style={styles.card}></View>
			<Text style={styles.text}>SwyftDrop</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
	},
	card: {
		width: 300,
		height: 300,
		backgroundColor: "#dfe6ff",
		borderRadius: 150,
		marginTop: 70,
	},
	text: {
		color: "#ffffff",
		fontSize: 38,
		fontWeight: "700",
		paddingVertical: 15,
		fontFamily: "Poppins-Semibold",
	},
});

export default Onboarding;
