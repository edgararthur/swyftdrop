import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "./src/screens/Onboarding";
import Carousel from "./src/screens/Carousel";
import Welcome from "./src/screens/Welcome";
import Signup from "./src/screens/Signup";
import VerifyPhone from "./src/screens/VerifyPhone";

const Stack = createNativeStackNavigator();

export default function Main() {
	const [screen, setShowScreen] = useState("Onboarding");

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowScreen("Carousel");
		}, 5000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen
					name="Onboarding"
					component={Onboarding}
					options={{ headerShown: false }}
				/>
				{screen === "Carousel" && (
					<Stack.Screen
						name="Carousel"
						component={Carousel}
						options={{ headerShown: false }}
					/>
				)} */}
				<Stack.Screen
					name="Carousel"
					component={VerifyPhone}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
