import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { width } from '../style/Dimensions'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const TertiaryButton = ({ onPress, title, iconName, backgroundColor, disabled }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, { backgroundColor: backgroundColor }]}
            onPress={onPress}
            disabled={disabled}
        >
            <Icon
                name={iconName}
                size={24}
                color={colors.WHITE}
            />
            <Text style={styles.txt}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default TertiaryButton

const styles = StyleSheet.create({
    btn: {
        width: width * 0.9,
        height: 56,
        alignSelf: 'center',
        borderRadius: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 16,
    },
    txt: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        color: colors.WHITE,
        letterSpacing: 1
    }
})