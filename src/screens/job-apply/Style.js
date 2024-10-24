
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        backgroundColor: colors.WHITE,
    },
    content:{
        marginVertical: 12,
        gap: 12
    },
    input:{
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
})