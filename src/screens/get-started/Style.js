import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';
import { height } from '../../style/Dimensions';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 12,
        gap: height*0.04    },
    animBG:{
        width: '100%',
        height: 300,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation:{
        width: '100%',
        height: '100%'
    },
    title:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        textAlign: 'center',
        color: colors.WHITE,
    },
    summary:{
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        textAlign: 'justify',
        color: colors.WHITE,
        letterSpacing: 1,

    },
})