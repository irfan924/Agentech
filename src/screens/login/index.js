import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { styles } from './Style'
import colors from '../../style/Colors'
import LoginInputs from '../../components/LoginInputs'
import TertiaryButton from '../../components/TertiaryButton'

import Icon from 'react-native-vector-icons/Ionicons'

import { StackActions, useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { useCustomAlert } from '../../components/AlertBox'
import { firebase } from '@react-native-firebase/firestore'
import { decryptData, encryptData } from '../../utils/encryption'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import FastImage from 'react-native-fast-image'

const Login = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '130344668770-i6spgb4an85aoi6ke66ra6avd1g70r9v.apps.googleusercontent.com',
            offlineAccess: false
        });

    }, [])

    const navigation = useNavigation();

    const { showAlert } = useCustomAlert();

    const [isSecure, setIsSecure] = useState(true);
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    })

    const handleUser = () => {
        const user = auth().currentUser;
        if (userInfo.email, userInfo.password) {
            auth()
                .signInWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(() => {
                    // firebase
                    // .firestore()
                    // .collection('users')
                    // .doc(`${auth().currentUser.uid}`)
                    // .set({
                    //     name: user.displayName,
                    //     email: user.email,
                    // })
                    if (auth().currentUser.emailVerified == true) {
                        showAlert('Congrats!', 'Successfully Logged In');
                        setUserInfo({ name: '', email: '', });
                        navigation.dispatch(StackActions.replace('Tab'));
                    } else {
                        showAlert(
                            'Email Verification',
                            'Please check your inbox and vrify your email',
                            () => {
                                auth().currentUser.sendEmailVerification();
                                showAlert('Email Sent!', `Email sent Successfully at ${auth().currentUser.email} `)

                            }
                        );
                    }
                })
                .catch((error) => {
                    if (error.code === 'auth/email-already-in-use') {
                        showAlert(
                            'Already in Use',
                            'This Email is already taken. Please try again with a different email.'
                        );
                    } else if (error.code === 'auth/invalid-email') {
                        showAlert(
                            'Invalid Email',
                            'The email address is invalid. Please check and try again.'
                        );
                    } else if (error.code === 'auth/user-not-found') {
                        showAlert(
                            'User Not Found',
                            'There is no user corresponding to this email. Please check and try again.'
                        );
                    } else if (error.code === 'auth/wrong-password') {
                        showAlert(
                            'Wrong Password',
                            'The password is incorrect. Please check and try again.'
                        );
                    } else {
                        showAlert(
                            'Wrong Password',
                            'The password is incorrect. Please check and try again.'
                        );
                    }
                });
        } else {
            showAlert(
                'Empty Fields!',
                'Please Enter all required data.'
            )
        }
    }

    const handleGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            let res = await auth().signInWithCredential(googleCredential);

            const { uid, displayName, email, photoURL } = res.user;
            await firebase
                .firestore()
                .collection('users')
                .doc(`${auth().currentUser.uid}`)
                .set({
                    name: displayName,
                    email: email,
                    referralCode: generateReferralCode(),
                    logoUrl: photoURL,
                });
            showAlert('Congrats!', 'Successfully Logedin');
            navigation.dispatch(StackActions.replace('Tab'));
        } catch (error) {
            switch (error.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    showAlert('Cancel', 'You are cance the google Dialog Box')
                    break;
                case statusCodes.IN_PROGRESS:
                    showAlert('In Progress', '(eg. sign in) already in progress')
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    showAlert('Not Available', 'play services not available or outdated')
                    break;
                default:
                    showAlert('Error Found', `${error}`)
            }
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <FastImage
                    source={require('../../../assets/images/AGlogo.png')}
                    style={styles.upperView}
                    resizeMode={FastImage.resizeMode.center}
                />
                <View style={styles.absoluteContent}>
                    <Text style={styles.subTitle}>
                        Hey! Welcome Back
                    </Text>
                    <Text style={styles.summary}>
                        Please Enter Your Email and Password To Login
                    </Text>
                    <View style={styles.inputView}>
                        <LoginInputs
                            placeholder={'your@email.com'}
                            icon={'mail-outline'}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                email: val
                            }))}
                            value={userInfo.email}
                        />
                        <LoginInputs
                            placeholder={'Password'}
                            icon={isSecure ? 'eye-off-outline' : 'eye-outline'}
                            onPress={() => setIsSecure(!isSecure)}
                            secureTextEntry={isSecure}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                password: val
                            }))}
                            value={userInfo.password}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ResetPassword');
                            }}
                        >
                            <Text style={{ ...styles.btnText, alignSelf: 'flex-end', color: colors.LIGHTRED }}>
                                Reset Password!
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TertiaryButton
                        title={'Login'}
                        backgroundColor={colors.BLACK}
                        onPress={handleUser}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.btnText}>
                            Don't Have an Account ? SignUp
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.dividerWrapper}>
                        <View style={styles.divider}></View>
                        <Text style={styles.dividerText}>
                            Or Continue With
                        </Text>
                        <View style={styles.divider}></View>
                    </View>
                    <View style={styles.iconWrapper}>
                        <TouchableOpacity
                            style={[styles.loginBtn, { backgroundColor: colors.DARKBLUE }]}
                        >
                            <View style={styles.logoView}>
                                <FastImage
                                    source={require('../../../assets/images/flogo.png')}
                                    style={styles.logo}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                            </View>
                            <Text style={styles.loginBtnText}>
                                Facebook
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ ...styles.loginBtn, backgroundColor: colors.ORANGE }}
                            onPress={handleGoogle}
                        >
                            <View style={styles.logoView}>
                                <FastImage
                                    source={require('../../../assets/images/glogo.png')}
                                    style={styles.logo}
                                    resizeMode={FastImage.resizeMode.center}
                                />
                            </View>
                            <Text style={styles.loginBtnText}>
                                Google
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default Login