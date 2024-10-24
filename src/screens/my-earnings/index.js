import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors'
import LinearGradient from 'react-native-linear-gradient'

import { useNavigation } from '@react-navigation/native'
import { useCustomAlert } from '../../components/AlertBox'
import { getUserData } from '../../utils/userData'
import FastImage from 'react-native-fast-image'
import  Share from 'react-native-share'

const MyEarnings = () => {

    const navigation = useNavigation();

    const { showAlert } = useCustomAlert();
    const [userInfo, setUserInfo] = useState();

    const getUserInfo = async () => {
        let res = await getUserData();
        setUserInfo(res);
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    const copyToClipboard = async () => {
        const code = userInfo.referralCode;
        await Share.open({
            message: code,
            title: 'Copy Referral Code'
        })
            .then(() => {
                showAlert(code, 'Successfully Copied.')
            })
            .catch((err) => {
                if (err && err.message) {
                    switch (err.message) {
                        case 'User did not share':
                            showAlert('Share Cancelled', 'You cancelled the sharing operation.');
                            break;
                        case 'Could not find share intent':
                            showAlert('Error', 'No appropriate app found for sharing.');
                            break;
                        case 'Failed to copy to clipboard':
                            showAlert('Error', 'Failed to copy text to clipboard.');
                            break;
                        default:
                            showAlert('Error', 'An unknown error occurred: ' + err.message);
                            break;
                    }
                } else {
                    showAlert('Error', 'An unexpected error occurred.');
                }
            })
    }

    return (
        <View style={styles.container}>
            <Header title={'Referral Rewards'} />
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('MyEarningsDetail')}
                >
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText}>
                            My Earnings
                        </Text>
                        <Text
                            style={[styles.cardMoney, { color: colors.DARKGREEN }]}
                        >
                            0
                        </Text>
                    </View>
                    <Icon
                        name='wallet-outline'
                        style={[styles.Icon, { backgroundColor: colors.BLUE }]}
                        color={colors.WHITE}
                    />
                </TouchableOpacity>
                <View
                    style={styles.card}
                >
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText}>
                            My Referrals
                        </Text>
                        <Text
                            style={[styles.cardMoney, { color: colors.CHOCOLATE }]}
                        >
                            0
                        </Text>
                    </View>
                    <Icon
                        name='people-outline'
                        style={[styles.Icon, { backgroundColor: colors.LIGHTCHOCOLATE }]}
                        color={colors.CHOCOLATE}
                    />
                </View>
                <View
                    style={styles.card}
                >
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardText}>
                            Pending Approval
                        </Text>
                        <Text
                            style={[styles.cardMoney, { color: colors.ORANGE }]}
                        >
                            0
                        </Text>
                    </View>
                    <Icon
                        name='sad-outline'
                        style={[styles.Icon, { backgroundColor: colors.LIGHTYELLOW }]}
                        color={colors.ORANGE}
                    />
                </View>
                <View>
                    <FastImage
                        source={require('../../../assets/images/gift-box1.png')}
                        style={styles.giftBox}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <LinearGradient
                        colors={[colors.BLUE, colors.DARKBLUE]}
                        style={styles.referralContainer}
                    >
                        <View style={styles.referralWrapper}>
                            <Text style={styles.referral}>
                                Referral Code :
                                {
                                    userInfo ?
                                        ` ${userInfo.referralCode}`
                                        :
                                        <ActivityIndicator
                                            size={24}
                                            color={colors.BLUE}
                                        />
                                }
                            </Text>
                            <Icon
                                name='copy-outline'
                                size={36}
                                color={colors.WHITE}
                                onPress={() => copyToClipboard()}
                            />
                        </View>
                        <Text style={styles.subTitle}>
                            Ask Your Friend to use your Referral code while registration
                        </Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    )
}

export default MyEarnings