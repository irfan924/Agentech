import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import colors from '../style/Colors'
import fonts from '../style/Fonts'

const PrimaryTitle = ({ title, alignSelf }) => {

    return (
        <View style={{ alignSelf: alignSelf }}>
            <View style={styles.container}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <View style={{ ...styles.bottomLine, width: 110 }}></View>
            </View>
        </View>
    )
}

export default PrimaryTitle

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
    },
    title: {
        fontSize: 24,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        textAlign: 'center'
    },
    bottomLine: {
        height: 4,
        backgroundColor: colors.BLUE,
        borderRadius: 2,
    }
})