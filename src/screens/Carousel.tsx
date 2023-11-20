import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useFonts } from "expo-font";
import colors from "../config/colors";
import AppButton from "../components/Buttons";
import { useNavigation } from "@react-navigation/native";

const Carousel = () => {
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

	const handleGettingStarted = () => {
		navigation.navigate("Welcome");
	};

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<View style={styles.cardBody}>
				<Text style={styles.header}>Welcome to SwyftGo</Text>
				<View>
					<Text style={styles.text}>
						Get ready to experience hassle-free deliveries, right at
						your fingertips
					</Text>
				</View>
				<TouchableOpacity>
					<AppButton
						title={"Getting Started"}
						textColor="primary"
						onPress={handleGettingStarted}
					/>
				</TouchableOpacity>
				<View
					style={{
						alignItems: "center",
						justifyContent: "center",
						display: "flex",
						flexDirection: "row",
						marginTop: 25,
					}}
				>
					<TouchableOpacity>
						<View style={styles.carousel}></View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.carousel}></View>
					</TouchableOpacity>
					<TouchableOpacity>
						<View style={styles.carousel}></View>
					</TouchableOpacity>
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
	},
	cardBody: {
		backgroundColor: colors.primary,
		height: "40%",
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
		fontFamily: "Poppins-Semibold",
	},
	text: {
		color: "#ffffff",
		textAlign: "center",
		fontWeight: "500",
		paddingTop: 25,
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20,
		fontFamily: "Poppins-Medium",
	},
	btn: {
		fontFamily: "Poppins-Medium",
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

export default Carousel;
