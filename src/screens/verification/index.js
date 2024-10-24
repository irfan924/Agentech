import React from 'react'
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './Style';
import LottieView from 'lottie-react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../style/Colors';

const EmailVerification = ({onPress}) => {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.BLUE, colors.LIGHTBLUE, colors.LIGHTBLUE]}
        >
            <LottieView
                source={require('../../../assets/animations/email.json')}
                style={styles.animation}
                autoPlay
                loop
            />
            <Text style={styles.subtitle}>
                Thank you for registering! Please check your email to verify your account and complete your registration.
            </Text>
            <Text style={styles.notFound}>
                Email Not Found in Inbox!
            </Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={onPress}
            >
                <Text style={styles.btnText}>
                    Click here to resend Email
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default EmailVerification