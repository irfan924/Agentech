import { StyleSheet } from "react-native";
import colors from "./Colors";

export const shadow = StyleSheet.create({
    shadow: {
        shadowColor: colors.GREY,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,

        elevation: 2,
    }
})