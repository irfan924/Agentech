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
        paddingVertical: 24,
        gap: 16
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 1,
        marginTop: 16
    },
    searchBar: {
        borderBottomWidth: 2,
        borderBottomColor: colors.GREY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK,
        width: '90%',
    },
    subTitle: {
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 1,
    },
    btnView: {
        flexDirection: 'row',
        gap: 12
    },
    btn: {
        height: 56,
        backgroundColor: colors.BLUE,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius:4,
    },
    btnSimple: {
        height: 56,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderWidth: 2,
        borderColor: colors.BLUE,
        borderRadius:4,
    },
    btnText: {
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.WHITE
    },
    btnTextSimple: {
        fontSize: 14,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE
    },
    horizontalCard:{
        marginTop: 16,
        marginRight: 16,
        borderWidth: 1,
        borderColor: colors.GREY,
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    logo:{
        width: 50,
        height: 50,
        aspectRatio: 4/5
    },
    divider:{
        width: 2,
        height: '90%',
        backgroundColor: colors.GREY,
        borderRadius: 2
    },
    scrollView:{
        gap: 12
    },
    bottomView:{
        marginBottom: 250
    },
    btnCard:{
        borderWidth: 1,
        borderColor: colors.GREY,
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        marginVertical: 12,
        justifyContent: 'space-around'
    },
    lottieView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation:{
        width: '100%',
        height: '70%'
    }
})