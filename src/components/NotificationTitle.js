import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const NotificationTitle = ({ title }) => {
    return (
        <View style={styles.container}>
            <View style={styles.divider}></View>
            <Text style={styles.title}>
                {title}
            </Text>
            <View style={styles.divider}></View>
        </View>
    )
}

export default NotificationTitle

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8
    },
    title: {
        fontSize: 14,
        color: colors.BLACK,
        letterSpacing: 0.5,
        fontFamily: fonts.DosisSemiBold,
    },
    divider: {
        height: 2,
        backgroundColor: colors.GREY,
        flex: 1,
        borderRadius: 1,
    }
})