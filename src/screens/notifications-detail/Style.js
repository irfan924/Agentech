import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content: {
        marginVertical: 24,
        gap: 12
    },
    banner: {
        alignSelf: 'center',
        width: '100%',
        height: height * 0.3,
        borderRadius: 8
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 0.5,
    },
    subTitle: {
        fontSize: 14,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        letterSpacing: 0.5,
        lineHeight: 24,
        textAlign: 'justify'
    },
});