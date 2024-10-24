import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        flex: 1,
        marginTop: 34,
        justifyContent: 'space-between',
    },
    subtitle:{
        fontSize: 16,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.GREY
    },
    contentWrapper:{
        gap: 16,
    },
    btnView:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        height: 60,
        marginVertical: 16
    },
    discardBtn:{
        borderColor: colors.BLUE,
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    discardBtnText:{
        fontSize: 16,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
    saveBtn:{
        backgroundColor: colors.BLUE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    saveBtnText:{
        fontSize: 16,
        color: colors.WHITE,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
})