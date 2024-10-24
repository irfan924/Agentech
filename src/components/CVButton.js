import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const CVButton = ({ title , onPress}) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <Text style={styles.txt}>
                {title}
            </Text>
            <Icon
                name='document-attach-outline'
                size={24}
                color={colors.GREY}
            />
        </TouchableOpacity>
    )
}

export default CVButton

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        height: 56,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.GREY,
        alignItems: 'center',
        paddingHorizontal: 8,
        borderRadius: 4
    },
    txt: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.GREY
    }
})