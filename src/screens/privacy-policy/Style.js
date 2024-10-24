import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content: {
        gap: 12,
        marginTop: 24,
        paddingBottom: 50
    },
    aboutTitle: {
        fontSize: 24,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        textAlign: 'center',
        color: colors.BLUE
    },
    para: {
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        letterSpacing: 0.5,
        lineHeight: 24,
        color: colors.BLACK
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        lineHeight: 24,
        color: colors.BLACK
    },
    subTitle: {
        fontSize: 18,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        lineHeight: 24,
        color: colors.CHOCOLATE,
    },
})