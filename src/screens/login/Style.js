import { StyleSheet } from 'react-native';
import { height, width } from '../../style/Dimensions';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLUE
    },
    upperView: {
        height: 200,
        aspectRatio: 1 / 1,
        alignSelf: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.WHITE,
    },
    absoluteContent: {
        padding: 12,
        alignItems: 'center',
        gap: 12,
    },
    subTitle: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.WHITE
    },
    summary: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.WHITE
    },
    inputView: {
        height: 200,
        gap: 24,
        justifyContent: 'center',
    },
    dividerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginVertical: 8
    },
    divider: {
        width: '25%',
        height: 4,
        backgroundColor: colors.WHITE,
        borderRadius: 4,
    },
    dividerText: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.WHITE
    },
    btnText: {
        fontSize: 16,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.LIGHTYELLOW
    },
    iconWrapper: {
        flexDirection: 'row',
        height: 100,
        width: '100%',
        justifyContent: 'space-between',
        gap: 12,
        alignItems: 'center'
    },
    loginBtn: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: 'red',
        height: 46,
        alignItems: 'center',
        borderRadius: 23,
        flex: 1,
        gap: 16
    },
    loginBtnText: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.WHITE,
        letterSpacing: 0.5
    },
    logo: {
        width: 30,
        height: 30,
    },
    logoView: {
        width: 60,
        height: 46,
        backgroundColor: colors.WHITE,
        borderTopLeftRadius: 23,
        borderBottomLeftRadius: 23,
        justifyContent: 'center',
        alignItems: 'center'
    }
})