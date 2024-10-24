
import { StyleSheet } from "react-native";
import colors from "../../style/Colors";
import { height, width } from "../../style/Dimensions";
import fonts from "../../style/Fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE
    },
    upperView: {
        height: height * 0.18,
        width: width * 1,
        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 8,
    },
    infoHeader: {
        gap: 12
    },
    userName: {
        fontSize: 20,
        fontFamily: fonts.DosisSemiBold,
        color: colors.WHITE,
        letterSpacing: 0.5
    },
    subtitle: {
        fontSize: 16,
        fontFamily: fonts.DosisRegular,
        color: colors.BLACK,
        letterSpacing: 0.5
    },
    scrollContainer: {
        marginVertical: 4,
        paddingHorizontal: 8,
    },
    commonView: {
        marginVertical: 8
    },
    serviceContainer: {
        padding: 4,
        gap: 8
    },
    image: {
        width: '100%',
        height: height * 0.2,
        borderRadius: 4,
    },
    slide: {
        marginHorizontal: 4
    },
    swiper: {
        height: height * 0.25,
        marginTop: 12,
    },
    courses: {
        marginVertical: 12,
        gap: 8
    },
    courseBtn: {
        height: height * 0.2,
        gap: 12
    },
    course: {
        width: width * 0.7,
        height: height * 0.2,
        marginRight: 24,
        borderRadius: 4
    },
    seeMoreBtn: {
        backgroundColor: colors.BLUERGBA,
        width: width * 0.7,
        height: height * 0.2,
        marginRight: 12,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12
    },
    seeMoreBtnText:{
        fontSize: 36,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLUE
    },
    storySlide: {
        margin: 8,
        gap: 4
    },
    storyImg: {
        width: width * 0.25,
        height: height * 0.12
    },
    postTitle: {
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        width: width * 0.25,
        textAlign: 'center',
        color: colors.BLACK,
        letterSpacing: 1
    },
    recentBlogsView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seeAllBtn: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE,
        letterSpacing: 1
    },
    blogView: {
        marginVertical: 8,
        flexDirection: 'row',
        gap: 12,
        width: '100%',
        height: height * 0.15,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: colors.GREY,
        padding: 4,
    },
    blogImg: {
        width: width * 0.3,
        height: width * 0.25,
        borderRadius: 4
    },
    blogTitleView: {
        gap: 12,
        flexWrap: 'wrap'
    },
    blogTitle: {
        fontSize: 14,
        fontFamily: fonts.DosisBold,
        width: width * 0.7,
        color: colors.BLACK
    },
    blogIntro: {
        fontSize: 14,
        fontFamily: fonts.DosisRegular,
        width: width * 0.6,
        color: colors.BLACK
    },

    lottieView: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: '100%',
        height: '70%'
    },
    indicatorView: {
        width: width * 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newsImage: {
        width: width * 0.8,
        height: height * 0.2,
        marginRight: 12,
        borderRadius: 8
    },


});