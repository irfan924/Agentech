import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginVertical: 12,
        gap: 12,
    },
    bottomView:{
        marginVertical: 12,
        gap: 12
    },
    title:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    logo:{
        width: '60%',
        height: '80%',
        borderRadius: 10,

    },
    imgWrapper:{
        gap: 12,
        height: 200,
        position: 'relative'
    },
    loadingWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        width: '60%',
        justifyContent: 'space-between',
    },
    loadingText:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    success:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.GREEN,
        letterSpacing: 1,
    }
})