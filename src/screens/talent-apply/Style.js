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
        marginVertical: 24,
        gap: 12
    },
    cameraWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        marginBottom: width * 0.1
    },
    cameraBtn: {
        width: width * 0.4,
        height: width * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.2,
        borderColor: colors.GREY,
        borderWidth: 2,
    },
    icon: {
        fontSize: width * 0.15,
        color: colors.GREY,
    },
    logo: {
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: width * 0.25 / 2,
    },
    profilePicText: {
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.GREY,
        letterSpacing: 1
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        letterSpacing: 1,
        textAlignVertical: 'top',
        padding: 4,
        borderWidth: 1,
        borderColor: colors.GREY,
        marginVertical: 12,
        borderRadius: 4,
    },
    loadingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        justifyContent: 'space-between',
    },
    loadingText: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    success: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.GREEN,
        letterSpacing: 1,
    },
    logoWrapper:{
        alignItems: 'center',
        gap: 12
    },
    innerProgressView:{
        paddingVertical: 8,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentText:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE,
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        color: colors.DARKGREEN,
        letterSpacing: 1,
        
    }
});