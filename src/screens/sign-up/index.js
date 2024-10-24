import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native'
import { styles } from './Style'
import colors from '../../style/Colors'
import LoginInputs from '../../components/LoginInputs'
import TertiaryButton from '../../components/TertiaryButton'

import Icon from 'react-native-vector-icons/Ionicons'
import { StackActions, useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'
import { firebase } from '@react-native-firebase/firestore'
import { useCustomAlert } from '../../components/AlertBox'
import generateReferralCode from '../../utils/generateReferralCode'
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import FastImage from 'react-native-fast-image'




const SignUp = () => {

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '130344668770-i6spgb4an85aoi6ke66ra6avd1g70r9v.apps.googleusercontent.com',
            offlineAccess: false
        });

    }, [])

    const [isSecure, setIsSecure] = useState(true);

    const navigation = useNavigation();
    const { showAlert } = useCustomAlert();

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleUser = () => {
        if (userInfo.name, userInfo.email, userInfo.password) {
            const userCredential = auth()
                .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then(async () => {
                    await firebase
                        .firestore()
                        .collection('users')
                        .doc(`${auth().currentUser.uid}`)
                        .set({
                            name: userInfo.name,
                            email: userInfo.email,
                            password: encryptData(userInfo.password),
                            referralCode: generateReferralCode(),
                        });
                    showAlert('Congrats', 'Successfully Created Your Account.');
                    setUserInfo((prev) => ({
                        name: '',
                        email: '',
                        password: '',
                    }))
                    auth().currentUser.sendEmailVerification();
                    showAlert('Email Send', 'Please Check your email inbox and verify your email.')
                    navigation.navigate('Login');
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        showAlert(
                            'Already in Use',
                            'This Email has Already Taken Please try agin with different email.'
                        )
                    }

                    if (error.code === 'auth/invalid-email') {
                        showAlert('Invalid Email', 'That email address is invalid!');
                    }

                    console.error(error);
                });

        } else {
            showAlert(
                'Empty Fields!',
                'Please Enter all required data to Regiester Yourself.'
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
                        Please Register Yourself
                    </Text>
                    <Text style={styles.summary}>
                        We are happy that you are Here
                    </Text>
                    <View style={styles.inputView}>
                        <LoginInputs
                            placeholder={'John Doe'}
                            icon={'person-outline'}
                            onChangeText={(val) => setUserInfo((prevState) => ({
                                ...prevState,
                                name: val
                            }))}
                            value={userInfo.name}
                        />
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
                    </View>
                    <TertiaryButton
                        title={'SignUp'}
                        backgroundColor={colors.BLACK}
                        onPress={handleUser}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Login')
                        }}
                    >
                        <Text style={styles.btnText}>
                            Already Have an Account ? Login
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

export default SignUp