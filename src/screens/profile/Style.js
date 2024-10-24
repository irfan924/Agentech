import { StyleSheet } from 'react-native';

import colors from '../../style/Colors';
import { height } from '../../style/Dimensions';
import fonts from '../../style/Fonts';


export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
        gap: 12
    },
    mainContainer: {
        gap: 12
    },
    profileContainer: {
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16
    },
    logo:{
        fontSize: 90,
        color: colors.BLUE,
        borderWidth: 3,
        borderColor: colors.BLUE,
        borderRadius: 90,
        padding: 8

    },
    imgContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    loadingContainer:{
        flexDirection: 'row',
        marginTop: 16,
        gap: 36
    },
    loadingText:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE,
    },
    userName: {
        fontSize: 36,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE,
        textAlign: 'right'
    },
    btnView: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        height: 60,
        marginVertical: 16
    },
    discardBtn: {
        borderColor: colors.BLUE,
        borderWidth: 2,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    discardBtnText: {
        fontSize: 16,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
    saveBtn: {
        backgroundColor: colors.BLUE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    saveBtnText: {
        fontSize: 16,
        color: colors.WHITE,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
    delBtn: {
        height: 56,
        backgroundColor: colors.LIGHTRED,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    delBtnText: {
        fontSize: 16,
        color: colors.RED,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
    lottieView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: '100%',
        height: '70%'
    },
    profileLogo:{
        width: 100,
        height: 100,
        borderRadius: 100/2
    }
})