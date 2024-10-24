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
    },
    searchBar: {
        borderBottomWidth: 2,
        borderBottomColor: colors.GREY,
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
    },
    input:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK,
        width: '90%',
    },
    found:{
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.DosisBold,
        color: colors.RED
    },
    absoluteBtn:{
        position: 'absolute',
        right: 12,
        bottom: 24,
        height: 56,
        backgroundColor: colors.BLUE,
        justifyContent: 'center',
        paddingHorizontal: 12,
        borderRadius: 4,
        zIndex: 99,
    },
    absoluteBtnText:{
        fontSize: 16,
        letterSpacing: 1,
        fontFamily: fonts.DosisBold,
        color: colors.WHITE
    }
})