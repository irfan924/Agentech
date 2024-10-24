import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { width, height } from "../../style/Dimensions";
import fonts from "../../style/Fonts";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content: {
        marginTop: 24,
    },
    poolContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 8,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.LIGHTGREY
    },

    logo: {
        width: width * 0.2,
        height: width * 0.2,
        borderRadius: width*0.2/1
    },
    poolDetailContainer: {
        gap: 4
    },
    name: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    skillset: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    exp: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    jobAvailability: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    lottieView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation:{
        width: '100%',
        height: '70%'
    },
    list:{
        marginTop: 16,
        gap: 12
    }

});