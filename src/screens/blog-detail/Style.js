
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 8,
    },
    header:{
        flexDirection: 'row',
        gap: 12,
        paddingRight: 12
    },
    description:{
        padding: 4,
        marginTop: 12,
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK,
        letterSpacing: 0.5,
        textAlign: 'justify',
        lineHeight: 28
    },
    activityContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    img:{
        width: '90%',
        height: 200,
        borderRadius: 4,
        alignSelf: 'center',
        marginTop: 16
    }
});