import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
} from 'react-native'
import { styles } from './Style'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import NetInfo from '@react-native-community/netinfo'
import LottieView from 'lottie-react-native'
import FastImage from 'react-native-fast-image'

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            const conn = NetInfo.addEventListener((state) => {
                return state.isConnected
            })
            auth().onAuthStateChanged(user => {
                if (conn) {
                    user != null ?
                        user.emailVerified === true ?
                            navigation.dispatch(StackActions.replace('Tab'))
                            :
                            navigation.dispatch(StackActions.replace('LoginNavigation', { screen: 'Login' }))
                        :
                        navigation.dispatch(StackActions.replace('LoginNavigation'))
                } else {

                    navigation.dispatch(StackActions.replace('Disconnected'));
                }
            });
        }, 3000)
    }, []);

    return (
        <View style={styles.container}>

            <LottieView
                source={require('../../../assets/animations/welcome.json')}
                style={{ width: '100%', height: 400 }}
                autoPlay
                loop
            />

            <Text style={styles.welcomeTitle}>
                Welcome To
            </Text>
            <FastImage
                source={require('../../../assets/images/AGlogo.png')}
                resizeMode='contain'
                style={{ width: '100%', height: 40 }}
            />
            <Text style={styles.title}>
                IT Solutions
            </Text>
        </View>
    )
}

export default Splash