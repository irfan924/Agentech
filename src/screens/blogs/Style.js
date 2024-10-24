
import { StyleSheet } from "react-native";
import { height, width } from "../../style/Dimensions";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 8,
        backgroundColor: colors.WHITE,
    },
    flatList: {
        maxWidth: width * 1,
        marginVertical: 24,
    },
    content: {
        width: width * 0.4,
        height: height * 0.3,
        backgroundColor: colors.WHITE,
        gap: 12,
        borderWidth: 0.5,
        borderColor: colors.GREY,
        margin: 12
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
    intro: {
        fontSize: 12,
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK,
        paddingHorizontal: 4,
        letterSpacing: 0.5,
        maxWidth: width * 0.4,
        maxHeight: height * 0.08,
        flexWrap: 'wrap'
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