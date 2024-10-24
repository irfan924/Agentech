
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginTop: 24
    },
    jobContainer:{
        marginVertical: 8,
        gap: 8,
        borderWidth: 1,
        borderColor: colors.GREY,
        padding: 4,
        borderRadius: 4
    },
    jobUpperContainer:{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    companyLogo:{
        width: width* 0.2,
        height: width* 0.2,
    },
    jobDetailContainer:{
        gap: 4,
    },
    jobTitle:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    jobCompany:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    jobType:{
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    jobAvailability:{
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.GREY
    },
    jobBottomContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 4
    },
    jobCommonInfoContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    postDate:{
        fontSize: 12,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.BLUE
    },
    jobLocation:{
        fontSize: 12,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.ORANGE
    },
    jobPay:{
        fontSize: 12,
        fontFamily: fonts.DosisSemiBold,
        letterSpacing: 0.5,
        color: colors.DARKGREEN
    },
    lottieView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation:{
        width: '100%',
        height: '70%'
    }
});