import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginVertical: 24,
        gap: 16,
    },
    card:{
        width: '100%',
        height: height*0.12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: colors.LIGHTGREY,
        paddingHorizontal: 12
    },
    cardInfo:{
        gap: 12
    },
    cardText:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    cardMoney:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE
    },
    Icon:{
        fontSize: 24,
        padding: 4,
        borderRadius: 24,
    },
    referralContainer:{
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginVertical: 36,
        alignItems: 'flex-end',
        padding: 20,
        gap: 8
    },
    giftBox:{
        width: 120,
        height: 150,
        position: 'absolute',
        zIndex: 99
    },
    referralWrapper:{
        width: 240,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    referral:{
        fontSize: 24,
        maxWidth: 200,
        color: colors.WHITE,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
    },
    subTitle:{
        fontSize: 16,
        maxWidth: 240,
        color: colors.WHITE,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
    },
});