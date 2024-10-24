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
    title: {
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        letterSpacing: 0.5,
        lineHeight: 24,
        color: colors.BLACK,
        textAlign: 'justify'
    },
})