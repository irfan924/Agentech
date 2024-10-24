import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    Alert,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import PrimaryInput from '../../components/PrimaryInput'
import CustomPicker from '../../components/CustomPicker'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors'
import SecondaryInput from '../../components/SecondaryInput'
import PrimaryButton from '../../components/PrimaryButton'

import { firebase } from '@react-native-firebase/firestore'
import CustomModal from '../../components/CustomModal'
import { handleCameraPicker, handleGalleryPicker } from '../../utils/imagePicker'

const JobPost = () => {

    // exp Start
    const [isExpOpen, setIsExpOpen] = useState(false);
    const [exp, setExp] = useState([
        { label: 'Fresher', value: 'Fresher' },
        { label: 'Intermediate', value: 'Intermediate' },
        { label: 'Expert', value: 'Expert' },
    ]);
    // exp End

    // Education Start
    const [isEduOpen, setIsEduOpen] = useState(false);
    const [edu, setEdu] = useState([
        { label: 'Intermidiate', value: 'intermidiate' },
        { label: 'BS / MS', value: 'graduation' },
    ]);
    // Education End

    // Job Type Start
    const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
    const [jobType, setJobType] = useState([
        { label: 'Full Time', value: 'Full Time' },
        { label: 'Part Time', value: 'Part Time' },
    ]);
    // Job Type End

    // Job Place Start
    const [isJobPlaceOpen, setIsJobPlaceOpen] = useState(false);
    const [jobPlace, setJobPlace] = useState([
        { label: 'Onsite', value: 'Onsite' },
        { label: 'Remote', value: 'Remote' },
    ]);
    // Job Place End

    // Gender Start
    const [isGenderOpen, setIsGenderOpen] = useState(false);
    const [gender, setGender] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Fe-Male', value: 'Fe-Male' },
        { label: 'Both', value: 'Both' },
    ]);
    // Gender End

    const [transfered, setTransferred] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [genderValue, setGenderValue] = useState();
    const [jobPlaceValue, setJobPlaceValue] = useState();
    const [jobTypeValue, setJobTypeValue] = useState();
    const [eduValue, setEduValue] = useState();
    const [expValue, setExpValue] = useState();
    const [logo, setLogo] = useState();
    const [logoURL, setLogoURL] = useState();
    const [title, setTitle] = useState();
    const [companyName, setCompanyName] = useState();
    const [website, setWebsite] = useState();
    const [location, setLocation] = useState();
    const [salary, setSalary] = useState();
    const [jobResponsibilities, setJobResponsibilities] = useState();
    const [jobRequirement, setJobRequirement] = useState();
    const [modalVisible, setModalVisible] = useState(false);

    const [postDate, setPostDate] = useState();
    const [month, setMonth] = useState();


    const handleCamera = async () => {
        await handleCameraPicker(
            setLogo,
            setModalVisible,
            setUploading,
            setTransferred,
            'companies-logo/'
        )
        setModalVisible(false)
    };

    const handleGallery = async () => {

        await handleGalleryPicker(
            setLogo,
            setModalVisible,
            setUploading,
            setTransferred,
            'companies-logo/'
        )
        setModalVisible(false)
    };

    const handleData = async () => {
        if (
            title ||
            companyName ||
            website ||
            location ||
            expValue ||
            eduValue ||
            jobTypeValue ||
            jobPlaceValue ||
            genderValue ||
            salary ||
            logo ||
            jobResponsibilities ||
            jobRequirement
        ) {
            firebase
                .firestore()
                .collection('jobs')
                .doc()
                .set({
                    title: title,
                    companyName: companyName,
                    website: website,
                    location: location,
                    experience: expValue,
                    education: eduValue,
                    jobType: jobTypeValue,
                    jobPlace: jobPlaceValue,
                    gender: genderValue,
                    salary: salary,
                    logo: logoURL,
                    responsibilities: jobResponsibilities,
                    requirements: jobRequirement,
                    postDate: month + ' ' + date.getDate() + ' , ' + date.getFullYear()

                })
                .then(() => {
                    Alert.alert('Successfully Added!');
                    setTitle(null);
                    setCompanyName(null);
                    setWebsite(null);
                    setLocation(null);
                    setExpValue(null);
                    setEduValue(null);
                    setJobTypeValue(null);
                    setJobPlace(null);
                    setGender(null);
                    setSalary(null);
                    setLogoURL(null);
                    setJobResponsibilities(null);
                    setJobRequirement(null);
                })
                .catch(() => {
                    Alert.alert('Temperory Error found! Try Again Later...')
                })
        } else {
            Alert.alert('Please Fill All Fields!')
        }
    }

    const date = new Date();


    useEffect(() => {
        switch (date.getMonth() + 1) {
            case 1:
                setMonth('January')
                break;
            case 2:
                setMonth('February')
                break;
            case 3:
                setMonth('March');
                break;
            case 4:
                setMonth('April');
                break;
            case 5:
                setMonth('May');
                break;
            case 6:
                setMonth('June');
                break;
            case 7:
                setMonth('July');
                break;
            case 8:
                setMonth('August');
                break;
            case 9:
                setMonth('September');
                break;
            case 10:
                setMonth('October');
                break;
            case 11:
                setMonth('November');
                break;
            case 12:
                setMonth('December');
                break;
        }
    })

    return (
        <View style={styles.container}>
            <Header title={'Post a Job '} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <PrimaryInput
                        placeholder={'Job Title'}
                        onChangeText={(val) => setTitle(val)}
                        value={title}
                    />
                    <PrimaryInput
                        placeholder={'Company Name'}
                        onChangeText={(val) => setCompanyName(val)}
                        value={companyName}
                    />
                    <PrimaryInput
                        placeholder={'Company Website'}
                        onChangeText={(val) => setWebsite(val)}
                        value={website}
                    />
                    <PrimaryInput
                        placeholder={'Company Location'}
                        onChangeText={(val) => setLocation(val)}
                        value={location}
                    />
                    <CustomPicker
                        placeholder={'Experience'}
                        open={isExpOpen}
                        setOpen={setIsExpOpen}
                        value={expValue}
                        setValue={setExpValue}
                        items={exp}
                        setItems={setExp}
                    />
                    <CustomPicker
                        placeholder={'Enter Qualification'}
                        open={isEduOpen}
                        setOpen={setIsEduOpen}
                        value={eduValue}
                        setValue={setEduValue}
                        items={edu}
                        setItems={setEdu}
                    />
                    <CustomPicker
                        placeholder={'Job Type'}
                        open={isJobTypeOpen}
                        setOpen={setIsJobTypeOpen}
                        value={jobTypeValue}
                        setValue={setJobTypeValue}
                        items={jobType}
                        setItems={setJobType}
                    />
                    <CustomPicker
                        placeholder={'Job Place'}
                        open={isJobPlaceOpen}
                        setOpen={setIsJobPlaceOpen}
                        value={jobPlaceValue}
                        setValue={setJobPlaceValue}
                        items={jobPlace}
                        setItems={setJobPlace}
                    />
                    <CustomPicker
                        placeholder={'Add Gender'}
                        open={isGenderOpen}
                        setOpen={setIsGenderOpen}
                        value={genderValue}
                        setValue={setGenderValue}
                        items={gender}
                        setItems={setGender}
                    />
                    <PrimaryInput
                        placeholder={'Salary Range'}
                        keyboardType={'numeric'}
                        onChangeText={(val) => setSalary(val)}
                        value={salary}
                    />
                    <View style={styles.bottomView}>
                        <Text style={styles.title}>Company Image</Text>
                        {
                            logo ?
                                <View
                                    style={styles.imgWrapper}
                                >
                                    <FastImage
                                        source={{
                                            uri: logo,
                                        }}
                                        style={styles.logo}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />

                                </View>
                                :
                                <Icon
                                    name='image-outline'
                                    size={200}
                                    color={colors.GREY}
                                    onPress={() => setModalVisible(true)}
                                />
                        }
                        {
                            logo ?
                                transfered >= 99 ?
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
                                :
                                null
                        }

                        <SecondaryInput
                            title={'Job Responsibilities'}
                            onChangeText={(val) => setJobResponsibilities(val)}
                            value={jobResponsibilities}
                        />
                        <SecondaryInput
                            title={'Job Requirements'}
                            onChangeText={(val) => setJobRequirement(val)}
                            value={jobRequirement}
                        />
                    </View>
                    <PrimaryButton
                        title={'Post Now'}
                        onPress={handleData}
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

export default JobPost