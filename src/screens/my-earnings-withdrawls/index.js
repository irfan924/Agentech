import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import TertiaryButton from '../../components/TertiaryButton'
import colors from '../../style/Colors'
import Circle from '../../components/Circle'
import { height, width } from '../../style/Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import PendingWithdrawls from '../../components/PendingWithdrawls'
import WithdrawlsHistory from '../../components/WithdrawlsHistory'

const Withdrawls = () => {

    const navigation = useNavigation();

    const [totalEarnings, setTotalEarnings] = useState(0);
    const [isPending, setIsPending] = useState(true)

    return (
        <View style={styles.container}>
            <Circle top={height * 0.1} left={width * 0.7} backgroundColor={colors.BLUE} opacity={0.1} />
            <Circle top={height * 0.15} left={width * 0.6} backgroundColor={colors.RED} opacity={0.1} />
            <Circle top={height * 0.15} left={width * 0.3} backgroundColor={colors.ORANGE} opacity={0.1} />
            <Circle top={height * 0.21} left={width * 0.5} backgroundColor={colors.BLUE} opacity={0.1} />
            <Header title={'Withdrawls'} />
            <View style={styles.content}>
                <View style={styles.earning}>
                    <Text style={styles.count}> {totalEarnings} </Text>
                    <Text style={styles.earn}> Total Earnings </Text>
                </View>
                {
                    totalEarnings > 0 ?
                        <TertiaryButton
                            iconName={'wallet-outline'}
                            backgroundColor={colors.BLUE}
                            title={'Withdrawls'}
                            onPress={() => { }}
                        />
                        :
                        <TertiaryButton
                            iconName={'wallet-outline'}
                            backgroundColor={colors.GREY}
                            title={'Withdrawls'}
                            disabled={true}
                        />
                }
                <View style={styles.btnView}>
                    <TouchableOpacity
                        style={isPending ? styles.btnComplete : styles.btn}
                        onPress={() => setIsPending(true)}
                    >
                        <Icon
                            name='archive-outline'
                            size={16}
                            color={isPending ? colors.BLUE : colors.BLACK}
                        />
                        <Text style={styles.btnText}>
                            Pending
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={isPending ? styles.btn : styles.btnComplete}
                        onPress={() => setIsPending(false)}
                    >
                        <Icon
                            name='refresh'
                            size={16}
                            color={!isPending ? colors.BLUE : colors.BLACK}
                        />
                        <Text style={styles.btnText}>
                            History
                        </Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.dataContainer}>
                    <Icon name='search' size={56} color={colors.BLUE} />
                    <Text style={styles.noFound}>No Data Found</Text>
                </View> */}
                {
                    isPending ?
                        <PendingWithdrawls />
                        :
                        <WithdrawlsHistory />
                }
            </View>
        </View>
    )
}

export default Withdrawls