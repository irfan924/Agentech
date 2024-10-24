import React from 'react'
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const InputWithIcon = ({ placeholder, iconName, onChange, onChangeText, keyboardType, value }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.GREY}
                style={styles.input}
                onChange={onChange}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
            />
            <Icon name={iconName} style={styles.icon} />
        </View>
    )
}

export default InputWithIcon

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.GREY,
        borderRadius: 4,
        justifyContent: 'space-between',
        paddingHorizontal: 12
    },
    input: {
        flex: 3,
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5,
        color: colors.BLACK,
    },
    icon: {
        fontSize: 24,
        paddingLeft: 8,
        color: colors.GREY
    }
})