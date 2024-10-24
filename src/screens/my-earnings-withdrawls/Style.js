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
    btnView:{
        flexDirection: 'row',
        gap: 36
    },
    btn:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 8,
        borderRadius: 1,
    },
    btnComplete:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 8,
        borderRadius: 1,
        borderBottomWidth: 2,
        borderColor: colors.BLUE
    },
    btnText:{
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
    },
    noFound:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.GREY,
        letterSpacing: 1
    }

});