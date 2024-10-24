
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";
import { width } from "../../style/Dimensions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
        alignItems: 'center'
    },
    contentContainer: {
        marginTop: 24,
        gap: 12
    },
    courseTitle: {
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK,
        letterSpacing: 1
    },
    commonView: {
        width: width * 0.9,
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.GREY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    courseDetail: {
        fontFamily: fonts.DosisBold,
        color: colors.BLACK
    },
    instructorImg: {
        width: width * 0.25,
        height: width * 0.25,
    },
    instructorDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        padding: 8,
        borderWidth: 0.2,
        borderColor: colors.GREY,
        borderRadius: 4
    },
    shadowProp: {
        shadowColor: colors.BLACK,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    instructorContent: {
        gap: 12
    },
    instructorContainer: {
        width: width * 0.9,
        margin: 12,
        gap: 24
    }
});