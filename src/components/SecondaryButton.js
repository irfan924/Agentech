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

const SecondaryButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <Icon
                name='archive'
                size={24}
                color={colors.BLUE}
            />
            <Text style={styles.txt}>
                Download Course Outline
            </Text>
        </TouchableOpacity>
    )
}

export default SecondaryButton

const styles = StyleSheet.create({
    btn: {
        width: width * 0.9,
        height: 56,
        borderWidth: 2,
        borderColor: colors.BLUE,
        alignSelf: 'center',
        borderRadius: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 12,
        gap: 16
    },
    txt: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE,
        letterSpacing: 0.5
    }
})