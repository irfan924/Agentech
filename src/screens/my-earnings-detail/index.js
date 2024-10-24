import React, { useState } from 'react'
import {
    View,
    Text
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import TertiaryButton from '../../components/TertiaryButton'
import colors from '../../style/Colors'
import Circle from '../../components/Circle'
import { height, width } from '../../style/Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const MyEarningsDetail = () => {

    const navigation = useNavigation();
    const [totalEarnings, setTotalEarnings] = useState(0);

    return (
        <View style={styles.container}>
            <Circle top={height * 0.1} left={width * 0.7} backgroundColor={colors.BLUE} opacity={0.1} />
            <Circle top={height * 0.15} left={width * 0.6} backgroundColor={colors.RED} opacity={0.1} />
            <Circle top={height * 0.15} left={width * 0.3} backgroundColor={colors.ORANGE} opacity={0.1} />
            <Circle top={height * 0.21} left={width * 0.5} backgroundColor={colors.BLUE} opacity={0.1} />
            <Header title={'My Earnings'} />
            <View style={styles.content}>
                <View style={styles.earning}>
                    <Text style={styles.count}> {totalEarnings} </Text>
                    <Text style={styles.earn}> Total Earnings </Text>
                </View>
                <TertiaryButton
                    iconName={'wallet-outline'}
                    backgroundColor={colors.BLUE}
                    title={'Withdrawls'}
                    onPress={()=> navigation.navigate('Withdrawls')}
                />
                <View style={styles.allTimeView}>
                    <Text style={styles.allTime}>All Time</Text>
                </View>
                <View style={styles.dataContainer}>
                    <Icon name='search' size={56} color={colors.BLUE} />
                    <Text>No Data Found</Text>
                </View>
            </View>
        </View>
    )
}

export default MyEarningsDetail