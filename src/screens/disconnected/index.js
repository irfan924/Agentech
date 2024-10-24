import React, { useEffect, useState } from 'react'
import {
    View,
} from 'react-native'
import { styles } from './Style'
import LottieView from 'lottie-react-native'
import TertiaryButton from '../../components/TertiaryButton'
import colors from '../../style/Colors'

import Netinfo from '@react-native-community/netinfo'
import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'

const Disconnected = () => {

    const navigation = useNavigation();

    const [isConnected, setIsConnected] = useState();

    useEffect(() => {
        Netinfo.addEventListener((state) =>
            setIsConnected(state.isConnected)
        )
        setTimeout(() => {
            auth().onAuthStateChanged(user => {
                if (isConnected) {
                    const roteScreen = user !== null ? 'Tab' : 'LoginNavigation';

                    navigation.dispatch(StackActions.replace(roteScreen));
                } else {

                }
            })
        }, 1000)
    }, [])

    const handleConnection = () => {
        Netinfo.addEventListener((state) => {
            setIsConnected(state.isConnected);
        })
        auth().onAuthStateChanged(user => {
            if (isConnected) {
                const roteScreen = user !== null ? 'Tab' : 'LoginNavigation';

                navigation.dispatch(StackActions.replace(roteScreen));
            } else {

            }
        })
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../../assets/animations/network error.json')}
                style={styles.animation}
                autoPlay
                loop
                resizeMode='contain'
            />
            <TertiaryButton
                title={'Try Again'}
                backgroundColor={colors.RED}
                iconName={'refresh'}
                onPress={handleConnection}
            />
        </View>
    )
}

export default Disconnected