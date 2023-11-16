import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TextInputProps,
	KeyboardTypeOptions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

import colors from "../config/colors";

interface AppInputProps extends TextInputProps {
	name: string;
	style?: any;
	keyboardType?: KeyboardTypeOptions;
	onChangeText: (text: string) => void;
}

const AppInput: React.FC<AppInputProps> = ({
	name,
	style,
	keyboardType,
	onChangeText,
	autoCorrect,
	secureTextEntry,
	autoCapitalize,
	...rest
}) => {
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

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={[styles.btnContainer, style]}>
			<Text style={styles.text}>{name}</Text>
			<TextInput
				style={styles.input}
				keyboardType={keyboardType}
				onChangeText={onChangeText}
				autoCorrect={autoCorrect}
				secureTextEntry={secureTextEntry}
				autoCapitalize={autoCapitalize}
				{...rest}
			/>
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
		height: 50,
		borderRadius: 4,
		fontWeight: "600",
		borderWidth: 1,
		borderColor: "#898989",
		paddingLeft: 10,
		fontSize: 18,
		color: "#2a2a2a",
		fontFamily: "Poppins-Medium",
	},
});

export default AppInput;
