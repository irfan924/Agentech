import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content: {
        marginTop: width * 0.2,
        marginBottom: 24,
        gap: 12
    },
    infoContainer: {
        borderWidth: 1,
        borderColor: colors.LIGHTGREY,
        padding: 8,
        alignItems: 'center',
        gap: 12,
        borderRadius: 4,
    },
    logo: {
        width: width * 0.2,
        height: width * 0.2,
        marginTop: -width * 0.12,
        borderRadius: width * 0.1,
        borderWidth: 5,
        borderColor: colors.BLUE
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    subTitle:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    commonInfo:{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        borderBottomColor: colors.GREY,
        borderBottomWidth: 1,
        paddingBottom: 4,
        marginVertical: 4
    },
    infoTitle: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    infoSubTitle:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    address:{
        width: '50%',
        textAlign: 'right'
    },
    infoAboutTalent:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        lineHeight: 24
    },
    contactInfo:{
        gap: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        fontSize: 24,
        padding: 8,
        borderRadius: 24,
        backgroundColor: colors.BLUE,
        color: colors.WHITE
    }
});