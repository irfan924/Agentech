import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import LottieView from 'lottie-react-native'
import PrimaryButton from '../../components/PrimaryButton'
import { useCustomAlert } from '../../components/AlertBox'

const ContactUs = () => {

    const { showAlert } = useCustomAlert();

    const phoneNumber = '03038729993';
    const email = 'mailto:info@agentech.co?subject=Support&body=Hello, I need help with...';

    const handleMail = () => {

        Linking.openURL(email)
            .catch(err => {
                showAlert('Error Found!', `${err}`)
            })
    }
    const handleDialer = () => {
        Linking.openURL(`tel:${phoneNumber}`)
            .catch(err => {
                showAlert('Error Found!', `${err}`)
            })
    }
    const handleWeb = () => {
        Linking.openURL(`https://www.agentech.co`)
            .catch(err => {
                showAlert('Error Found!', `${err}`)
            })
    }

    return (
        <View style={styles.container}>
            <Header title={'Contact Us'} />
            <View style={styles.content}>
                <TouchableOpacity
                    style={styles.card}
                    onPress={handleMail}
                >
                    <LottieView
                        source={require('../../../assets/animations/tick_lottie.json')}
                        autoPlay={true}
                        loop={true}
                        style={styles.lottie}
                        resizeMode='contain'
                    />
                    <View style={styles.cardView}>
                        <Text style={styles.subTitle}>
                            Simply Drop us EMail at
                        </Text>
                        <Text style={styles.title}>
                            info@agentech.co
                        </Text>
                        <Text style={styles.subTitle}>
                            You'll receive a reply within 24 hours
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.card}
                    onPress={handleDialer}
                >
                    <LottieView
                        source={require('../../../assets/animations/call_lottie.json')}
                        autoPlay={true}
                        loop={true}
                        style={styles.lottie}
                    />
                    <View style={styles.cardView}>
                        <Text style={styles.subTitle}>
                            Give us a ring at
                        </Text>
                        <Text style={styles.title}>
                            {phoneNumber}
                        </Text>
                        <Text style={styles.subTitle}>
                            Our experts are standing by 24 hours from 9 PM to 9 PM
                        </Text>
                    </View>
                </TouchableOpacity>
                <PrimaryButton
                    title={'Give us a try!'}
                    onPress={handleWeb}
                />
            </View>
        </View>
    )
}

export default ContactUs