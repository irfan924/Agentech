import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';
import { height } from '../../style/Dimensions';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
        gap: height*0.05,
        padding: 12
    },
    img:{
        width: '100%',
        height: 300
    },
    maintitle:{
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        fontSize: 16,
        color: colors.ORANGE
    },
    title:{
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        fontSize: 16,
        color: colors.BLUE,
        textAlign: 'center'
    },
    input:{
        backgroundColor: colors.LIGHTGREY,
        paddingHorizontal: 8,
        paddingVertical: 16,
        borderRadius: 36,
        width: '100%',
        fontSize: 20,
        color: colors.BLUE,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1
    },
})