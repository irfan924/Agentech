
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12
    },
    wraper:{
        flex: 1,
        backgroundColor: colors.LIGHTGREY,
        padding: 12
    },
    content:{
        marginTop: 24,
        gap: 16
    }
});