import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { useNavigation, StackActions } from '@react-navigation/native'

import { styles } from './Style'
import colors from '../../style/Colors'
import ProfileInput from '../../components/ProfileInput'
import { getUserData } from '../../utils/userData'
import LottieView from 'lottie-react-native'
import CustomModal from '../../components/CustomModal'
import { handleCameraPicker, handleGalleryPicker } from '../../utils/imagePicker'
import { firebase } from '@react-native-firebase/firestore'
import { useCustomAlert } from '../../components/AlertBox'
import auth from '@react-native-firebase/auth'
import FastImage from 'react-native-fast-image'

const Profile = () => {

    const navigation = useNavigation();

    const { showAlert } = useCustomAlert();

    const [userInfo, setUserInfo] = useState();
    const [logo, setLogo] = useState();
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [isVisible, setIsVisible] = useState();
    const [currentUser, setCurrentUser] = useState();

    const [userData, setUserData] = useState({
        name: '',
        number: '',
        emergencyNumber: '',
        address: '',
    })


    const getUserInfo = async () => {
        try {
            const data = await getUserData();
            setUserInfo(data);
            let user = auth().currentUser;
            setCurrentUser(user)
        } catch (error) {
            console.log('Error Found While Getting Data!', error)
        }
    }

    const handleUploadingData = async () => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(`${currentUser.uid}`)
                .update({
                    name: userData.name,
                    number: userData.number,
                    emergencyNumber: userData.emergencyNumber,
                    address: userData.address,
                    logoUrl: logo ? logo : userInfo.logoUrl,
                }).then(() => {
                    showAlert('Successfully Updated!', 'Your Data is successfully Updated.');
                    getUserInfo();
                })
        } catch (error) {
            showAlert(
                'Error While Uploading.',
                `Error Message : ${error.message}`
            )
        }
    }
    const handleUploadingLogo = async () => {
        try {
            firebase
                .firestore()
                .collection('users')
                .doc(`${currentUser.uid}`)
                .update({
                    logoUrl: logo,
                }).then(() => {
                    showAlert('Successfully Updated!', 'Your Data is successfully Updated.');
                    getUserInfo();
                })
        } catch (error) {
            showAlert(
                'Error While Uploading.',
                `Error Message : ${error.message}`
            )
        }
    }

    const handleGallery = async () => {
        try {
            await handleGalleryPicker(
                setIsVisible,
                setUploading,
                setTransferred,
                setLogo,
                'profiles/',
            )
            await handleUploadingLogo();
        } catch {
            (error) => {
                console.log('Error Found')
            }
        }
        setIsVisible(false)
    }
    const handleCamera = async () => {
        try {
            await handleCameraPicker(
                setIsVisible,
                setUploading,
                setTransferred,
                setLogo,
                'profiles/',
            )
            handleUploadingLogo();
        } catch {
            (error) => {
                console.log('Error Found')
            }
        }
        setIsVisible(false)
    }

    const handleDeleteUser = () => {
        const user = auth().currentUser;

        if (user) {
            user.delete()
                .then(() => {
                    showAlert('Success', 'Your account has been successfully deleted.');
                    navigation.dispatch(StackActions.replace('LoginNavigation'));
                })
                .catch((error) => {
                    if (error.code === 'auth/requires-recent-login') {
                        showAlert(
                            'Error',
                            'Please re-authenticate and try again.'
                        );
                    } else {
                        showAlert('Error', `${error.message}`);
                    }
                });
        } else {
            showAlert(
                'Error',
                'No user is currently logged in.'
            );
        }
    };

    useEffect(() => {
        getUserInfo();
    }, [userData])

    return (
        userInfo ?
            <View style={styles.container}>
                <Icon
                    name='arrow-back'
                    size={24}
                    color={colors.BLUE}
                    onPress={() => navigation.goBack()}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.mainContainer}
                >
                    {
                        !userInfo.logoUrl ?

                            <View style={styles.profileContainer}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <View style={styles.imgContainer}>
                                        <Icon
                                            name='person'
                                            style={styles.logo}
                                        />
                                        <Icon name='camera' size={24} color={colors.BLUE} />
                                    </View>
                                </TouchableOpacity>
                                <Text style={styles.userName}>
                                    {userInfo.name}
                                </Text>
                            </View>
                            :
                            <View style={styles.profileContainer}>
                                <TouchableOpacity
                                    style={styles.imgContainer}
                                    onPress={() => setIsVisible(true)}
                                >
                                    <FastImage
                                        source={{ uri: userInfo.logoUrl }}
                                        resizeMode='cover'
                                        style={styles.profileLogo}
                                    />
                                    <Icon name='camera' size={24} color={colors.BLUE} />
                                </TouchableOpacity>

                                <Text style={styles.userName}>
                                    {userInfo.name}
                                </Text>

                            </View>
                    }
                    <ProfileInput
                        title={'Full Name'}
                        placeholder={userInfo.name}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                name: val.length > 0 ? val : userInfo.name
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'EMail address'}
                        placeholder={userInfo.email}
                        editable={false}
                    />
                    <ProfileInput
                        title={'Phone Number'}
                        placeholder={userInfo.number}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                number: val.length > 0 ? val : userInfo.number
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'Emergency Phone Number'}
                        placeholder={userInfo.emergencyNumber}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                emergencyNumber: val.length > 0 ? val : userInfo.emergencyNumber
                            }))
                        }}
                    />
                    <ProfileInput
                        title={'Address'}
                        placeholder={userInfo.address}
                        onChangeText={(val) => {
                            setUserData((prevState) => ({
                                ...prevState,
                                address: val.length > 0 ? val : userInfo.address
                            }))
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('ChangePassword')
                        }}
                    >
                        <Text style={styles.btnText}>
                            Change Password
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.discardBtn}
                            onPress={() => navigation.goBack()}
                        >
                            <Text style={styles.discardBtnText}>
                                Discard
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.saveBtn}
                            onPress={handleUploadingData}
                        >
                            <Text style={styles.saveBtnText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={styles.delBtn}
                        onPress={handleDeleteUser}
                    >
                        <Text style={styles.delBtnText}>
                            Delete My Account
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
                {
                    isVisible ?
                        <CustomModal
                            cancelPress={() => setIsVisible(false)}
                            cameraPress={handleCamera}
                            galleryPress={handleGallery}
                        />
                        :
                        null
                }
            </View>
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

export default Profile