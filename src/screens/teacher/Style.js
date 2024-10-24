import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";
import { height } from "../../style/Dimensions";



export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginVertical: 24
    },
    wrapper:{

    },
    errorDisplay:{
        alignSelf: 'center',
        fontSize: 24,
        color: colors.DARKBLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        marginVertical: height*0.1,
    }
});