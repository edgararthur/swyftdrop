import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface CheckboxProps {
	label: string;
	onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange }) => {
	const [check, setCheck] = React.useState(false);

	const handleCheck = () => {
		setCheck(!check);
		onChange(!check);
	};

	return (
		<View style={styles.checkboxContainer}>
			<TouchableOpacity onPress={handleCheck} style={styles.checkboxBtn}>
				<MaterialIcons
					name={check ? "check-box" : "check-box-outline-blank"}
					size={24}
					color="#1F6AFE"
					style={styles.checkbox}
				/>
			</TouchableOpacity>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	checkboxContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: 20,
	},
	checkboxBtn: {
		alignItems: "center",
	},
	checkbox: {
		width: 24,
		flex: 1,
	},
	label: {
		fontSize: 14.3,
		paddingLeft: 12,
		marginRight: 25,
		fontWeight: "500",
		color: colors.text_color,
	},
});

export default Checkbox;
