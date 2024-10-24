import React, { useState } from 'react'
import {
    View,
    Image,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import ProfileInput from '../../components/ProfileInput'
import PrimaryButton from '../../components/PrimaryButton'

import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { useCustomAlert } from '../../components/AlertBox'
import { firebase } from '@react-native-firebase/firestore'
import { encryptData } from '../../utils/encryption'
import FastImage from 'react-native-fast-image'

const ChangePassword = () => {

    const navigation = useNavigation();
    const { showAlert } = useCustomAlert();

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const reauthenticate = (currentPassword) => {
        const user = auth().currentUser;
        const cred = auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    };

    const handleChangePassword = async () => {
        if (newPassword, confirmPassword) {
            if (newPassword === confirmPassword) {
                reauthenticate(currentPassword)
                    .then(() => {
                        const user = auth().currentUser;
                        user.updatePassword(newPassword)
                            .then(() => {
                                firebase.firestore()
                                    .collection('users')
                                    .doc(user.uid)
                                    .update({
                                        password: encryptData(newPassword),
                                    })
                                setCurrentPassword('');
                                setNewPassword('');
                                setConfirmPassword('');
                                showAlert('Success', 'Password updated successfully.');
                                navigation.goBack();
                            })
                            .catch((error) => {
                                showAlert('Error', `${error.message}`);
                            });
                    })
                    .catch((error) => {
                        showAlert('Error', `${error.message}`);
                    });
            } else {
                showAlert(
                    'Error',
                    "New and Confirm Password Dosen't match"
                )
            }
        } else {
            showAlert(
                'Empty Fields',
                "Please Fill up all fields"
            )
        }
    }

    return (
        <View style={styles.container}>
            <Header title={'Chnage Password'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >

                <FastImage
                    source={require('../../../assets/images/changePass.png')}
                    style={styles.img}
                    resizeMode={FastImage.resizeMode.cover}

                />
                <ProfileInput
                    title={'Enter your old password'}
                    placeholder={'Old Password'}
                    onChangeText={(val) => setCurrentPassword(val)}
                    value={currentPassword}
                />
                <ProfileInput
                    title={'Enter your new password'}
                    placeholder={'New Password'}
                    onChangeText={(val) => setNewPassword(val)}
                    value={newPassword}
                />
                <ProfileInput
                    title={'ReEnter your new password'}
                    placeholder={'Confirm New Password'}
                    onChangeText={(val) => setConfirmPassword(val)}
                    value={confirmPassword}
                />
                <PrimaryButton
                    title={'Change Password'}
                    onPress={handleChangePassword}
                />
            </ScrollView>
        </View>
    )
}

export default ChangePassword