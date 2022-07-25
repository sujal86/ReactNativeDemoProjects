import { StyleSheet } from "react-native";
import { themes } from "./src/Theme";

const styles = StyleSheet.create({
    text: {
        ...themes.text,
        backgroundColor: 'lightblue',
    },
})

export default styles;
