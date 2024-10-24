import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import fonts from '../../style/Fonts';


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12
    },
    content:{
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 24,
        gap: 12
    },
    card:{
        borderWidth: 1,
        borderColor: colors.BLUE,
        borderRadius: 4,
        width: '95%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },
    lottie:{
        width: '30%',
        height: '30%',
        backgroundColor: colors.LIGHTBLUE,
        borderRadius: 50
    },
    cardView:{
        alignItems: 'center',
        gap: 4
    },
    subTitle:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.GREY,
        letterSpacing: 0.5,
        maxWidth: '80%',
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE
    }
})