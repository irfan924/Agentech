import React from 'react'
import {
    Text,
    ImageBackground
} from 'react-native'

import { styles } from './Style'
import PrimaryButton from '../../components/PrimaryButton'

import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const GetStarted = () => {

    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../../assets/images/background.jpg')}
            style={styles.container}
        >
            <ImageBackground
                source={require('../../../assets/images/yellow-circle.png')}
                style={styles.animBG}
                resizeMode='center'
            >
                <LottieView
                    source={require('../../../assets/animations/welcome.json')}
                    style={styles.animation}
                    autoPlay
                    loop
                />
            </ImageBackground>
            <Text style={styles.title}>
                Welcome to AgenTech IT Solutions
            </Text>
            <Text style={styles.summary}>
                At AgenTech IT Solutions, we are dedicated to transforming your business ideas into digital realities. Our team of skilled developers and innovative thinkers work tirelessly to deliver top-notch software solutions tailored to your unique needs. Whether you're looking for mobile app development, web design, or IT consulting, we've got you covered. Let's embark on this exciting journey together and bring your vision to life with cutting-edge technology and unparalleled expertise. Welcome to the future of IT solutions!
            </Text>
            <PrimaryButton
                title={'Get Started'}
                onPress={() => { navigation.navigate('Signup') }}
            />

        </ImageBackground>
    )
}

export default GetStarted