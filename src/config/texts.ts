import {useFonts} from "expo-font";

export default const [fontsLoaded] = useFonts({
	font_regular: require("../../assets/fonts/Poppins-Regular.ttf"),
	font_medium: require("../../assets/fonts/Poppins-Medium.ttf"),
	font_semibold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
	font_bold: require("../../assets/fonts/Poppins-Bold.ttf"),
});
