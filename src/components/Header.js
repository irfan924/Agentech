import React from 'react'
import {
    StyleSheet,
    View
} from 'react-native'

import colors from '../style/Colors'
import { width } from '../style/Dimensions'

import Icon from 'react-native-vector-icons/Ionicons'

import PrimaryTitle from './PrimaryTitle'

import { useNavigation } from '@react-navigation/native'

const Header = ({ title }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Icon
                name='arrow-back'
                size={24}
                color={colors.BLUE}
                onPress={() => navigation.goBack()}
            />
            <View style={styles.wraper}>
                <PrimaryTitle title={title} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: width * 0.07,
        width: width * 0.9
    },
    wraper: {
        width: width * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    }
})