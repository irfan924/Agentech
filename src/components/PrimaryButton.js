import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import { width } from '../style/Dimensions'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const PrimaryButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <Text style={styles.txt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 56,
        backgroundColor: colors.BLUE,
        alignSelf: 'center',
        borderRadius: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 16
    },
    txt: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        color: colors.WHITE,
        letterSpacing: 0.5
    }
})