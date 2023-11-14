import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	SafeAreaView,
} from "react-native";
import { useFonts } from "expo-font";
import SplashScreen from "expo-splash-screen";

import colors from "../config/colors";

const VerifyPhone = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

	const [fontsLoaded] = useFonts({
		"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
		"Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
		"Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
		"Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
	});

	if (!fontsLoaded) {
		return undefined;
	}

	const handleSendCode = async () => {
		try {
			const response = await fetch(
				`https://api.swyftdrop.com/send-code?phone=${phoneNumber}`
			);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleVerifyCode = () => {
		const code = verificationCode.join(""); // Combine the array elements into a single string
		// Verify the code
		// if (code === expectedCode) {
		//     console.log('Verification successful!');
		// } else {
		//     console.log('Verification failed. Please try again.');
		// }
	};

	const handleChangeCode = (index, value) => {
		const updatedVerificationCode = [...verificationCode];
		updatedVerificationCode[index] = value;
		setVerificationCode(updatedVerificationCode);
	};

	return (
		<SafeAreaView style={styles.main}>
			<View style={styles.container}>
				<StatusBar backgroundColor="#eef1fd" barStyle="dark-content" />
				<View style={styles.header}>
					<MaterialIcons
						name="chevron-left"
						size={36}
						color="#2a2a2a"
					/>
					<View style={styles.headerText}>
						<Text style={styles.text}>Verify Phone Number</Text>
					</View>
				</View>
				<View style={styles.contentContainer}>
					<View>
						<Text style={styles.signInLink}>
							An Authentication Code has been sent to your phone{" "}
							<Text style={styles.signInText}>
								+233 54 870 ***
							</Text>
						</Text>
					</View>
					<View style={styles.inputContainer}>
						{verificationCode.map((digit, index) => (
							<TextInput
								key={index}
								style={styles.input}
								value={digit}
								onChangeText={(text) =>
									handleChangeCode(index, text)
								}
								maxLength={1}
								keyboardType="numeric"
							/>
						))}
					</View>
					<View>
						<Text style={styles.codeResend}>
							I didn't receive any code.{" "}
							<Text style={styles.sendText}>Resend it</Text>
						</Text>
						<Text style={styles.time}>0 : 58 sec left</Text>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<TouchableOpacity
						style={styles.sendCodeButton}
						onPress={handleSendCode}
					>
						<Text style={styles.sendCodeButtonText}>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	main: {
		backgroundColor: "#eef1fd",
	},
	container: {
		backgroundColor: "#eef1fd",
		height: "100%",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingTop: StatusBar.currentHeight + 27,
	},
	headerText: {
		flex: 1,
		alignItems: "center",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		color: "#2a2a2a",
		fontSize: 22,
		fontWeight: "600",
		paddingRight: 20,
		fontFamily: "Poppins-Semibold",
	},
	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 420,
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
	input: {
		width: 55,
		height: 55,
		borderWidth: 1,
		borderRadius: 4,
		marginHorizontal: 13,
		fontSize: 25,
		textAlign: "center",
		fontFamily: "Poppins-Semibold",
		color: "#2a2a2a",
		fontWeight: "600",
	},
	button: {
		backgroundColor: "#1f6afe",
		borderRadius: 8,
		height: 55,
		marginHorizontal: 16,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontFamily: "Poppins-Regular",
		color: "white",
		fontWeight: "600",
		fontSize: 16,
	},
	bottomContainer: {
		paddingBottom: 35,
	},
	signInContainer: {
		alignSelf: "flex-end",
		marginRight: 20,
		marginTop: 12,
		fontSize: 15,
	},
	sendCodeButton: {
		backgroundColor: "#1f6afe",
		borderRadius: 8,
		height: 55,
		marginHorizontal: 16,
		marginTop: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	sendCodeButtonText: {
		color: "white",
		fontWeight: "500",
		fontSize: 22,
	},
	signInLink: {
		textAlign: "center",
		color: "#2a2a2a",
		fontSize: 18,
		fontWeight: "bold",
		paddingHorizontal: 20,
		marginBottom: 23,
		fontFamily: "Poppins-Medium",
	},
	signInText: {
		color: "#1f6afe",
		fontSize: 18,
		fontWeight: "500",
	},
	codeResend: {
		textAlign: "center",
		color: "#2a2a2a",
		fontSize: 18,
		fontWeight: "500",
		paddingHorizontal: 20,
		marginTop: 23,
	},
	sendText: {
		color: "#1f6afe",
		fontSize: 18,
		fontWeight: "500",
	},
	time: {
		fontSize: 18,
		color: colors.primary,
		textAlign: "center",
		fontWeight: "600",
		paddingTop: 8,
	},
});

export default VerifyPhone;
