import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.WHITE,
        flex: 1,
        padding: 12
    },
    content:{
        paddingVertical: 24, 
    },
    card:{
        width: '95%',
        marginBottom: 12,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textView:{
        gap: 8
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    },
    subTitle:{
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK,
    }
});