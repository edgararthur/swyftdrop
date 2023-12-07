import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";
import Font from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
	const navigation = useNavigation();

	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
          			"Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
					"Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
          			"Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
				});
			} catch (error) {
				return error
			} finally {
				setIsLoading(false)
			}
		}
		loadFonts()
	}, [])

	// Only render content if fonts are loaded
	if (isLoading) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image source={require("swyftdrop/assets/images/delivery.png")} style={{ width: 200, height: 200 }} />
			</View>
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
