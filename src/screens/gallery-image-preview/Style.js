
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height, width } from "../../style/Dimensions";


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 8,
    },
    icon:{
        fontSize: 36,
        color: colors.BLUE,
        textAlign: 'right',
    },
    img:{
        width: width*1,
        height: height*0.4,
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})