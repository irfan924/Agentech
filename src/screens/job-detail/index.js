import React, { useEffect } from 'react'
import {
    View,
    Text,
    Image,
    FlatList
} from 'react-native'

import { styles } from './Style'
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../style/Colors';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const JobDetail = () => {

    const route = useRoute();
    const item = route.params;

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title={'Jobs'} />
            <FlatList
                data={item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) =>

                    <View>
                        <View style={styles.logoContainer}>
                            <FastImage
                                source={{
                                    uri: item.logo,
                                }}
                                style={styles.companyLogo}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                            <Text style={styles.jobTitle}>
                                {item.title}
                            </Text>
                        </View>
                        <View>
                            <View style={styles.content}>
                                <View style={styles.jobInfoContent}>
                                    <View style={styles.commonJobInfo}>
                                        <Icon
                                            name='briefcase'
                                            size={16}
                                            color={colors.BLUE}
                                        />
                                        <Text style={styles.commonInfoText}>
                                            {item.jobPlace}
                                        </Text>
                                    </View>
                                    <View style={styles.commonJobInfo}>
                                        <Icon
                                            name='location'
                                            size={16}
                                            color={colors.ORANGE}
                                        />
                                        <Text style={styles.commonInfoText} >
                                            {item.location}
                                        </Text>
                                    </View>
                                    <View style={styles.commonJobInfo}>
                                        <Icon
                                            name='hourglass'
                                            size={16}
                                            color={colors.DARKGREEN}
                                        />
                                        <Text style={styles.commonInfoText}>
                                            Posted Date : {item.postDate}
                                        </Text>
                                    </View>
                                    <View style={styles.commonJobInfo}>
                                        <Icon
                                            name='globe'
                                            size={16}
                                            color={colors.DARKBLUE}
                                        />
                                        <Text style={styles.commonInfoText}>
                                            {item.website}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.jobDesciptionContainer}>
                                    <Text style={styles.title}>Job Requirements</Text>
                                    <Text style={styles.desc}>
                                        {item.requirements}
                                    </Text>

                                    <Text style={styles.title}>Job Responsibilities</Text>
                                    <Text style={styles.desc}>
                                        {item.responsibilities}
                                    </Text>
                                    <View style={styles.innerBottmView}>
                                        <Text style={styles.desc}>
                                            Salary: {item.salary}
                                        </Text>
                                        <Text style={styles.desc}>
                                            Location: {item.location}
                                        </Text>
                                        <Text style={styles.desc}>
                                            Job Type : {item.jobType}
                                        </Text>
                                    </View>
                                </View>
                                <PrimaryButton
                                    title={'Apply Now'}
                                    onPress={() => navigation.navigate('JobApply', [item])}
                                />
                            </View>
                        </View>
                    </View>
                } />
        </View>
    )
}

export default JobDetail