import React, { useCallback, useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    ActivityIndicator,
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import InputWithIcon from '../../components/InputWithIcon'
import PrimaryTitle from '../../components/PrimaryTitle'
import CustomPicker from '../../components/CustomPicker'
import colors from '../../style/Colors'
import CVButton from '../../components/CVButton'
import PrimaryButton from '../../components/PrimaryButton'

import { useRoute } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/firestore'
import { useCustomAlert } from '../../components/AlertBox'
import { selectAndUploadFile } from '../../utils/firebaseStorageUtils'


const JobApply = () => {


    const route = useRoute();
    const jobDetail = route.params;

    const { showAlert } = useCustomAlert();

    // Education Start
    const [isEduOpen, setIsEduOpen] = useState(false);
    const [eduItems, setEduItems] = useState([
        { label: 'Intermidiate', value: 'intermidiate' },
        { label: 'BS / MS', value: 'graduation' },
        { label: 'Other', value: 'other' },
    ]);
    // Education End

    // Availablity Start
    const [isAvailablityOpen, setIsAvailablityOpen] = useState(false);
    const [availablityItems, setAvailablityItems] = useState([
        { label: 'Full Time', value: 'full-time' },
        { label: 'Part Time', value: 'part-time' },
    ]);
    // Availablity End

    // SkillSet Start
    const [isSkillsetOpen, setIsSkillsetOpen] = useState(false);
    const [skillsetItems, setSkillsetItems] = useState([
        { label: 'Graphic Designer', value: 'Graphic Designer' },
        { label: 'Digital Marketer', value: 'Digital Marketer' },
        { label: 'Laravel Developer', value: 'Laravel Developer' },
        { label: 'App Developer', value: 'App Developer' },
        { label: 'Content Creator', value: 'Content Creator' },
        { label: 'WordPress Developer', value: 'WordPress Developer' },
    ]);
    // Skillset End

    const [skillsetValue, setSkillsetValue] = useState(null);
    const [availablityValue, setAvailablityValue] = useState(null);
    const [eduValue, setEduValue] = useState(null);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [experience, setExperience] = useState();
    const [about, setAbout] = useState();
    const [address, setAddress] = useState();
    const [resume, setResume] = useState();
    const [uploadProgress, setUploadProgress] = useState(0);

    const selectFile = useCallback(async () => {

        try {
            const url = await selectAndUploadFile(setUploadProgress);
            setResume(url);
            showAlert('Success', 'File successfully uploaded!');
        } catch (error) {
            showAlert('Error', error.message);
        }
    }, []);

    const uploadData = async () => {
        getFileDownloadURL();
        if (
            skillsetValue,
            availablityValue,
            eduValue,
            name,
            phone,
            email,
            experience,
            about,
            resume
        ) {
            firebase
                .firestore()
                .collection('job-applicants')
                .doc(`${email}`)
                .set({
                    name: name,
                    phone: phone,
                    email: email,
                    experience: experience,
                    about: about,
                    resume: resume,
                    skillset: skillsetValue,
                    availability: availablityValue,
                    education: eduValue,
                    jobTitle: jobDetail.map((item) => item.title),
                    company: jobDetail.map((item) => item.companyName),
                    address: address
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
                    setAvailablityValue(null);
                    setEduValue(null);
                    setAddress(null);
                })
                .catch(() => {
                    showAlert('Error Occure', 'error found while uploading data')
                })
        } else {
            showAlert('Empty Fields!', 'Please fill all give fields.')
        }
    }

    return (
        <View style={styles.container}>
            <Header title={'Apply For Job'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <PrimaryTitle title={'Personal Info'} alignSelf={'flex-start'} />
                    <InputWithIcon
                        placeholder={'Full Name'}
                        iconName={'person-outline'}
                        onChangeText={(val) => setName(val)}
                        value={name}
                    />
                    <InputWithIcon
                        placeholder={'Phone Number'}
                        iconName={'call-outline'}
                        keyboardType={'numeric'}
                        onChangeText={(val) => setPhone(val)}
                        value={phone}
                    />
                    <InputWithIcon
                        placeholder={'E-Mail'}
                        iconName={'mail-outline'}
                        onChangeText={(val) => setEmail(val)}
                        value={email}
                    />
                    <InputWithIcon
                        placeholder={'Experience'}
                        iconName={'star-outline'}
                        onChangeText={(val) => setExperience(val)}
                        value={experience}
                    />
                    <InputWithIcon
                        placeholder={'Address'}
                        iconName={'location-outline'}
                        onChangeText={(val) => setAddress(val)}
                        value={address}
                    />
                    <CustomPicker
                        placeholder={'Education'}
                        open={isEduOpen}
                        setOpen={setIsEduOpen}
                        value={eduValue}
                        setValue={setEduValue}
                        items={eduItems}
                        setItems={setEduItems}
                    />
                    <CustomPicker
                        placeholder={'Availablity'}
                        open={isAvailablityOpen}
                        setOpen={setIsAvailablityOpen}
                        value={availablityValue}
                        setValue={setAvailablityValue}
                        items={availablityItems}
                        setItems={setAvailablityItems}
                    />
                    <CustomPicker
                        placeholder={'Skillset'}
                        open={isSkillsetOpen}
                        setOpen={setIsSkillsetOpen}
                        value={skillsetValue}
                        setValue={setSkillsetValue}
                        items={skillsetItems}
                        setItems={setSkillsetItems}
                    />
                    <View>
                        <PrimaryTitle title={'About Yourself'} alignSelf={'flex-start'} />
                        <TextInput
                            placeholder='Tell us about yourself'
                            numberOfLines={12}
                            placeholderTextColor={colors.GREY}
                            style={styles.input}
                            multiline={true}
                            onChangeText={(val) => setAbout(val)}
                            value={about}
                        />
                    </View>
                    {
                        resume ?
                            <View>
                                {
                                    uploadProgress <= 99 ?
                                        <View style={styles.innerProgressView}>
                                            <Text style={styles.percentText}>
                                                {uploadProgress} %
                                            </Text>
                                            <ActivityIndicator
                                                size={24}
                                                color={colors.BLUE}
                                            />
                                        </View>
                                        :
                                        <Text style={styles.percentText}>
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

                    <PrimaryButton
                        title={'Submit'}
                        onPress={uploadData}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default JobApply