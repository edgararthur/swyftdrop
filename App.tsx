import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "expo-splash-screen";

import * as Font from "expo-font";
import Main from "./Main";

const fetchFonts = () => {
	return Font.loadAsync({
		poppins: require("./assets/fonts/Poppins-Regular.ttf"),
	});
};

export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await fetchFonts();
			setFontsLoaded(true);

			if (SplashScreen && SplashScreen.hideAsync) {
				SplashScreen.hideAsync();
			}
		};
		loadFonts();
	}, []);

	if (!fontsLoaded) {
		return null;
	}
	const Stack = createNativeStackNavigator();

	return <Main />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
