import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const MenuButton = ({iconName, color, backgroundColor, title, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
        >
            <View style={styles.wrapper}>
                <Icon
                    name={iconName}
                    color={color}
                    size={24}
                    style={[styles.icon, { backgroundColor: backgroundColor }]}
                />
                <Text style={styles.title}>{title}</Text>
            </View>
            <Icon
                name='chevron-forward'
                color={colors.GREY}
                size={24}
            />
        </TouchableOpacity>
    )
}

export default MenuButton

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        padding: 2,
        borderRadius: 4,
    },
    wrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24
    },
    title:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        color: colors.BLACK
    }
})