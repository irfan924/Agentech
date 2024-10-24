import React from 'react'
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import fonts from '../style/Fonts'
import colors from '../style/Colors'
import { height } from '../style/Dimensions'

const PendingWithdrawls = () => {
    return (
        <View style={styles.dataContainer}>
            <Icon
                name='search'
                size={56}
                color={colors.BLUE}
            />
            <Text style={styles.noFound}>
                No Pending Withdrawls
            </Text>
        </View>
    )
}

export default PendingWithdrawls

const styles = StyleSheet.create({
    dataContainer: {
        width: '100%',
        height: height * 0.45,
        alignItems: 'center',
        gap: 12,
        paddingVertical: 24
    },
    noFound: {
        fontSize: 16,
        fontFamily: fonts.DosisSemiBold,
        color: colors.GREY,
        letterSpacing: 1
    }
})