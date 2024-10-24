import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

// Vector Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Width and Height from Diemnsions
import { width } from '../style/Dimensions';

// Custom colors and fonts
import colors from '../style/Colors';
import fonts from '../style/Fonts';

const ServiceButton = ({ onPress, iconBgColor, iconName, iconColor, title }) => {
    return (
        <TouchableOpacity
            style={styles.serviceBTN}
            onPress={onPress}
        >
            <View
                style={[styles.iconBg, { backgroundColor: iconBgColor }]}
            >
                <Icon
                    name={iconName}
                    size={24}
                    color={iconColor}
                />
            </View>
            <Text style={styles.serviceName}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ServiceButton

const styles = StyleSheet.create({
    serviceBTN: {
        width: width * 0.22,
        height: width * 0.26,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderWidth: 0.5,
        borderColor: colors.GREY,
        borderRadius: 8
    },
    iconBg: {
        backgroundColor: 'blue',
        padding: 8,
        borderRadius: 4
    },
    serviceName: {
        fontSize: 14,
        color: colors.BLACK,
        fontFamily: fonts.DosisBold,
        letterSpacing: 0.5
    }
})