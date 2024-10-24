import React from 'react'
import {
    View,
    Text,
    ScrollView
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'

const TermsandConditions  = () => {
    return (
        <View style={styles.container}>
            <Header title={'Terms & Conditions'} />
            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.title}>
                    Enrollment: By enrolling in any program offered by AgenTech IT Solutions you agree to abide by the rules and regulations set forth by the institue.
                </Text>
                <Text style={styles.title}>
                    Payment: All fees and charges associated with the training programs must be paid in full prior to the commencement of the program unless agreed upon otherwise in writing.
                </Text>
                <Text style={styles.title}>
                    Attendence: Regular attendence is expected from all participants. Abscense must be camunicated in advance and makeup sessions may be provided at the discretion of the institute
                </Text>
                <Text style={styles.title}>
                    Intellectual Property: All Course to carriculam, presentations, and assesments are the intellectual property of AgenTech IT Solutions and may not be reproduced or shared without explicit written permission.
                </Text>
                <Text style={styles.title}>
                    Code of Conduct: Particepants are expected to maintain a respectful and professional demeanor throughout their engagement with the institute. Any form of harasment, discrimination, or misconduct will not be tolerated and may result in immediate termination of enrollment.
                </Text>
                <Text style={styles.title}>
                     Refunds and Cancellation : Requests for refunds or cancellation must be made in writing within the spacified timeframe outlined in the programe details.AgenTech IT Solutions reserves the right to withhold a portion of the fees of Administration costs.
                </Text>
                
            </ScrollView>
        </View>
    )
}

export default TermsandConditions 