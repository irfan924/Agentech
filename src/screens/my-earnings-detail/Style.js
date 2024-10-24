import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height } from "../../style/Dimensions";
import fonts from "../../style/Fonts";



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        alignItems: 'center',
        marginTop: 14,
        gap: 16
    },
    earning:{
        width: '100%',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    count:{
        fontSize: 36,
        fontFamily: fonts.DosisBold,
        color:colors.BLUE
    },
    earn:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    allTimeView:{
        padding: 16,
        marginTop: 12,
        borderWidth: 2,
        borderColor: colors.BLUE,
        borderRadius: 4 
    },
    allTime:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        letterSpacing: 1,
    },
    dataContainer:{
        width: '100%',
        height: height*0.45,
        alignItems: 'center',
        gap: 12,
        paddingVertical: 24
    }

});