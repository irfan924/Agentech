import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import fonts from '../style/Fonts'
import colors from '../style/Colors'

const SecondaryInput = ({ title, placeholder, onChangeText, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                style={styles.input}
                numberOfLines={10}
                multiline={true}
            />
        </View>
    )
}

export default SecondaryInput

const styles = StyleSheet.create({
    container: {
        gap: 12,
        marginVertical: 12
    },
    title: {
        fontSize: 24,
        fontFamily: fonts.DosisBold,
        color: colors.BLACK,
        letterSpacing: 0.5,
    },
    input: {
        backgroundColor: colors.LIGHTGREY,
        borderRadius: 8,
        padding: 8,
        fontSize: 16,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 1,
        textAlignVertical: 'top',
    }
})