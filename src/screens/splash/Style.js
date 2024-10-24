import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        gap: 16
    },
    background: {
        width: 400,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brush: {
        width: 400,
        height: 500,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        color: colors.WHITE,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        marginVertical: 6
    },
    welcomeTitle: {
        fontSize: 40,
        color: colors.DARKBLUE,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        marginVertical: 6
    },
})