
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height, width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 8
    },
    flatList: {
        maxWidth: width * 1,
        marginVertical: 24,
    },
    content: {
        width: width * 0.4,
        height: height * 0.2,
        backgroundColor: colors.WHITE,
        gap: 12,
        margin: 12,
        alignItems: 'center'
    },
    img: {
        width: width * 0.4,
        height: height * 0.14
    },
    title: {
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        paddingHorizontal: 4,
        letterSpacing: 0.5
    },
    lottieView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: '100%',
        height: '70%'
    }
});