import { SafeAreaView, StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Font from "expo-font";
import { BlurView } from "expo-blur";

const Dashboard = () => {
	const navigation = useNavigation();

	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		const loadFonts = async () => {
			try {
				await Font.loadAsync({
					"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
          			"Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
					"Poppins-Semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
          			"Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
				});
			} catch (error) {
				return error
			} finally {
				setIsLoading(false)
			}
		}
		loadFonts()
	}, [])

	// Only render content if fonts are loaded
	if (isLoading) {
		return null;
	}

	return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.headerCard}>
					<View style={styles.header}>
	 					<BlurView intensity={30} tint="dark" style={styles.blur}>
	 						<View style={styles.locate}>
	 							<MaterialIcons name="place" size={32} color="#ff6e6e" />
	 							<Text style={styles.locateText}>Cape Coast, Ghana</Text>
	 						</View>
	 					</BlurView>
	 					<MaterialIcons name="notifications-none" size={35} color="white" />
	 				</View>
                    <View style={styles.greeting}>
                        <Text style={{ fontSize: 17, color: "#eef1fd", fontFamily: "Poppins-Medium", paddingLeft: 12, paddingTop: 10, }}>
                            Good Morning
                        </Text>
                        <Text style={{ fontSize: 20, color: "#eef1fd", fontFamily: "Poppins-Medium", paddingTop: 10, paddingLeft: 10, }}>
                            Edgar Arthur
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 22, color: colors.white, fontFamily: "Poppins-Semibold", paddingLeft: 12, paddingTop: 10, }}>
                            Get your errands and tasks done for you.
                        </Text>
                    </View>
                    <View style={styles.search}>
						<View style={styles.inputHeader}>
							<MaterialIcons name="search" size={25} color="#888888" style={styles.search_icon} />
	 						<TextInput style={styles.input} placeholder="Enter a tracking number" placeholderTextColor="#888888" />
	 					</View>
						<View style={styles.scan}>
	 						<MaterialIcons name="center-focus-weak" size={30} color="#2a2a2a" style={styles.search_scan} />
	 					</View>
	 				</View>
                </View>
            </View>
            <View style={styles.tasks}>
                <View style={{ paddingTop: 21 }}>
                    {renderTasks()}
                </View>
            </View>
        </SafeAreaView>
    );
};

const renderTasks = () => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"  }}>
			<View style={{ marginLeft: 14, width: 85, height: 125, backgroundColor: "#eeeeee", borderRadius: 8, paddingTop: 12, alignItems: "center" }}>
				<Image source={require("swyftdrop/assets/images/gas-cylinder.jpg")} style={{ width: 65, height: 65, borderRadius: 120, alignItems: "center" }} />
				<Text style={{ fontSize: 15, fontFamily: "Poppins-Medium", color: "#2a2a2a", paddingTop: 12 }}>Gas Filling</Text>
			</View>
			<View style={{ marginLeft: 14, width: 85, height: 125, backgroundColor: "#f7f7f7", borderRadius: 8, paddingTop: 12, alignItems: "center" }}>
				<View style={{ height: 65, width: 65, backgroundColor: colors.white, borderRadius: 120, alignItems: "center", justifyContent: "center" }}>
					<Image source={require("swyftdrop/assets/images/food-1.jpg")} style={{ width: 45, height: 45, borderRadius: 120 }} />
				</View>
				<Text style={{ fontSize: 15, fontFamily: "Poppins-Medium", color: "#2a2a2a", textAlign: "center", paddingTop: 12 }}>Food</Text>
			</View>
			<View style={{ marginLeft: 14, width: 85, height: 125, backgroundColor: "#f7f7f7", borderRadius: 8, paddingTop: 12, alignItems: "center" }}>
				<View style={{ height: 65, width: 65, backgroundColor: colors.white, borderRadius: 120, alignItems: "center", justifyContent: "center" }}>
					<Image source={require("swyftdrop/assets/images/parcel.jpg")} style={{ width: 45, height: 45, borderRadius: 120 }} />
				</View>
				<Text style={{ fontSize: 15, fontFamily: "Poppins-Medium", color: "#2a2a2a", textAlign: "center", paddingTop: 12 }}>Pizza</Text>
			</View>
			<View style={{ marginLeft: 14, marginRight: 14, width: 85, height: 125, backgroundColor: "#f7f7f7", borderRadius: 8, paddingTop: 12, alignItems: "center" }}>
				<View style={{ height: 65, width: 65, backgroundColor: colors.white, borderRadius: 120, alignItems: "center", justifyContent: "center" }}>
					<Image source={require("swyftdrop/assets/images/food-1.jpg")} style={{ width: 45, height: 45, borderRadius: 120 }} />
				</View>
				<Text style={{ fontSize: 15, fontFamily: "Poppins-Medium", color: "#2a2a2a", textAlign: "center", paddingTop: 12 }}>Food</Text>
			</View>
		</View>
	);
}

export default Dashboard;

const styles = StyleSheet.create({
	main: {
		backgroundColor: colors.primary,
	},
	container: {
		// flex: 1,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
		paddingTop: 10,
	},
	headerCard: {
		backgroundColor: colors.primary,
		height: 250,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},
	blur: {
		width: 260,
		height: 40,
		borderRadius: 10,
	},
	locate: {
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 5,
		paddingLeft: 10,
	},
	locateText: {
		fontSize: 14,
		paddingLeft: 8,
		fontFamily: "Poppins-Medium",
		color: "#eef1fd",
	},
	greeting: {
		flexDirection: "row",
		alignItems: "center",
	},
	search: {
		flexDirection: "row",
		alignItems: "center",
		alignContent: "center",
		justifyContent: "space-between",
		marginTop: 19,
		marginHorizontal: 17,
	},
	inputHeader: {
		width: 330,
		height: 45,
		backgroundColor: "#eef1fd",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 6,
	},
	search_icon: {
		paddingLeft: 10,
		width: "10%",
	},
	input: {
		fontSize: 18,
		paddingLeft: 8,
		width: "90%",
		height: "100%",
		fontFamily: "Poppins-Regular",
		alignItems: "center",
		color: "#2a2a2a",
	},
	scan: {
		width: 45,
		height: 45,
		backgroundColor: "#f79d36",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 6,
	},
	search_scan: {
		alignItems: "center",
		justifyContent: "center",
	},
	tasks: {
		backgroundColor: colors.bg_primary,
		borderTopRightRadius: 15,
		borderTopLeftRadius: 15,
		height: "100%",
	},
	history_card: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginHorizontal: 20,
		paddingTop: 18,
	},
	promo__container: {
		backgroundColor: "transparent",
		marginHorizontal: 14,
		height: 150,
		borderRadius: 8,
		paddingHorizontal: 12,
		marginTop: 12,
		borderColor: "#888888",
		borderWidth: 0.8,
	},
	background__image: {
		resizeMode: "cover",
		height: "100%",
		borderRadius: 12,
	},
});
