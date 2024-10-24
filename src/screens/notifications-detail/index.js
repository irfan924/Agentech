import React from 'react'
import {
    View,
    Text,
    ScrollView,
} from 'react-native'
import { styles } from './Style';
import Header from '../../components/Header';
import FastImage from 'react-native-fast-image';

const NotificationsDetail = () => {
    return (
        <View style={styles.container}>
            <Header title={'Notification'} />
            <ScrollView>
                <View style={styles.content}>
                    <FastImage
                        source={require('../../../assets/images/freelancer.jpg')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={styles.banner}
                    />
                    <Text style={styles.title}>
                        Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1
                    </Text>
                    <Text style={styles.subTitle}>
                        Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1.Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1.Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1.
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default NotificationsDetail;