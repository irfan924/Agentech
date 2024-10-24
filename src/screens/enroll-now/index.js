import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
} from 'react-native'

import { styles } from './Style'
import Header from '../../components/Header'
import PrimaryInput from '../../components/PrimaryInput'
import CustomPicker from '../../components/CustomPicker'
import SecondaryInput from '../../components/SecondaryInput'
import PrimaryButton from '../../components/PrimaryButton'
import { firebase } from '@react-native-firebase/firestore'
import { useRoute } from '@react-navigation/native'
import { useCustomAlert } from '../../components/AlertBox'

const EnrollNow = () => {

    const route = useRoute();
    const courseName = route.params;

    const getData = ()=>{
        setCourseValue(
            courseName ? courseName[0] : ''
        );
    }

    const { showAlert } = useCustomAlert();

    useEffect(() => {
        getData();
    })

    // const [enrollData, setEnrollData] = useState({
    //     name: '',
    //     phoneNumber: '',
    //     email: '',
    //     referralCode: '',
    //     education: '',
    //     course: '',
    //     shift: '',
    //     detail: ''
    // })

    // Education Start
    const [isEduOpen, setIsEduOpen] = useState(false);
    const [eduItems, setEduItems] = useState([
        { label: 'Matriculation', value: 'Matric' },
        { label: 'Intermidiate', value: 'Intermidiate' },
        { label: 'Graduate', value: 'Graduation' },
        { label: 'Other', value: 'Other' },
    ]);
    // Education End
    // Course Start
    const [isCourseOpen, setIsCourseOpen] = useState(false);
    const [courseItems, setCourseItems] = useState([
        { label: 'Graphic Designing', value: 'Graphic Designing' },
        { label: 'SEO', value: 'SEO' },
        { label: 'App Development', value: 'App Development' },
        { label: 'UI / UX', value: 'UI / UX' },
        { label: 'Digital Marketing', value: 'Digital Marketing' },
        { label: 'Business Development', value: 'Business Development' },
        { label: 'Social Media Content Creation', value: 'Social Media Content Creation' },
        { label: 'Full Stack Web Development', value: 'Full Stack Web Development' },
        { label: 'WordPress Development', value: 'WordPress Development' },
    ]);
    // Course End
    // Shift Start
    const [isShiftOpen, setIsShiftOpen] = useState(false);
    const [shiftItems, setShiftItems] = useState([
        { label: '10:00 AM - 01:00 PM', value: 'morning' },
        { label: '03:00 PM - 06:00 PM', value: 'evening' },
        { label: '06:00 PM - 09:00 PM', value: 'night' },
    ]);
    // Shift End

    const [eduValue, setEduValue] = useState();
    const [courseValue, setCourseValue] = useState();
    const [shiftValue, setShiftValue] = useState();
    const [referralCode, setReferralCode] = useState();
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [detail, setDetail] = useState();

    const uploadData = async () => {

        if (!name || !phone || !email || !eduValue || !courseValue || !shiftValue || !detail) {
            showAlert('Empty Fields','Please Fill All Fields!')
        } else {
            const res = firebase.firestore()
                .collection('enrollment')
                .doc(`${email}`)
                .set({
                    name: name,
                    phone: phone,
                    email: email,
                    referralCode: referralCode,
                    qualification: eduValue,
                    course: courseValue,
                    shift: shiftValue,
                    detail: detail
                })
                .then(() => {
                    showAlert('Data Uploaded!', 'Susscessfully Data Uploaded.')
                })
                .catch((error) => {
                    showAlert('Temperory Error Found!', error);
                });
        }
    }

    return (
        <View
            style={
                isEduOpen || isCourseOpen || isShiftOpen
                    ?
                    styles.falseContainer
                    :
                    styles.trueContainer}
        >
            <Header title={'Enroll for a Physical Class'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
                nestedScrollEnabled={true}
            >
                <View style={styles.wrapper}>
                    <PrimaryInput
                        placeholder={'Enter Your Name'}
                        onChangeText={(val) => setName(val)}
                    />
                    <PrimaryInput
                        placeholder={'Enter your Phone Number'}
                        keyboardType={'numeric'}
                        onChangeText={(val) => setPhone(val)}
                    />
                    <PrimaryInput
                        placeholder={'Enter your Email'}
                        onChangeText={(val) => setEmail(val)}
                    />
                    <PrimaryInput
                        placeholder={'Referral Code (Optional)'}
                        onChangeText={(val) => setReferralCode(val)}
                    />
                    <CustomPicker
                        placeholder={'Select Your Qualification'}
                        open={isEduOpen}
                        setOpen={setIsEduOpen}
                        value={eduValue}
                        setValue={setEduValue}
                        items={eduItems}
                        setItems={setEduItems}
                    />
                    <CustomPicker
                        placeholder={'Select Your Course'}
                        open={isCourseOpen}
                        setOpen={setIsCourseOpen}
                        value={courseValue}
                        setValue={setCourseValue}
                        items={courseItems}
                        setItems={setCourseItems}
                    />
                    <CustomPicker
                        placeholder={'Select Shift to be Enroll'}
                        open={isShiftOpen}
                        setOpen={setIsShiftOpen}
                        value={shiftValue}
                        setValue={setShiftValue}
                        items={shiftItems}
                        setItems={setShiftItems}
                    />
                    <PrimaryInput
                        placeholder={'Fee'}
                        editable={false}
                    />
                    <SecondaryInput
                        title={'Details About You'}
                        onChangeText={(val) => setDetail(val)}
                    />
                    <PrimaryButton
                        title={'Enroll Now'}
                        onPress={uploadData}

                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default EnrollNow