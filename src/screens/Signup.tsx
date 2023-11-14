import React from "react";
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppInput from "../components/Inputs";
import Checkbox from "../components/Checkbox";
import AppButton from "../components/Buttons";

export default function Signup({ navigation }) {
	const handleCheckboxChange = (checked: boolean) => {
		console.log("Checkbox is checked:", checked);
	};

	const navigateToSignIn = () => {
		console.log("Navigating to Sign In");
	};

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="#eef1fd" barStyle="dark-content" />
			<View style={styles.header}>
				<MaterialIcons name="chevron-left" size={36} color="#2a2a2a" />
				<View style={styles.headerText}>
					<Text style={styles.text}>Create Account</Text>
				</View>
			</View>
			<View style={styles.form}>
				<AppInput name="Full Name" style={styles.input} />
				<AppInput name="Email" style={styles.input} />
				<AppInput name="Phone Number" style={styles.input} />
				<AppInput name="Password" style={styles.input} />
				<AppInput name="Confirm Password" style={styles.input} />
				<View>
					<Checkbox
						label="By signing up, you agree to our Terms of Service and Privacy Policy."
						onChange={handleCheckboxChange}
					/>
				</View>
				<View style={styles.submitBtn}>
					<AppButton
						title="Sign Up"
						backgroundColor="primary"
						textColor="white"
					/>
				</View>
				<TouchableOpacity
					onPress={navigateToSignIn}
					style={styles.signInContainer}
				>
					<Text style={styles.signInLink}>
						Already have an account?{" "}
						<Text style={styles.signInText}>Sign in</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#eef1fd",
		height: "100%",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
		paddingTop: StatusBar.currentHeight + 72,
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
	},
	form: {
		paddingTop: 58,
	},
	input: {
		marginBottom: 20,
		color: "#2a2a2a",
		fontSize: 16,
	},
	submitBtn: {
		marginTop: 20,
	},
	signInContainer: {
		alignSelf: "flex-end",
		marginRight: 20,
		marginTop: 12,
		fontSize: 15,
	},
	signInLink: {
		textAlign: "center",
		color: "#2a2a2a",
		fontSize: 15,
		fontWeight: "500",
	},
	signInText: {
		color: "#1f6afe",
		fontSize: 15,
		fontWeight: "500",
	},
});
