import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput
} from 'react-native'
import { styles } from './Style'
import colors from '../../style/Colors'
import PrimaryButton from '../../components/PrimaryButton'
import { useCustomAlert } from '../../components/AlertBox'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const ResetPassword = () => {

    const navigation = useNavigation();
    const { showAlert } = useCustomAlert();

    const [email, setEmail] = useState();

    const handleResetPassword = async () => {

        if (email) {
            try {
                await auth().sendPasswordResetEmail(email)
                showAlert(
                    'Email Sent!',
                    `Email sent Successfully at ${email}`,
                );
                setEmail('');
                navigation.goBack();
            } catch (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        showAlert('Error', 'There is no user corresponding to the given email.');
                        break;
                    case 'auth/invalid-email':
                        showAlert('Error', 'The email address is badly formatted.');
                        break;
                    case 'auth/network-request-failed':
                        showAlert('Error', 'A network error (such as timeout, interrupted connection, or unreachable host) has occurred.');
                        break;
                    default:
                        showAlert('Error', error.message);
                        break;
                }
            }
        } else {
            showAlert(
                'Empty Field!',
                `Please Write Your Email`
            )
        }
    }

    return (
        <View style={styles.container}>
            <FastImage
                source={require('../../../assets/images/forgetPass.png')}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.img}
            />
            <Text style={styles.maintitle}>
                Forget Password!
            </Text>
            <Text style={styles.title}>
                Don't worry Please Enter Your Email Below and Press the 'Send Email' Button and check your inbox .
            </Text>
            <TextInput
                placeholder='example@gmail.com'
                placeholderTextColor={colors.GREY}
                cursorColor={colors.BLUE}
                style={styles.input}
                onChangeText={(val) => setEmail(val)}
            />
            <PrimaryButton
                title={'Send Email'}
                onPress={handleResetPassword}
            />
        </View>
    )
}

export default ResetPassword