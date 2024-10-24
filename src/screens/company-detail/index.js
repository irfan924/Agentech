import React from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'
import { styles } from './Style'
import Header from '../../components/Header'
import PrimaryTitle from '../../components/PrimaryTitle'
import PrimaryButton from '../../components/PrimaryButton'

import Icon from 'react-native-vector-icons/Ionicons'

import { useRoute } from '@react-navigation/native'
import colors from '../../style/Colors'
import FastImage from 'react-native-fast-image'

const CompanyDetails = () => {

    const route = useRoute();
    const ITEM = route.params;

    return (
        <View style={styles.container}>
            <Header title={'Companies in RYK'} />
            <FlatList
                data={ITEM}
                renderItem={({ item, index }) =>
                    <View style={styles.content}>
                        <View style={styles.infoContainer}>
                            <FastImage
                                source={item.img}
                                style={styles.logo}
                                resizeMode={FastImage.resizeMode.cover}

                            />
                            <Text style={styles.title}>
                                {item.name}
                            </Text>
                            <Text style={styles.subTitle}>
                                {item.title}
                            </Text>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Employees</Text>
                                <Text style={styles.infoSubTitle}>
                                    {item.employees}
                                </Text>
                            </View>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Years of Business</Text>
                                <Text style={styles.infoSubTitle}>
                                    {item.years}
                                </Text>
                            </View>
                            <View style={styles.commonInfo}>
                                <Text style={styles.infoTitle}>Address</Text>
                                <Text style={[styles.infoSubTitle, styles.address]}>
                                    {item.address}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.contactInfo}>
                            <Icon name='call-outline' style={styles.icon} />
                            <Text style={[styles.subTitle, { color: colors.BLACK }]}>
                                {item.number}
                            </Text>
                        </View>
                        <View style={styles.contactInfo}>
                            <Icon name='mail-outline' style={styles.icon} />
                            <Text style={[styles.subTitle, { color: colors.BLACK }]}>
                                {item.email}
                            </Text>
                        </View>
                        <View style={styles.contactInfo}>
                            <Icon name='globe-outline' style={styles.icon} />
                            <Text style={[styles.subTitle, { color: colors.BLACK }]}>
                                {item.website}
                            </Text>
                        </View>
                        <PrimaryTitle
                            title={'About Company'}
                            alignSelf={'flex-start'}
                        />
                        <Text style={styles.infoAboutTalent}>
                            {item.description}
                        </Text>
                        <View style={{ marginVertical: 12 }}>
                            <PrimaryButton title={'Call Now'} />
                        </View>
                    </View>
                }
            />

        </View>
    )
}

export default CompanyDetails