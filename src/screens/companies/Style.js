import { StyleSheet } from 'react-native';
import colors from '../../style/Colors';
import { width } from '../../style/Dimensions';
import fonts from '../../style/Fonts';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 12,
    },
    content:{
        marginTop: 24,
        gap: 12
    },
    companyContainer:{
        flexDirection: 'row',
        padding: 8,
        gap: 24,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.LIGHTGREY,
        borderRadius: 4,
        marginVertical: 6
    },
    companyLogo:{
        width: width*0.2,
        height: width*0.2,
        borderRadius: width*0.1,
        borderWidth: 4,
        borderColor: colors.BLUE,
    },
    titleContainer:{
        gap: 8
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 0.5
    },
    subTitle:{
        fontSize: 14,
        fontFamily: fonts.DosisSemiBold,
        color: colors.BLACK,
        letterSpacing: 0.5
    },
});