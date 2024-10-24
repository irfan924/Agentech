import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height, width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginVertical: 24,
        gap: 12,
    },
    notificationBtn:{
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        padding: 8,
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 8
    },
    imgLogo:{
        width: width*0.3,
        height: width*0.3,
        borderRadius: 12
    },
    titleWrapper:{
        gap: 8,
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 0.5,
        width: width*0.6,
    },
    subTitle:{
        fontSize: 14,
        fontFamily: fonts.DosisSemiBold,
        color: colors.GREY,
        letterSpacing: 0.5,
        width: width*0.6,
        
    },

});