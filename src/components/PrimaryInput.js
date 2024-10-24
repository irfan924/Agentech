import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import { width } from '../style/Dimensions'
import colors from '../style/Colors'
import fonts from '../style/Fonts'

const PrimaryInput = ({placeholder, value, onChange, onChangeText, keyboardType, editable}) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.GREY}
                style={styles.input}
                cursorColor={colors.BLUE}
                value={value}
                onChangeText={onChangeText}
                onChange={onChange}
                keyboardType={keyboardType}
                editable={editable}
            />
        </View>
    )
}

export default PrimaryInput

const styles = StyleSheet.create({
    container:{
        width: width*1,
        borderBottomWidth: 1,
        borderBlockColor: colors.BLACK,
        marginVertical: 8,
    },
    input:{
        fontSize: 16,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5
    }
})