
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";


export const styles = StyleSheet.create({
    falseContainer:{
        flex: 1,
        backgroundColor: colors.LIGHTGREY,
        padding: 12,
    },
    trueContainer:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    scrollView:{
        marginTop: 24,
    },
    wrapper:{
        gap: 8,
    }
});