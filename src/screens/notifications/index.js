import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { styles } from './Style'

import Header from '../../components/Header'
import NotificationTitle from '../../components/NotificationTitle'
import { useNavigation } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'

const Notifications = () => {

    const navigation = useNavigation();
    const subTitle = 'Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1';

    return (
        <View style={styles.container}>
            <Header title={'Notifications'} />
            <ScrollView>
                <View style={styles.content}>
                    <NotificationTitle title={'New Notifications'} />
                    <TouchableOpacity
                        style={styles.notificationBtn}
                        onPress={() => navigation.navigate('NotificationsDetail')}
                    >
                        <FastImage
                            source={require('../../../assets/images/freelancer.jpg')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.imgLogo}
                        />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1 </Text>
                            <Text style={styles.subTitle}>
                                {subTitle.length <= 30 ? subTitle : subTitle.slice(0, 30) + '...'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <NotificationTitle title={'All Notifications'} />
                    <TouchableOpacity
                        style={styles.notificationBtn}
                        onPress={() => navigation.navigate('NotificationsDetail')}
                    >
                        <FastImage
                            source={require('../../../assets/images/freelancer.jpg')}
                            resizeMode={FastImage.resizeMode.cover}
                            style={styles.imgLogo}
                        />
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title}>Celebratory Achievement: AgenTech Surpasses Milestone with 50+ Students Admissions for Batch 1 </Text>
                            <Text style={styles.subTitle}>
                                {subTitle.length <= 30 ? subTitle : subTitle.slice(0, 30) + '...'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Notifications