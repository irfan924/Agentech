
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height, width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.GREY,
    },
    icon: {
        fontSize: 28,
        position: 'absolute',
        top: 12,
        left: 12,
        color: colors.BLUE,
        zIndex: 99
    },
    img: {
        width: width * 1,
        height: width * 0.77,
        alignSelf: 'center'
    },
    content: {
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        padding: 12
    },
    scrollStyle: {
        height: height * 0.35,
        padding: 8,
    },
    name: {
        marginTop: 8,
        fontSize: 28,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
    },
    title: {
        marginBottom: 8,
        fontSize: 24,
        color: colors.BLACK,
        fontFamily: fonts.DosisRegular,
        letterSpacing: 1,
    },
    desc: {
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 1,
        lineHeight: 20,
        paddingVertical: 12,
    },
    otherStories: {
        paddingVertical: 4
    },
    flatContainer: {
        paddingVertical: 8,
        marginRight: 16
    },
    storyImg: {
        width: width * 0.2,
        height: width * 0.2,
    },
    jobTitle: {
        maxWidth: width * 0.2,
        textAlign: 'center',
        fontSize: 16,
        fontFamily: fonts.DosisBold,
    },
    lottieView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
    },
    animation: {
        width: '100%',
        height: '70%'
    }
});