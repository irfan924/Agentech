
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import fonts from "../../style/Fonts";
import { height, width } from "../../style/Dimensions";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 8,
    },
    header:{
        flexDirection: 'row',
        gap: width*0.2,
        paddingRight: 12,
        alignItems: 'center',
        
    },
    description:{
        padding: 4,
        marginTop: 12,
        fontSize: 16,
        fontFamily: fonts.DosisBold,
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
    content:{
        margin: 12
    },
    flatList:{
        marginVertical: 24
    },
    img:{
        width: width*0.4,
        height: height*0.2,
        borderRadius: 4
    },
    
});