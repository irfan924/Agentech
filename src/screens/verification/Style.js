import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import { width } from '../../style/Dimensions';
import fonts from '../../style/Fonts';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24
    },
    animation: {
        width: '100%',
        height: 300,
    },
    subtitle: {
        maxWidth: '85%',
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        textAlign: 'center',
    },
    notFound: {
        fontSize: 16,
        fontFamily: fonts.OpenSansRegular,
        color: colors.RED
    },
    btn: {
        backgroundColor: colors.BLUE,
        height: 56,
        width: '85%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
    },
    btnText: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.WHITE,
    }
})