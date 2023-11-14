import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Onboarding from "./src/screens/Onboarding";
import Carousel from "./src/screens/Carousel";
import Welcome from "./src/screens/Welcome";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Main />
		</NavigationContainer>
	);
}

function Main() {
	const navigation = useNavigation();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigation.navigate("Carousel");
		}, 5000);

		return () => clearTimeout(timer);
	}, [navigation]);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Onboarding"
				component={Onboarding}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Carousel"
				component={Carousel}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Welcome"
				component={Welcome}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
