import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import { styles } from './Style'
import LinearGradient from 'react-native-linear-gradient'
import colors from '../../style/Colors'

import Icon from 'react-native-vector-icons/Ionicons'
import MenuButton from '../../components/MenuButton'
import LottieView from 'lottie-react-native'

import { getUserData } from '../../utils/userData'
import { useCustomAlert } from '../../components/AlertBox'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import FastImage from 'react-native-fast-image'

import Share from 'react-native-share'

const Menu = () => {

    const navigation = useNavigation();

    const { showAlert } = useCustomAlert();

    const [userInfo, setUserInfo] = useState();

    const getUserInfo = async () => {
        try {
            const data = await getUserData();
            setUserInfo(data);
        } catch (error) {
            console.log('Error Found While Getting Data!', error)
        }
    }

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

    const DATA = [
        {
            iconName: 'home',
            color: colors.ORANGE,
            backgroundColor: colors.LIGHTYELLOW,
            title: 'Home',
        },
        {
            iconName: 'book',
            color: colors.BLUE,
            backgroundColor: colors.LIGHTBLUE,
            title: 'My Courses',
        },
        {
            iconName: 'person-outline',
            color: colors.DARKBLUE,
            backgroundColor: colors.LIGHTGREY,
            title: 'Edit Profile',
        },
        {
            iconName: 'server',
            color: colors.YELLOW,
            backgroundColor: colors.LIGHTYELLOW,
            title: 'My Earnings',
        },
        {
            iconName: 'business',
            color: colors.CHOCOLATE,
            backgroundColor: colors.LIGHTCHOCOLATE,
            title: 'Company Listing',
        },
        {
            iconName: 'grid-outline',
            color: colors.PINK,
            backgroundColor: colors.LIGHTPINK,
            title: 'Apply For a Course',
        },
        {
            iconName: 'bag-check-outline',
            color: colors.CHOCOLATE,
            backgroundColor: colors.LIGHTCHOCOLATE,
            title: 'Applied Jobs',
        },
        {
            iconName: 'mic',
            color: colors.DARKBLUE,
            backgroundColor: colors.LIGHTBLUE,
            title: 'Contact Us',
        },
        {
            iconName: 'chatbubble-ellipses',
            color: colors.ORANGE,
            backgroundColor: colors.LIGHTYELLOW,
            title: 'Make a Suggestion',
        },
        {
            iconName: 'information-circle',
            color: colors.DARKGREEN,
            backgroundColor: colors.LIGHTGREEN,
            title: 'About AgenTech',
        },
        {
            iconName: 'shield-half',
            color: colors.LIGHTBLUE,
            backgroundColor: colors.BLUE,
            title: 'Privacy Policy',
        },
        {
            iconName: 'reader',
            color: colors.RED,
            backgroundColor: colors.LIGHTRED,
            title: 'Terms & Conditions',
        },
    ]

    useEffect(() => {
        getUserInfo();
    }, [])

    const handleSignOut = () => {
        auth().signOut();
        showAlert('Signout Successfully', 'You are successfully logout. ')
        navigation.dispatch(StackActions.replace('LoginNavigation'))
    }

    return (
        userInfo ?
            <LinearGradient
                colors={[colors.BLUE, colors.DARKBLUE, colors.DARKBLUE]}
                style={styles.container}
            >
                <Icon name='arrow-back' style={styles.icon} onPress={() => navigation.goBack()} />
                <View style={styles.upperView}>
                    <View style={styles.logoBG}>
                        {
                            userInfo.logoUrl ?
                                <FastImage
                                    source={{ uri: userInfo.logoUrl }}
                                    style={styles.logo}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                                :
                                <Icon
                                    name='person'
                                    size={75}
                                    color={colors.BLUE}
                                />
                        }
                    </View>
                    <Text style={styles.title}>
                        {userInfo.name}
                    </Text>
                    <View style={styles.referalView}>
                        <Text style={styles.subTitle}>Referal Code : {userInfo.referralCode}</Text>
                        <Icon
                            name='copy-outline'
                            size={36}
                            color={colors.WHITE}
                            onPress={copyToClipboard}
                        />
                    </View>
                </View>
                <View style={styles.content}>
                    <FlatList
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <MenuButton
                                iconName={item.iconName}
                                color={item.color}
                                backgroundColor={item.backgroundColor}
                                title={item.title}
                                key={index}
                                onPress={() => {
                                    switch (index) {
                                        case 0:
                                            navigation.dispatch(StackActions.replace('Tab'));
                                            break;
                                        case 1:
                                            navigation.navigate('Tab', { screen: 'MyCourses' });
                                            break;
                                        case 2:
                                            navigation.navigate('Profile')
                                            break;
                                        case 3:
                                            navigation.navigate('MyEarnings');
                                            break;
                                        case 4:
                                            navigation.navigate('Companies')
                                            break;
                                        case 5:
                                            navigation.navigate('CourseApply')
                                            break;
                                        case 6:
                                            navigation.navigate('AppliedJobs')
                                            break;
                                        case 7:
                                            navigation.navigate('ContactUs')
                                            break;
                                        case 8:
                                            navigation.navigate('Suggestion')
                                            break;
                                        case 9:
                                            navigation.navigate('AboutUs')
                                            break;
                                        case 10:
                                            navigation.navigate('PrivacyPolicy')
                                            break;
                                        case 11:
                                            navigation.navigate('TermsandConditions')
                                            break;
                                    }
                                }}

                            />
                        }
                    />
                    <TouchableOpacity
                        style={styles.logout}
                        onPress={handleSignOut}
                    >
                        <Icon name='power' style={styles.powerIcon} />
                        <Text style={styles.btnText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            :
            <View style={styles.lottieView}>
                <LottieView
                    source={require('../../../assets/animations/loading.json')}
                    style={styles.animation}
                    autoPlay
                    loop
                />
            </View>
    )
}

export default Menu