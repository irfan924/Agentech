import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../style/Colors';
import fonts from '../style/Fonts';

const LoginInputs = ({ onChange, onChangeText, placeholder, icon, secureTextEntry, onPress, value, borderColor, borderWidth }) => {
    return (
        <View style={styles.container}>
            <Icon
                name={icon}
                size={24}
                color={colors.BLUE}
                onPress={onPress}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.GREY}
                style={{...styles.input, borderWidth:borderWidth, borderColor: borderColor}}
                cursorColor={colors.BLUE}
                onChange={onChange}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

export default LoginInputs

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 12,
        borderRadius: 100
    },
    input: {
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        color: colors.BLUE,
        flex: 1,
        letterSpacing: 1
    }
})