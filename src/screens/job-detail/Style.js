
import { StyleSheet } from "react-native";
import { height, width } from "../../style/Dimensions";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
    },
    logoContainer:{
        height: height*0.3,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        marginVertical: 12,
    },
    companyLogo:{
        aspectRatio: 16/9,
        width: width*0.5,
        height: width*0.5,
        borderRadius: 8
    },
    jobTitle:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK
    },
    jobInfoContent:{
        gap: 8,
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.BLACK
    },
    commonJobInfo:{
        flexDirection: 'row',
        gap: 12
    },
    commonInfoText:{
        fontSize: 14,
        color: colors.GREY,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
    },
    jobDesciptionContainer:{
        marginVertical: 12,
        gap: 12
    },
    title:{
        fontSize: 20,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 1
    },
    desc:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        letterSpacing: 1
    },
    innerBottmView:{
        marginVertical: 12
    },
   
});