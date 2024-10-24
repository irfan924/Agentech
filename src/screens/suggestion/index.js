import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import ProfileInput from '../../components/ProfileInput'
import { useNavigation } from '@react-navigation/native'
import { firebase } from '@react-native-firebase/firestore'
import { useCustomAlert } from '../../components/AlertBox'

const Suggestion = () => {

    const navigation = useNavigation();
    const {showAlert} = useCustomAlert();

    const [suggestion, setSuggestion] = useState({
        subject: '',
        suggestions: '',
    })

    const handleDiscard = () => {
        setSuggestion(prevState => ({
            subject: '',
            suggestions: '',
        }));
        navigation.goBack();
    }

    const handleSaveData = () => {
        try {
            if (suggestion.subject && suggestion.suggestions) {
                firebase
                    .firestore()
                    .collection('suggestions')
                    .doc('')
                    .set({
                        subject: suggestion.subject,
                        suggestion: suggestion.suggestions,
                    })
                    .then(() => {
                        showAlert('Thanks For Suggestion!', 'Successfully Suggestions or uploaded!');
                        setSuggestion(prevState => ({
                            subject: '',
                            suggestions: '',
                        }));
                    })
            } else {
                showAlert('Empty Fields !', 'Please Fill all Required Data')
            }
        } catch (error) {
            showAlert('Error Found !', 'Error Found While Uploading Suggestions')
        }
    }

    return (
        <View style={styles.container}>
            <Header title={'Make a Suggestion'} />
            <View style={styles.content}>
                <View style={styles.contentWrapper}>
                    <Text style={styles.subtitle}>
                        Your Suggestion is valuable to us please don't hesitate to share with us.
                    </Text>
                    <ProfileInput
                        title={'Subject'}
                        placeholder={'Write Your Subject Here'}
                        onChangeText={(text) => setSuggestion(prevState => ({
                            ...prevState,
                            subject: text,
                        }))}
                        value={suggestion.subject}
                    />
                    <ProfileInput
                        title={'Suggestion'}
                        placeholder={'Tells us Your Suggestion'}
                        onChangeText={(val) => setSuggestion(prevState => ({
                            ...prevState,
                            suggestions: val,
                        }))}
                        value={suggestion.suggestions}
                    />
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity
                        style={styles.discardBtn}
                        onPress={handleDiscard}
                    >
                        <Text style={styles.discardBtnText}>
                            Discard
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.saveBtn}
                        onPress={handleSaveData}
                    >
                        <Text style={styles.saveBtnText}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Suggestion