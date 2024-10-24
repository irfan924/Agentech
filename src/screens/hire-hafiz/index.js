import React, { useState } from 'react'
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
import { useCustomAlert } from '../../components/AlertBox'


const HireHafiz = () => {

    const { showAlert } = useCustomAlert();

    // Shift Start
    const [isShiftOpen, setIsShiftOpen] = useState(false);
    const [shiftItems, setShiftItems] = useState([
        { label: '10:00 AM - 01:00 PM', value: 'morning' },
        { label: '03:00 PM - 06:00 PM', value: 'evening' },
        { label: '06:00 PM - 09:00 PM', value: 'night' },
    ]);
    // Shift End

    const [shiftValue, setShiftValue] = useState(null);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [details, setDetails] = useState();

    const handleData = async () => {
        try {
            if (
                name
                && phone
                && email
                && shiftValue
                && details
            ) {
                await firebase
                    .firestore()
                    .collection('hire hafiz')
                    .doc(`${email}`)
                    .set({
                        name: name,
                        phone: phone,
                        email: email,
                        shiftTime: shiftValue,
                        details: details,
                    });
                showAlert(
                    'Succesfully Added!',
                    'We have received your data and will contact you soon.'
                );
                setName('');
                setPhone('');
                setEmail('');
                setShiftValue('');
                setDetails('');
            } else {
                showAlert(
                    'Something Missing!',
                    'Please fill are required data accurately'
                )
            }
        } catch (error) {
            showAlert('Temp Error Found! ', error)
        }

    }

    return (
        <View
            style={
                isShiftOpen ?
                    styles.wraper
                    :
                    styles.container
            }
        >
            <Header title={'Hire Hafiz'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.content}>
                    <PrimaryInput
                        placeholder={'Enter Your Name'}
                        value={name}
                        onChangeText={(val) => setName(val)}
                    />
                    <PrimaryInput
                        placeholder={'Enter Your Phone Number'}
                        keyboardType={'numeric'}
                        value={phone}
                        onChangeText={(val) => setPhone(val)}
                    />
                    <PrimaryInput
                        placeholder={'Enter Your E-Mail'}
                        value={email}
                        onChangeText={(val) => setEmail(val)}
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
                    <SecondaryInput
                        title={'Details About You'}
                        value={details}
                        onChangeText={(val) => setDetails(val)}
                    />
                    <PrimaryButton
                        title={'Hire Now'}
                        onPress={handleData}
                    />

                </View>
            </ScrollView>
        </View>
    )
}

export default HireHafiz