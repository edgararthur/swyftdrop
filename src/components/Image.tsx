import React from "react";
import { View, Image, StyleSheet } from "react-native";

function ImageComponent({ image }) {
	return (
		<View>
			<Image source={image} />
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
});

export default ImageComponent;
