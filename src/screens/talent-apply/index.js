import React, { useState, useCallback } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'

import Icon from 'react-native-vector-icons/Ionicons'
import InputWithIcon from '../../components/InputWithIcon'
import CustomPicker from '../../components/CustomPicker'
import CVButton from '../../components/CVButton'
import colors from '../../style/Colors'
import PrimaryTitle from '../../components/PrimaryTitle'
import PrimaryButton from '../../components/PrimaryButton'

import { firebase } from '@react-native-firebase/firestore'
import CustomModal from '../../components/CustomModal'
import { useCustomAlert } from '../../components/AlertBox'
import { handleCameraPicker, handleGalleryPicker } from '../../utils/imagePicker'
import { selectAndUploadFile } from '../../utils/firebaseStorageUtils'
import FastImage from 'react-native-fast-image'

const TalentApply = () => {

    const { showAlert } = useCustomAlert();

    // Education Start
    const [isEduOpen, setIsEduOpen] = useState(false);
    const [edu, setEdu] = useState([
        { label: 'Intermidiate', value: 'intermidiate' },
        { label: 'BS / MS', value: 'graduation' },
        { label: 'Other', value: 'other' },
    ]);
    // Education End

    // exp Start
    const [isAvailable, setIsAvailable] = useState(false);
    const [available, setAvailable] = useState([
        { label: 'Full Time', value: 'Full Time' },
        { label: 'Part Time', value: 'Part Time' },
    ]);
    // exp End

    // exp Start
    const [isSkillsetOpen, setIsSkillsetOpen] = useState(false);
    const [skillset, setSkillset] = useState([
        { label: 'Graphic Designer', value: 'Graphic Designer' },
        { label: 'Digital Marketer', value: 'Digital Marketer' },
        { label: 'Laravel Developer', value: 'Laravel Developer' },
        { label: 'App Developer', value: 'App Developer' },
        { label: 'Content Creator', value: 'Content Creator' },
    ]);
    // exp End
    const [modalVisible, setModalVisible] = useState(false);
    const [transfered, setTransferred] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [skillsetValue, setSkillsetValue] = useState(null);
    const [availableValue, setAvailableValue] = useState(null);
    const [eduValue, setEduValue] = useState(null);
    const [logo, setLogo] = useState();
    const [logoURL, setLogoURL] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [experience, setExperience] = useState();
    const [about, setAbout] = useState();
    const [address, setAddress] = useState();
    const [uploadProgress, setUploadProgress] = useState(0);
    const [resume, setResume] = useState();

    const handleCamera = async () => {
        try {
            setModalVisible(false);
            handleCameraPicker(
                setLogo,
                setModalVisible,
                setUploading,
                setTransferred,
                'talent-pools/',
            )
        } catch {
            (error) => {
                console.log('Error Found')
            }
        }
    };

    const handleGallery = async () => {

        try {
            setModalVisible(false);
            handleGalleryPicker(
                setLogo,
                setModalVisible,
                setUploading,
                setTransferred,
                'talent-pools/',
            )
        } catch {
            (error) => {
                console.log('Error Found')
            }
        }
    };

    const selectFile = useCallback(async () => {
        try {
            const resumeName = await selectAndUploadFile(setUploadProgress);
            setResume(resumeName);
            showAlert('Success', 'File successfully uploaded!');
        } catch (error) {
            showAlert('Error', error.message);
        }

    }, []);

    const uploadData = async () => {
        if (resume) {
            if (
                skillsetValue,
                availableValue,
                eduValue,
                name,
                phone,
                email,
                experience,
                about,
                resume,
                logoURL
            ) {
                firebase
                    .firestore()
                    .collection('talent-pool')
                    .doc(`${email}`)
                    .set({
                        logo: logoURL,
                        name: name,
                        phone: phone,
                        email: email,
                        experience: experience,
                        address: address,
                        education: eduValue,
                        availability: availableValue,
                        skillset: skillsetValue,
                        resume: resume,
                        about: about,
                    })
                    .then(() => {
                        showAlert('Susscessfully Uploaded!', 'Thanks For applying we will contact you soon!');
                        setName(null);
                        setPhone(null);
                        setEmail(null);
                        setExperience(null);
                        setAbout(null);
                        setResume(null);
                        setSkillsetValue(null);
                        setEduValue(null);
                        setAddress(null);
                        setLogo(null);
                        setAvailableValue(null);
                    })
                    .catch(() => {
                        showAlert('Error Occure', 'error found while uploading data')
                    })
            } else {
                showAlert('Empty Fields!', 'Please fill all give fields.')
            }
        } else {
            showAlert(
                'Temperarory Error Found!',
                'There is temperory error found please try agin THANKS!'
            )
        }
    }

    return (
        <View style={styles.container}>
            <Header title={'Talent Pool'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <View style={styles.cameraWrapper}>
                        {
                            logo ?
                                <View style={styles.logoWrapper}>
                                    <FastImage
                                        source={{ uri: logo }}
                                        style={styles.logo}
                                    />
                                    {
                                        uploading ?
                                            <View style={styles.loadingWrapper}>
                                                <Text style={styles.loadingText}>
                                                    {transfered} % Completed
                                                </Text>
                                                <ActivityIndicator
                                                    size={'large'}
                                                    color={colors.BLUE}
                                                />
                                            </View>
                                            :
                                            <Text style={styles.success}>
                                                Successfully Uploaded!
                                            </Text>
                                    }
                                </View>
                                :
                                <TouchableOpacity
                                    style={[styles.cameraBtn,]}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <Icon name='camera-outline' style={styles.icon} />
                                </TouchableOpacity>

                        }

                        <Text style={styles.profilePicText}>Profile Picture</Text>
                    </View>
                    <InputWithIcon
                        placeholder={'Full Name'}
                        iconName={'person-outline'}
                        onChangeText={val => setName(val)}
                        value={name}
                    />
                    <InputWithIcon
                        placeholder={'Phone Number'}
                        iconName={'call-outline'}
                        keyboardType={'numeric'}
                        onChangeText={val => setPhone(val)}
                        value={phone}
                    />
                    <InputWithIcon
                        placeholder={'E-mail'}
                        iconName={'mail-outline'}
                        onChangeText={val => setEmail(val)}
                        value={email}
                    />
                    <InputWithIcon
                        placeholder={'Experience'}
                        iconName={'star-outline'}
                        onChangeText={val => setExperience(val)}
                        value={experience}
                    />
                    <InputWithIcon
                        placeholder={'Address'}
                        iconName={'location-outline'}
                        onChangeText={val => setAddress(val)}
                        value={address}
                    />
                    <CustomPicker
                        placeholder={'Education'}
                        open={isEduOpen}
                        setOpen={setIsEduOpen}
                        value={eduValue}
                        setValue={setEduValue}
                        items={edu}
                        setItems={setEdu}
                    />
                    <CustomPicker
                        placeholder={'Availability'}
                        open={isAvailable}
                        setOpen={setIsAvailable}
                        value={availableValue}
                        setValue={setAvailableValue}
                        items={available}
                        setItems={setAvailable}
                    />
                    <CustomPicker
                        placeholder={'Skillset'}
                        open={isSkillsetOpen}
                        setOpen={setIsSkillsetOpen}
                        value={skillsetValue}
                        setValue={setSkillsetValue}
                        items={skillset}
                        setItems={setSkillset}
                    />
                    {
                        uploadProgress ?
                            <View>
                                {
                                    uploadProgress < 100 ?
                                        <View style={styles.innerProgressView}>
                                            <Text style={styles.percentText}>
                                                {uploadProgress} %
                                            </Text>
                                            <ActivityIndicator color={colors.BLUE} size={'large'} />
                                        </View>
                                        :
                                        <Text style={styles.title} >
                                            Successfully Uploaded!
                                        </Text>
                                }
                            </View>
                            :
                            <CVButton
                                title={'Attach Your CV ( .pdf )'}
                                onPress={selectFile}
                            />
                    }
                    <View>
                        <PrimaryTitle title={'About Yourself'} alignSelf={'flex-start'} />
                        <TextInput
                            placeholder='Tell us about yourself'
                            numberOfLines={12}
                            placeholderTextColor={colors.GREY}
                            style={styles.input}
                            multiline={true}
                            onChangeText={val => setAbout(val)}
                            value={about}
                        />
                    </View>
                    <PrimaryButton
                        title={'Apply Now'}
                        onPress={uploadData}
                    />
                </View>
            </ScrollView>
            {
                modalVisible ?
                    <CustomModal
                        cameraPress={handleCamera}
                        galleryPress={handleGallery}
                        cancelPress={() => setModalVisible(false)}
                    />
                    :
                    null
            }
        </View>
    )
}

export default TalentApply