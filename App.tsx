import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Main";

export default function App() {
	return <Main />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
