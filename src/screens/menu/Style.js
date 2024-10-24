import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
    },
    icon: {
        fontSize: 24,
        color: colors.WHITE,
        position: 'absolute',
        top: 24,
        left: 24,
        backgroundColor: colors.BLUE,
        borderRadius: 12,
    },
    upperView: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },
    logoBG: {
        width: width * 0.3,
        height: width * 0.3,
        backgroundColor: colors.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.15
    },
    logo: {
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: width * 0.14
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.WHITE,
    },
    subTitle: {
        fontSize: 20,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.WHITE,
    },
    referalView: {
        flexDirection: 'row',
        gap: 16
    },
    content: {
        flex: 0.7,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
        padding: 16,
    },
    logout: {
        flexDirection: 'row',
        width: '90%',
        height: 56,
        alignItems: 'center',
        gap: 8,
        justifyContent: 'center',
        backgroundColor: colors.LIGHTRED,
        alignSelf: 'center',
        borderRadius: 28,
        marginVertical: 4
    },
    btnText: {
        fontSize: 24,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.RED
    },
    powerIcon: {
        fontSize: 24,
        color: colors.RED,
        fontWeight: 'bold'
    },
    lottieView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: '100%',
        height: '100%'
    }
});