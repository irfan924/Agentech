
import { StyleSheet } from "react-native";

import colors from '../../style/Colors'
import { height, width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.WHITE,
        padding: 8,
        // marginBottom: 12
    },
    mainImg:{
        width: width*0.8,
        height: height*0.2,
        alignSelf: 'center',
        marginVertical: 24,
        borderRadius: 12
    },
    topTagContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    topCourse:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK
    },
    aboutContainer:{
        marginTop: 16,
        marginBottom: 8,
        gap: 12
    },
    courseTitle:{
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK,
        letterSpacing: 1,
        textAlign: 'justify'
    },
    commonView:{
        paddingVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: colors.GREY,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    courseDetail:{
        fontFamily: fonts.DosisBold,
        color: colors.BLACK
    },
    instructorImg:{
        width: width*0.25,
        height: width*0.25,
    },
    instructorDetails:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    instructorContent:{
        gap: 12
    },
    activityContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }

})